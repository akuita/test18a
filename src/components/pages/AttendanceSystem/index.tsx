import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { Button } from '@components/atoms/Button';
import { Toast } from '@components/atoms/Toast';

import styles from './index.module.css';

function AttendanceSystem(): JSX.Element {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState('08:30:20'); // Placeholder for current time

  // Placeholder functions for check-in and check-out actions
  const handleCheckIn = () => {
    Toast.success(t('AttendanceSystem.check_in_success'));
  };

  const handleCheckOut = () => {
    Toast.success(t('AttendanceSystem.check_out_success'));
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Image src="https://studio-next.jitera.app/no.png" width={17.66} height={16} alt="Logo" />
          <span>{t('AttendanceSystem.title')}</span>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerItem}>
            <Image src="https://studio-next.jitera.app/no.png" width={24} height={24} alt="Time Tracking" />
            <span style={{ color: 'rgba(61, 84, 249, 1)' }}>{t('AttendanceSystem.time_tracking')}</span>
          </div>
          <div className={styles.headerItem}>
            <Image src="https://studio-next.jitera.app/no.png" width={24} height={24} alt="Time Sheet" />
            <span>{t('AttendanceSystem.time_sheet')}</span>
          </div>
          <Image src="https://studio-next.jitera.app/no.png" width={24} height={24} alt="Settings" />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardHeaderText}>{t('AttendanceSystem.user_info', { name: 'Jack Daniel', role: 'Developer' })}</span>
          <Image src="https://studio-next.jitera.app/no.png" width={16} height={16} alt="Close" />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardBodyText}>
            <Image src="https://studio-next.jitera.app/no.png" width={16} height={16} alt="Calendar" />
            <span>{t('AttendanceSystem.current_date', { date: 'Wednesday, 27 September, 2023' })}</span>
          </div>
          <span className={styles.cardBodyTime}>{currentTime}</span>
          <div className={styles.cardBodyActions}>
            <Button className={styles.buttonCheckIn} onClick={handleCheckIn}>
              {t('AttendanceSystem.check_in')}
            </Button>
            <Button className={styles.buttonCheckedOut} onClick={handleCheckOut}>
              {t('AttendanceSystem.checked_out')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceSystem;