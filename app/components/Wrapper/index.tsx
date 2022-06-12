import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type Wrapper = {
  locked?: Boolean
  open: Boolean
  toggle: any
  content: any
  children: any
}

export default function Wrapper(args: Wrapper) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        args.locked && styles.locked,
        args.open && styles.open
      )}
    >
      <div className={styles.header}>
        {args.locked ? null : (
          <button onClick={args.toggle}>
            {args.open ? (
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
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
                  d="M5 15l7-7 7 7"
                />
              </svg>
            )}
          </button>
        )}
        <div className={styles['header-content']}>{args.content}</div>
      </div>
      {args.open ? args.children : null}
    </div>
  )
}
