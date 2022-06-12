import React from 'react'
import styles from './styles.module.css'

import Empty from '../Empty'

type Stage = {
  name: string
  status: string
}

export default function Stages(args: { [key: number]: Stage }) {
  const stages = Object.values(args)
  if (stages.length === 0) return <Empty text="no stages" />
  return (
    <div className={styles['stage-container']}>
      {stages.map((props, idx) => (
        <div key={idx} className={styles.stage}>
          {props.status === 'skipped' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.skippedIcon}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
          ) : props.status === 'success' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.successIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : props.status === 'failed' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.failedIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : props.status === 'running' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.runningIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.pendingIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          <p>{props.name}</p>
        </div>
      ))}
    </div>
  )
}
