import config from '../../repos.config'
import fallbackConfig from '../../demo/demo.config'

const appDataSources = config.dataSources || fallbackConfig.dataSources

let ids = []
let providers = []
let icons = []
let functions = []

for (const dataSource of appDataSources) {
  const provider = dataSource.provider
  const repos = dataSource.repos
  ids.push(Object.keys(repos))
  providers.push(provider.name)
  icons.push(provider.iconRef)
  functions.push(provider.getRepos)
}

export default async function useRepos() {
  let repos = []
  const res = await Promise.all(functions.map((fn, i) => fn(ids[i])))
  res.forEach((response, index) => {
    repos = [
      ...repos,
      ...response.map((repo) => ({
        ...repo,
        providerName: providers[index],
        providerIconRef: icons[index],
        ...appDataSources[index].repos[repo.id]?.overrides,
      })),
    ]
  })
  return repos.sort((a, b) => b.time.getTime() - a.time.getTime())
}
