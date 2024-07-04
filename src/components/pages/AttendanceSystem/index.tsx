import React from 'react';
import { useTranslation } from 'next-i18next';
import { checkInEmployee } from '@services/attendance/requests';
import { Button } from '@components/atoms/Button';
import styles from './index.module.css';

const AttendanceSystem = () => {
  const { t } = useTranslation();

  const handleCheckIn = async () => {
    try {
      const response = await checkInEmployee({
        employee_id: 123, // Replace with actual employee ID
        location: 'Office', // Replace with actual check-in location
      });
      // TODO: Handle successful check-in (e.g., show toast notification)
      console.log('Check-in successful:', response);
    } catch (error) {
      // TODO: Handle check-in error (e.g., show error toast notification)
      console.error('Check-in failed:', error);
    }
  };

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
          <Button buttonType="primary" rounded onClick={handleCheckIn}>{t('AttendanceSystem.checkIn')}</Button>
          <Button buttonType="ghost" rounded>{t('AttendanceSystem.checkedOut')}</Button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSystem;