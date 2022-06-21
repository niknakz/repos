import config from '../../repos.config'
import fallbackConfig from '../../demo/demo.config'

const appDataSources = config.dataSources || fallbackConfig.dataSources

let ids = []
let defaultBranchOverrides = []
let providers = []
let icons = []
let latestFunctions = []
let defaultBranchFunctions = []

for (const dataSource of appDataSources) {
  const provider = dataSource.provider
  const repos = dataSource.repos
  const repoKeys = Object.keys(repos)
  const repoOptions = Object.values(repos)
  const currIds = repoKeys.filter(
    (x, i) => !repoOptions[i]?.pipelineOptions?.mute
  )
  ids.push(currIds)
  defaultBranchOverrides.push(
    currIds.map((id) => repos[id]?.pipelineOptions?.defaultBranchOverride)
  )
  providers.push(provider.name)
  icons.push(provider.iconRef)
  latestFunctions.push(provider.getLatestPipelines)
  defaultBranchFunctions.push(provider.getDefaultBranchPipelines)
}

export default async function usePipelines() {
  const defaultBranchOnly = JSON.parse(
    localStorage.getItem('defaultBranchOnly')
  )
  let pipelines = []
  let res
  if (!!defaultBranchOnly)
    res = await Promise.all(
      defaultBranchFunctions.map((fn, i) =>
        fn(
          ids[i].map((id, index) => ({
            id,
            defaultBranchOverride: defaultBranchOverrides[i][index],
          }))
        )
      )
    )
  else res = await Promise.all(latestFunctions.map((fn, i) => fn(ids[i])))
  res.forEach((response, index) => {
    pipelines = [
      ...pipelines,
      ...response.map((pipeline) => ({
        ...pipeline,
        providerName: providers[index],
        providerIconRef: icons[index],
        name:
          appDataSources[index].repos[pipeline.id]?.overrides?.name ||
          pipeline.name,
      })),
    ]
  })
  return pipelines
    .filter((x) => x.stages)
    .sort((a, b) => b.time.getTime() - a.time.getTime())
}
