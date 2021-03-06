import React, { useState } from 'react'
// import clsx from 'clsx'
import styles from './styles.module.css'

import usePipelines from '../../hooks/usePipelines'
import { useQuery, useIsFetching, useQueryClient } from 'react-query'

import Pipeline from './Pipeline'
import Wrapper from '../Wrapper'
import Spinner from '../Spinner'
import Toggle from '../Toggle'
import Empty from '../Empty'

export function Pipelines() {
  const { data, isFetching } = useQuery('pipelines', usePipelines)

  if (isFetching)
    return (
      <div className={styles['pipeline-container']}>
        {Array(5)
          .fill(null)
          .map((x, i) => (
            <div key={i} className={styles.skeleton} />
          ))}
      </div>
    )

  if (data.length === 0) {
    return <Empty text="no pipelines" />
  }

  return (
    <div className={styles['pipeline-container']}>
      {data && data.map((props, idx) => <Pipeline key={idx} {...props} />)}
    </div>
  )
}

export default function PipelineContainer() {
  const queryClient = useQueryClient()
  const isFetchingPipelines = useIsFetching('pipelines')
  const localOpen = localStorage.getItem('pipelinesOpen')
  const [open, setOpen] = useState(
    localOpen === null ? true : JSON.parse(localOpen)
  )
  const toggleOpen = () => {
    localStorage.setItem('pipelinesOpen', JSON.stringify(!open))
    setOpen(!open)
  }
  const localDefaultBranch = localStorage.getItem('defaultBranchOnly')
  const [defaultBranchOnly, setDefaultBranchOnly] = useState(
    localDefaultBranch === null ? true : JSON.parse(localDefaultBranch)
  )
  const togglePipeline = async () => {
    localStorage.setItem(
      'defaultBranchOnly',
      JSON.stringify(!defaultBranchOnly)
    )
    setDefaultBranchOnly(!defaultBranchOnly)
    await queryClient.invalidateQueries('pipelines')
  }

  return (
    <Wrapper
      open={open}
      toggle={toggleOpen}
      content={
        <div className="section-header">
          <div>
            <h2>Pipelines</h2>
            {isFetchingPipelines ? <Spinner /> : null}
          </div>
          <div>
            <Toggle
              disabled={!open}
              checkedLabel="latest"
              uncheckedLabel="default branch"
              checked={!defaultBranchOnly}
              onChange={togglePipeline}
              id="toggle-default-branch"
            />
          </div>
        </div>
      }
    >
      <Pipelines />
    </Wrapper>
  )
}
