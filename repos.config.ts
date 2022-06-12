import gitlab from './providers/.gitlab'

type ID = string

type Repo = {
  id: string
  name: string
  description: string
  link: URL
  avatar: URL
  time: Date
}

type MR = {
  id: string
  repo: string
  name: string
  description: string
  conflicts: Boolean
  branch: string
  draft: Boolean
  reference: string
  time: Date
  link: URL
}

type Stage = {
  name: string
  status: string
}

type Pipeline = {
  id: string
  name: string
  status: string
  stages: Stage[]
  time: Date
  branch: string
  link: URL
}

type Provider = {
  name: string
  iconRef: string
  getRepos: (ids: ID[]) => Promise<Repo[]>
  getMRs: (ids: ID[]) => Promise<MR[]>
  getLatestPipelines: (ids: ID[]) => Promise<Pipeline[]>
  getDefaultBranchPipelines: (ids: ID[]) => Promise<Pipeline[]>
}

type dataSource = {
  provider: Provider
  repos: {
    [key: string]: {
      overrides?: {
        name?: string
        avatar?: URL
        description?: string
      }
      mrOptions?: {
        mute?: Boolean
        regex?: RegExp[]
      }
      pipelineOptions?: {
        mute?: Boolean
      }
    }
  }
}

type Config = {
  defaultSettings: {
    mrOptions?: {
      open?: Boolean
      showDrafts?: Boolean
    }
    pipelineOptions?: {
      open?: Boolean
      defaultBranchOnly?: Boolean
    }
  }
  dataSources: dataSource[]
}

const config: Config = {
  // defaultSettings: {
  //   mrOptions: {
  //     open: true,
  //     showDrafts: false,
  //   },
  //   pipelineOptions: {
  //     open: true,
  //     defaultBranchOnly: false,
  //   },
  // },
  // dataSources: [
  //   {
  //     provider: gitlab,
  //     repos: {
  //       278964: {},
  //       7898047: {},
  //     },
  //   },
  // ],
}

export default config
