export default {
  name: 'self-hosted',
  iconRef: './img/providers/question-mark.svg',
  getRepos: async (ids) => [
    {
      id: '#',
      name: 'self hosted repo',
      description: 'connect to self hosted repos',
      link: new URL('https://about.gitlab.com/install/'),
      avatar: null,
      time: new Date(
        'Sun Jun 12 2022 10:55:57 GMT-0500 (Central Daylight Time)'
      ),
    },
  ],
  getMRs: async (ids) => [],
  getLatestPipelines: async (ids) => [],
  getDefaultBranchPipelines: async (ids) => [],
}
