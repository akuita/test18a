import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '@components/atoms/Button';
import styles from './index.module.css';

const AttendanceSystem = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div className={styles.logoSection}>
          <img src="https://studio-next.jitera.app/no.png" alt="logo" className={styles.logo} />
          <span className={styles.title}>{t('AttendanceSystem.header')}</span>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navItem}>
            <img src="https://studio-next.jitera.app/no.png" alt="time tracking" className={styles.navIcon} />
            <span className={styles.navText}>{t('AttendanceSystem.timeTracking')}</span>
          </div>
          <div className={styles.navItem}>
            <img src="https://studio-next.jitera.app/no.png" alt="time sheet" className={styles.navIcon} />
            <span className={styles.navText}>{t('AttendanceSystem.timeSheet')}</span>
          </div>
          <img src="https://studio-next.jitera.app/no.png" alt="settings" className={styles.navIcon} />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.userInfo}>
          <img src="https://studio-next.jitera.app/no.png" alt="user" className={styles.userIcon} />
          <span className={styles.userName}>{t('AttendanceSystem.userName')}</span>
        </div>
        <div className={styles.dateInfo}>
          <img src="https://studio-next.jitera.app/no.png" alt="calendar" className={styles.dateIcon} />
          <span className={styles.dateText}>{t('AttendanceSystem.date')}</span>
        </div>
        <span className={styles.time}>{t('AttendanceSystem.time')}</span>
        <div className={styles.buttons}>
          <Button buttonType="primary" rounded>{t('AttendanceSystem.checkIn')}</Button>
          <Button buttonType="ghost" rounded>{t('AttendanceSystem.checkedOut')}</Button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSystem;