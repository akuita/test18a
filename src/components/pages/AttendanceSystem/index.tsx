import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '@components/atoms/Button';
import styles from './index.module.css';

const AttendanceSystem = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerItem}>
          <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.logo_alt')} style={{ width: '17.66px', height: '16px' }} />
          <span className={styles.headerTitle}>{t('AttendanceSystem.attendance_system')}</span>
        </div>
        <div className={styles.headerItem}>
          <div className={styles.headerItem}>
            <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.time_tracking_alt')} style={{ width: '24px', height: '24px' }} />
            <span className={styles.headerLink}>{t('AttendanceSystem.time_tracking')}</span>
          </div>
          <div className={styles.headerItem}>
            <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.time_sheet_alt')} style={{ width: '24px', height: '24px' }} />
            <span className={styles.headerTitle}>{t('AttendanceSystem.time_sheet')}</span>
          </div>
          <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.settings_alt')} style={{ width: '24px', height: '24px' }} />
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <span className={styles.cardHeaderText}>{t('AttendanceSystem.employee_info')}</span>
        </div>
        <span className={styles.cardDate}>{t('AttendanceSystem.current_date')}</span>
        <span className={styles.cardTime}>{t('AttendanceSystem.current_time')}</span>
        <div className={styles.buttonGroup}>
          <Button buttonType="primary" rounded>
            {t('AttendanceSystem.check_in')}
          </Button>
          <Button buttonType="ghost" rounded>
            {t('AttendanceSystem.checked_out')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSystem;