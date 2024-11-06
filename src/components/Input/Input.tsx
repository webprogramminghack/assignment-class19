import React from 'react'
import styles from './Input.module.scss'

type InputProps = {
  title: string,
  type: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  title,
  type,
  value,
  onChange
}) => {
  return (
    <div className={styles.wrapperInput}>
      <label className={styles.label}>{title}</label>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
