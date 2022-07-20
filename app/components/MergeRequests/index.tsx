import React, { useState } from 'react'
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
  const localOpen = localStorage.getItem('mergeRequestsOpen')
  const [open, setOpen] = useState(
    localOpen === null ? true : JSON.parse(localOpen)
  )
  const toggleOpen = () => {
    localStorage.setItem('mergeRequestsOpen', JSON.stringify(!open))
    setOpen(!open)
  }
  const localShowDrafts = localStorage.getItem('showDrafts')
  const [showDrafts, setShowDrafts] = useState(
    localShowDrafts === null ? false : JSON.parse(localShowDrafts)
  )
  const toggleShowDrafts = () => {
    localStorage.setItem('showDrafts', JSON.stringify(!showDrafts))
    setShowDrafts(!showDrafts)
  }
  const isFetchingMRs = useIsFetching('mergeRequests')

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
