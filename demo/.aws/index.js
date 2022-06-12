export default {
  name: 'aws',
  iconRef: './img/providers/aws-codecommit.svg',
  getRepos: async (ids) => [
    {
      id: '#',
      name: 'AWS CodeCommit repo',
      description: 'connect to AWS CodeCommit repos',
      link: new URL('https://aws.amazon.com/codecommit/'),
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
