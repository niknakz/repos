import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

import { useQuery, useIsFetching } from 'react-query'
import useMRs from '../../hooks/useMRs'

import MR from './MR'
import Wrapper from '../Wrapper'
import Spinner from '../Spinner'
import Toggle from '../Toggle'
import Empty from '../Empty'

export function MergeRequests({ showDrafts }) {
  const { data, isLoading } = useQuery('mergeRequests', useMRs)

  if (isLoading)
    return (
      <div className={styles['mr-container']}>
        {Array(4)
          .fill(null)
          .map((x, i) => (
            <div key={i} className={styles.skeleton} />
          ))}
      </div>
    )

  let mrs = data

  if (showDrafts) {
    mrs = data.filter((x) => x.draft)
  } else {
    mrs = data.filter((x) => !x.draft)
  }

  if (mrs.length === 0) {
    return <Empty text={`no ${showDrafts ? 'draft' : 'open'} merge requests`} />
  }

  return (
    <div className={styles['mr-container']}>
      {data && mrs.map((props, idx) => <MR key={idx} {...props} />)}
    </div>
  )
}

export default function MergeRequestContainer() {
  const isFetchingMRs = useIsFetching('mergeRequests')

  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    localStorage.setItem('mergeRequestsOpen', JSON.stringify(!open))
    setOpen(!open)
  }

  const [showDrafts, setShowDrafts] = useState(false)

  const toggleShowDrafts = () => {
    localStorage.setItem('showDrafts', JSON.stringify(!showDrafts))
    setShowDrafts(!showDrafts)
  }

  useEffect(() => {
    setOpen(JSON.parse(localStorage.getItem('mergeRequestsOpen')))
    setShowDrafts(JSON.parse(localStorage.getItem('showDrafts')))
  }, [])

  return (
    <Wrapper
      open={open}
      toggle={toggleOpen}
      content={
        <div className="section-header">
          <div>
            <h2>Merge Requests</h2>
            {isFetchingMRs ? <Spinner /> : null}
          </div>
          <div>
            <Toggle
              disabled={!open}
              checkedLabel="open"
              uncheckedLabel="drafts"
              checked={!showDrafts}
              onChange={toggleShowDrafts}
              id="toggle-draft-mr"
            />
          </div>
        </div>
      }
    >
      <MergeRequests showDrafts={showDrafts} />
    </Wrapper>
  )
}
