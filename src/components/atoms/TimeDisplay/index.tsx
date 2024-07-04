import React from 'react'
import styles from './index.module.css'

export interface TimeDisplayProps {
  time: string
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ time }) => {
  return (
    <span className={styles.time} style={{ color: 'rgba(51, 51, 51, 1)', fontWeight: '500', fontSize: '60px', lineHeight: '72px' }}>
      {time}
    </span>
  )
}

export default TimeDisplay