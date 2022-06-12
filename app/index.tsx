import React from 'react'
// import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'
import config from '../repos.config'
import fallbackConfig from '../demo/demo.config'

import Repos from './components/Repos'
import MergeRequests from './components/MergeRequests'
import Pipelines from './components/Pipelines'

const appDefaultSettings =
  config.defaultSettings || fallbackConfig.defaultSettings

import { QueryClient, QueryClientProvider } from 'react-query'

const defaultSettings = {
  mrOptions: {
    open: appDefaultSettings.mrOptions.open,
    showDrafts: appDefaultSettings.mrOptions.showDrafts,
  },
  pipelineOptions: {
    open: appDefaultSettings.pipelineOptions.open,
    defaultBranchOnly: appDefaultSettings.pipelineOptions.defaultBranchOnly,
  },
}

function App() {
  const mergeRequestsOpen = JSON.parse(
    localStorage.getItem('mergeRequestsOpen')
  )
  localStorage.setItem(
    'mergeRequestsOpen',
    mergeRequestsOpen === null
      ? defaultSettings.mrOptions.open
      : mergeRequestsOpen
  )
  const localShowDrafts = JSON.parse(localStorage.getItem('showDrafts'))
  localStorage.setItem(
    'showDrafts',
    localShowDrafts === null
      ? defaultSettings.mrOptions.showDrafts
      : localShowDrafts
  )
  const localPipelinesOpen = JSON.parse(localStorage.getItem('pipelinesOpen'))
  localStorage.setItem(
    'pipelinesOpen',
    localPipelinesOpen === null
      ? defaultSettings.pipelineOptions.open
      : localPipelinesOpen
  )
  const localDefaultBranchOnly = JSON.parse(
    localStorage.getItem('defaultBranchOnly')
  )
  localStorage.setItem(
    'defaultBranchOnly',
    localDefaultBranchOnly === null
      ? defaultSettings.pipelineOptions.defaultBranchOnly
      : localDefaultBranchOnly
  )
  return (
    <section className={styles.features}>
      {!config.defaultSettings && (
        <p className={styles.demo}>
          demo mode <span className={styles.version}>pre alpha release</span>{' '}
          <Link to="/docs/tutorial">Get Started on localhost - 5min ⏱️</Link>
        </p>
      )}
      <div className={styles['site-container']}>
        <div className={styles.repos}>
          <Repos />
        </div>
        <div className={styles.aux}>
          <MergeRequests />
          <Pipelines />
        </div>
      </div>
    </section>
  )
}

export default function () {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}
