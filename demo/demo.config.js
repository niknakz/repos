import gitlab from './.gitlab'
import github from './.github'
import aws from './.aws'
import selfHosted from './.selfHosted'

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
