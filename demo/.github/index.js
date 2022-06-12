// import axios from 'axios'

// const url = 'https://github.com/api/graphql'

export default {
  name: 'github',
  iconRef: './img/providers/github.svg',
  getRepos: async (ids) => [
    {
      id: '#',
      name: 'GitHub repo',
      description: 'connect to GitHub repos',
      link: new URL('https://github.com/explore'),
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
