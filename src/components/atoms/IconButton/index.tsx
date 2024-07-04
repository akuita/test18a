import React from 'react';
import Image from '../Image';
import styles from './index.module.css';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconSrc, ...props }) => {
  return (
    <button {...props} className={styles.iconButton}>
      <Image src={iconSrc} alt="icon" />
    </button>
  );
};

export default IconButton;