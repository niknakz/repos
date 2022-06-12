import React, { useState } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'

import App from '../../app'
import config from '../../repos.config'

function HomepageHeader({ demo }) {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title.toUpperCase()}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <button
            className="button button--secondary button--lg"
            onClick={demo}
          >
            Demo
          </button>
          <span className={styles.or}>OR</span>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorial"
          >
            Get Started on localhost - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const [demo, setDemo] = useState(!!config.defaultSettings)
  return (
    <Layout description="Description will go into a meta tag in <head />">
      {!demo ? (
        <>
          <HomepageHeader demo={() => setDemo(true)} />
          <main>
            <HomepageFeatures />
          </main>
        </>
      ) : (
        <main>
          <App />
        </main>
      )}
    </Layout>
  )
}
