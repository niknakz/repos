import gitlab from '../providers/.gitlab'

const repoOnlyProvider = (name, iconRef, repo) => {
  return {
    name,
    iconRef,
    getRepos: async (ids) => [repo],
    getMRs: async (ids) => [],
    getLatestPipelines: async (ids) => [],
    getDefaultBranchPipelines: async (args) => [],
  }
}

const github = repoOnlyProvider('github', './img/providers/github.svg', {
  id: '#',
  name: 'GitHub repo',
  description: 'connect to GitHub repos',
  link: new URL('https://github.com/explore'),
  avatar: null,
  time: new Date('Sun Jun 12 2022 10:55:57 GMT-0500 (Central Daylight Time)'),
})

const aws = repoOnlyProvider('aws', './img/providers/aws-codecommit.svg', {
  id: '#',
  name: 'AWS CodeCommit repo',
  description: 'connect to AWS CodeCommit repos',
  link: new URL('https://aws.amazon.com/codecommit/'),
  avatar: null,
  time: new Date('Sun Jun 12 2022 10:55:57 GMT-0500 (Central Daylight Time)'),
})

const selfHosted = repoOnlyProvider(
  'self-hosted',
  './img/providers/question-mark.svg',
  {
    id: '#',
    name: 'self hosted repo',
    description: 'connect to self hosted repos',
    link: new URL('https://about.gitlab.com/install/'),
    avatar: null,
    time: new Date('Sun Jun 12 2022 10:55:57 GMT-0500 (Central Daylight Time)'),
  }
)

const config = {
  defaultSettings: {
    mrOptions: {
      open: false,
      showDrafts: false,
    },
    pipelineOptions: {
      open: true,
      defaultBranchOnly: true,
    },
  },
  dataSources: [
    {
      provider: gitlab,
      repos: {
        4207231: {},
        7898047: {},
        278964: {
          mrOptions: {
            mute: true,
          },
        },
        3472737: {},
        10582521: {},
        250833: {},
      },
    },
    {
      provider: github,
      repos: {
        '#': {
          mrOptions: {
            mute: true,
          },
          pipelineOptions: {
            mute: true,
          },
        },
      },
    },
    {
      provider: aws,
      repos: {
        '#': {
          mrOptions: {
            mute: true,
          },
          pipelineOptions: {
            mute: true,
          },
        },
      },
    },
    {
      provider: selfHosted,
      repos: {
        '#': {
          mrOptions: {
            mute: true,
          },
          pipelineOptions: {
            mute: true,
          },
        },
      },
    },
  ],
}

export default config
