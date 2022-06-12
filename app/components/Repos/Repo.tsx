import React from 'react'
import styles from './styles.module.css'

type Repo = {
  id: string
  providerIconRef: string
  providerName: string
  name: string
  description: string
  link: URL
  avatar: URL
  time: Date
}

export default function Repo(args: Repo) {
  return (
    <div className={styles.repo}>
      <div className={styles['avatar-container']}>
        {args.avatar ? (
          <img className={styles['repo-img']} src={`${args.avatar}`} />
        ) : (
          <div className={styles['default-avatar']}>
            {args.name[0].toUpperCase()}
          </div>
        )}
      </div>
      <div className={styles['repo-info']}>
        <h3 className={styles['repo-name']}>{args.name}</h3>
        <p className={styles['repo-desc']}>{args.description}</p>
        <span className={styles['repo-date']}>
          last updated:{' '}
          {args.time.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
          })}
        </span>
      </div>
      <div className={styles['repo-links']}>
        <a
          href={args.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['repo-id']}
        >
          <img src={args.providerIconRef} alt={args.providerName} /> {args.id}{' '}
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
    </div>
  )
}
