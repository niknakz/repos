import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

import Stages from './Stages'

type Stage = {
  name: string
  status: string
}

type Pipeline = {
  id: string
  providerIconRef: string
  providerName: string
  name: string
  status: string
  stages: Stage[]
  time: Date
  branch: string
  link: URL
}

export default function Pipeline(args: Pipeline) {
  return (
    <div className={styles.pipeline}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h3>{args.name}</h3>
          <code>{args.branch}</code>
        </div>
        <a
          className={styles.link}
          href={args.link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={args.providerIconRef} alt={args.providerName} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
      <Stages {...args.stages} />
      <div className={styles.footer}>
        <span>
          last updated:{' '}
          {args.time.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
          })}
        </span>
        <p
          className={clsx(
            args.status === 'SUCCESS' && styles.successIcon,
            args.status === 'RUNNING' && styles.runningIcon,
            args.status === 'FAILED' && styles.failedIcon,
            args.status === 'CREATED' && styles.pendingIcon,
            args.status === 'SKIPPED' && styles.skippedIcon
          )}
        >
          {args.status}
        </p>
      </div>
    </div>
  )
}
