import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type Props = {
  checked: boolean
  onChange: any
  checkedLabel: string
  uncheckedLabel: string
  disabled: boolean
  id: string
}

export default function Toggle(props: Props) {
  return (
    <span className="section-option">
      <button
        className={clsx(
          props.checked
            ? styles.selected
            : props.disabled || props.checked
            ? styles['not-selected']
            : styles['clickable']
        )}
        disabled={props.disabled || props.checked}
        onClick={props.onChange}
      >
        {props.checkedLabel}
      </button>{' '}
      |{' '}
      <button
        className={clsx(
          !props.checked
            ? styles.selected
            : props.disabled || !props.checked
            ? styles['not-selected']
            : styles['clickable']
        )}
        disabled={props.disabled || !props.checked}
        onClick={props.onChange}
      >
        {props.uncheckedLabel}
      </button>
    </span>
  )
}
