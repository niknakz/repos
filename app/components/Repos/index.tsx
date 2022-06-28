import React from 'react'
import styles from './styles.module.css'

import BrowserOnly from '@docusaurus/BrowserOnly'

import useRepos from '../../hooks/useRepos'
import { useQuery, useIsFetching } from 'react-query'

import Repo from './Repo'
import Wrapper from '../Wrapper'
import Spinner from '../Spinner'
import Empty from '../Empty'

export function Repos() {
  const { data, isLoading } = useQuery('repos', useRepos)

  if (isLoading)
    return (
      <div className={styles['repo-container']}>
        {Array(10)
          .fill(null)
          .map((x, i) => (
            <div key={i} className={styles.skeleton} />
          ))}
      </div>
    )

  if (data?.length === 0)
    return (
      <div className={styles['repo-container']}>
        <Empty text="no repositories" />
      </div>
    )

  return (
    <div className={styles['repo-container']}>
      {data && data.map((props, idx) => <Repo key={idx} {...props} />)}
    </div>
  )
}

export default function RepoContainer() {
  const isFetchingRepos = useIsFetching('repos')
  return (
    <Wrapper
      locked
      open
      toggle={() => {}}
      content={
        <div className="section-header">
          <div>
            <h2>Repos</h2>
            {isFetchingRepos ? <Spinner /> : null}
          </div>
          <div className="section-option">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: '1.125rem',
                height: '1.125rem',
                marginRight: '.125rem',
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>{' '}
            search{' '}
            <span style={{ marginLeft: '.5rem' }}>
              <BrowserOnly>
                {() => (
                  <kbd>
                    {navigator.platform.toUpperCase().indexOf('MAC') >= 0
                      ? '⌘'
                      : 'ctrl'}
                  </kbd>
                )}
              </BrowserOnly>{' '}
              + <kbd>f</kbd>
            </span>
          </div>
        </div>
      }
    >
      <Repos />
    </Wrapper>
  )
}
