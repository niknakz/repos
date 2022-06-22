import axios from 'axios'

type ID = string

const useAxios = (query, variables, headers = null) => {
  return axios({
    url: 'https://gitlab.com/api/graphql',
    method: 'post',
    data: {
      query,
      variables,
    },
    headers,
  })
}

const getRepos = async (ids: ID[]) => {
  const query = `query gitlabRepos($ids: [ID!]) {
    projects(ids: $ids) {
      nodes {
        id
        name
        description
        webUrl
        avatarUrl
        lastActivityAt
      }
    }
  }`
  const variables = {
    ids: ids.map((id) => `gid://gitlab/Project/${id}`),
  }
  const res = await useAxios(query, variables)
  const {
    data: { error, data: result },
  } = res
  if (error) throw new Error(error)
  return result.projects.nodes.map((x) => ({
    id: x.id.replace('gid://gitlab/Project/', ''),
    name: x.name,
    description: x.description,
    link: new URL(x.webUrl),
    avatar: x.avatarUrl,
    time: new Date(x.lastActivityAt),
  }))
}

const getMRs = async (ids: ID[]) => {
  const query = `query gitlabMergeRequests($ids: [ID!]) {
    projects(ids: $ids) {
      nodes {
        id
        name
        mergeRequests(state: opened, first: 2) {
          nodes {
            title
            description
            draft
            conflicts
            webUrl
            sourceBranch
            updatedAt
            reference
          }
        }
      }
    }
  }`
  const variables = {
    ids: ids.map((id) => `gid://gitlab/Project/${id}`),
  }
  const res = await useAxios(query, variables)
  const {
    data: { error, data: result },
  } = res
  const mrs = []
  for (const repo of result.projects.nodes) {
    for (const mr of repo.mergeRequests.nodes)
      mrs.push({
        id: repo.id.replace('gid://gitlab/Project/', ''),
        repo: repo.name,
        name: mr.title,
        description: mr.description,
        conflicts: mr.conflicts,
        branch: mr.sourceBranch,
        draft: mr.draft,
        reference: mr.reference,
        time: new Date(mr.updatedAt),
        link: new URL(mr.webUrl),
      })
  }
  return mrs
}

const getLatestPipelines = async (ids: ID[]) => {
  const query = `query gitlabPipelines($ids: [ID!]) {
    projects(ids: $ids) {
      nodes {
        id
        name
        repository {
          rootRef
        }
        pipelines(first: 1) {
          nodes {
            stages {
              nodes {
                name
                status
              }
            }
            status
            updatedAt
            commitPath
            ref
            path
          }
        }
      }      
    }
  }`
  const variables = {
    ids: ids.map((id) => `gid://gitlab/Project/${id}`),
  }
  const res = await useAxios(query, variables)
  const {
    data: { error, data: result },
  } = res
  return result.projects.nodes
    .map((x) => ({
      id: x.id.replace('gid://gitlab/Project/', ''),
      name: x.name,
      status: x.pipelines.nodes[0]?.status,
      stages: x.pipelines.nodes[0]?.stages?.nodes,
      time: new Date(x.pipelines.nodes[0]?.updatedAt),
      link: new URL(`https://gitlab.com${x.pipelines.nodes[0]?.path}`),
      branch: x.pipelines.nodes[0]?.ref,
    }))
    .filter((x) => x.stages)
}

const getDefaultBranchPipelines = async (
  args: { id: ID; defaultBranchOverride?: string }[]
) => {
  const [defaultBranchOverrides, needsDefaultBranch] = args.reduce(
    ([o, n], e) =>
      e.defaultBranchOverride
        ? [[...o, { id: e.id, defaultBranch: e.defaultBranchOverride }], n]
        : [o, [...n, { id: e.id }]],
    [[], []]
  )
  const defaultBranchQuery = `query gitlabDefaultBranches($ids: [ID!]) {
    projects(ids: $ids) {
      nodes {
        id
        repository {
          rootRef
        }
      }      
    }
  }`
  const variables = {
    ids: needsDefaultBranch.map((x) => `gid://gitlab/Project/${x.id}`),
  }
  const res = await useAxios(defaultBranchQuery, variables)
  const {
    data: { error, data: result },
  } = res
  const defaultBranches = result.projects.nodes.map((x) => ({
    id: x.id.replace('gid://gitlab/Project/', ''),
    defaultBranch: x.repository.rootRef,
  }))
  const repos = [...defaultBranchOverrides, ...defaultBranches]
  const promises = []
  const query = `query gitlabDefaultBranchPipelines($ids: [ID!], $ref: String) {
    projects(ids: $ids) {
      nodes {
        id
        name
        repository {
          rootRef
        }
        pipelines(first: 1, ref: $ref) {
          nodes {
            stages {
              nodes {
                name
                status
              }
            }
            status
            updatedAt
            commitPath
            ref
            path
          }
        }
      }      
    }
  }`
  repos.forEach((x) => {
    promises.push(
      useAxios(query, {
        ids: [`gid://gitlab/Project/${x.id}`],
        ref: x.defaultBranch,
      })
    )
  })
  const pipelineRes = await Promise.all(promises)
  return pipelineRes
    .map((x) => {
      return x.data.data.projects.nodes
        .map((y) => ({
          id: y.id.replace('gid://gitlab/Project/', ''),
          name: y.name,
          status: y.pipelines.nodes[0]?.status,
          stages: y.pipelines.nodes[0]?.stages?.nodes,
          time: new Date(y.pipelines.nodes[0]?.updatedAt),
          link: new URL(`https://gitlab.com${y.pipelines.nodes[0]?.path}`),
          branch: y.pipelines.nodes[0]?.ref,
        }))
        .filter((x) => x.stages)
    })
    .flat()
}

export default {
  name: 'gitlab',
  iconRef: './img/providers/gitlab.svg',
  getRepos,
  getMRs,
  getLatestPipelines,
  getDefaultBranchPipelines,
}
