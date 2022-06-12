import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type MR = {
  id: string
  providerName: string
  providerIconRef: string
  repo: string
  name: string
  description: string
  conflicts: boolean
  branch: string
  draft: boolean
  reference: string
  time: Date
  link: URL
}

export default function MR(args: MR) {
  return (
    <div className={styles.mr}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h3>{args.repo}</h3>
          <code>{args.branch}</code>
        </div>
        <a
          href={args.link.href}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={args.providerIconRef} alt={args.providerName} />
          {args.reference}
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
      <h4>{args.name}</h4>
      <p className={styles.description}>
        {args.description ? args.description : 'no description'}
      </p>
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
            args.draft && styles.muted,
            args.conflicts && styles.conflicts
          )}
        >
          {args.draft ? 'DRAFT' : args.conflicts ? 'CONFLICTS' : 'OPEN'}
        </p>
      </div>
    </div>
  )
}
