import React from 'react'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

export default function Demo() {
  return (
    <p className={styles.demo}>
      <span className={styles['demo-mode']}>demo mode</span>{' '}
      <span className={styles.version}>pre alpha release</span>{' '}
      <Link to="/docs/tutorial">Get Started on localhost - 5min ⏱️</Link>
    </p>
  )
}
