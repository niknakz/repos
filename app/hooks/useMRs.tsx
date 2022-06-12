import config from '../../repos.config'
import fallbackConfig from '../../demo/demo.config'

const appDataSources = config.dataSources || fallbackConfig.dataSources

let ids = []
let regex = []
let providers = []
let icons = []
let functions = []

for (const dataSource of appDataSources) {
  const provider = dataSource.provider
  const repos = dataSource.repos
  const repoKeys = Object.keys(repos)
  const repoOptions = Object.values(repos)
  ids.push(repoKeys.filter((x, i) => !repoOptions[i]?.mrOptions?.mute))
  regex.push(repoKeys.filter((x, i) => repoOptions[i]?.mrOptions?.regex))
  providers.push(provider.name)
  icons.push(provider.iconRef)
  functions.push(provider.getMRs)
}

export default async function useMRs() {
  let mrs = []
  const res = await Promise.all(functions.map((fn, i) => fn(ids[i])))
  res.forEach((response, index) => {
    mrs = [
      ...mrs,
      ...response
        .filter((mr) => {
          if (regex[index].length) {
            if (regex[index].includes(mr.id)) {
              return !appDataSources[index].repos[mr.id].mrOptions.regex.some(
                (rx) => rx.test(mr.name)
              )
            } else return true
          } else return true
        })
        .map((mr) => ({
          ...mr,
          providerName: providers[index],
          providerIconRef: icons[index],
          repo: appDataSources[index].repos[mr.id]?.overrides?.name || mr.repo,
        })),
    ]
  })
  return mrs.sort((a, b) => b.time.getTime() - a.time.getTime())
}
