import React from 'react';
import Text from '../Text';
import Image from '../Image';
import styles from './index.module.css';

interface SectionHeaderProps {
  titleKey: string;
  iconSrc: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ titleKey, iconSrc }) => {
  return (
    <div className={styles.sectionHeader}>
      <Image src={iconSrc} alt="section-icon" />
      <Text translationKey={titleKey} />
    </div>
  );
};

export default SectionHeader;