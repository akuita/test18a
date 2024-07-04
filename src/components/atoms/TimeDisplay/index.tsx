import React from 'react';
import Text from '../Text';
import styles from './index.module.css';

interface TimeDisplayProps {
  timeKey: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeKey }) => {
  return (
    <div className={styles.timeDisplay}>
      <Text translationKey={timeKey} />
    </div>
  );
};

export default TimeDisplay;