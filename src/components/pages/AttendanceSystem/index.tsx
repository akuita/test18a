import React from 'react'
import { useTranslation } from 'next-i18next'
import IconWithText from '@components/atoms/IconWithText'
import TimeDisplay from '@components/atoms/TimeDisplay'
import Button from '@components/atoms/Button'
import styles from './index.module.css'

const AttendanceSystemPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <div className={styles.header}>
          <IconWithText
            src="https://studio-next.jitera.app/no.png"
            alt="Logo"
            text={t('AttendanceSystem.attendance_system')}
          />
          <div className={styles.headerRight}>
            <IconWithText
              src="https://studio-next.jitera.app/no.png"
              alt="Timer Icon"
              text={t('AttendanceSystem.time_tracking')}
              textStyle={{ color: 'rgba(61, 84, 249, 1)' }}
            />
            <IconWithText
              src="https://studio-next.jitera.app/no.png"
              alt="Calendar Icon"
              text={t('AttendanceSystem.time_sheet')}
            />
            <img
              className={styles.icon}
              src="https://studio-next.jitera.app/no.png"
              alt={t('AttendanceSystem.logout')}
            />
          </div>
        </div>
        <div className={styles.content}>
          <IconWithText
            src="https://studio-next.jitera.app/no.png"
            alt="User Icon"
            text="Jack Daniel - Developer"
            textStyle={{ color: 'rgba(168, 168, 168, 1)', fontSize: '14px' }}
            iconStyle={{ width: '16px', height: '16px' }}
          />
          <IconWithText
            src="https://studio-next.jitera.app/no.png"
            alt="Calendar Icon"
            text={t('AttendanceSystem.current_date', { defaultValue: 'Wednesday, 27 September, 2023' })}
            textStyle={{ fontSize: '14px' }}
            iconStyle={{ width: '16px', height: '16px' }}
          />
          <TimeDisplay time="08:30:20" />
          <div className={styles.buttonGroup}>
            <Button
              title={t('AttendanceSystem.check_in')}
              className={styles.checkInButton}
            />
            <Button
              title={t('AttendanceSystem.checked_out')}
              className={styles.checkedOutButton}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceSystemPage