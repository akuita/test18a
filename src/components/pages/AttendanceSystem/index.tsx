import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '@components/atoms/Button';
import styles from './index.module.css';

function AttendanceSystem(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.header}>
          <span className={styles.headerText}>
            {t('AttendanceSystem.jack_daniel_developer')}
          </span>
        </div>
        <div className={styles.content}>
          <div>
            <div className={styles.dateInfo}>
              <img className={styles.noImage} src="https://studio-next.jitera.app/no.png" alt="No" />
              <span className={styles.dateText}>
                {t('AttendanceSystem.wednesday_september')}
              </span>
            </div>
            <span className={styles.timeText}>08:30:20</span>
          </div>
          <div className={styles.buttonGroup}>
            <Button className={styles.checkInButton}>
              {t('AttendanceSystem.check_in')}
            </Button>
            <Button className={styles.checkedOutButton}>
              {t('AttendanceSystem.checked_out')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceSystem;