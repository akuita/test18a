import React from 'react';
import Text from '../Text';
import Image from '../Image';
import styles from './index.module.css';

interface UserInfoProps {
  userNameKey: string;
  roleKey: string;
  iconSrc: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ userNameKey, roleKey, iconSrc }) => {
  return (
    <div className={styles.userInfo}>
      <Image src={iconSrc} alt="user-icon" />
      <Text translationKey={userNameKey} />
      <Text translationKey={roleKey} />
    </div>
  );
};

export default UserInfo;