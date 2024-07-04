import React from 'react';
import Text from '../Text';
import Image from '../Image';
import styles from './index.module.css';

interface DateDisplayProps {
  date: string;
  iconSrc: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date, iconSrc }) => {
  return (
    <div className={styles.dateDisplay}>
      <Image src={iconSrc} alt="date-icon" />
      <Text translationKey={date} />
    </div>
  );
};

export default DateDisplay;