import React from 'react'
import styles from './styles.module.css'

type Props = {
  checked: boolean
  onChange: any
  disabled: boolean
  id: string
}

export default function Toggle(props: Props) {
  return (
    <label htmlFor={props.id} className={styles.switch}>
      <input
        type="checkbox"
        disabled={props.disabled}
        checked={props.checked}
        onChange={props.onChange}
        id={props.id}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  )
}
