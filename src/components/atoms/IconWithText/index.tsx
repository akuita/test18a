import React from 'react'
import { useTranslation } from 'next-i18next'
import styles from './index.module.css'

export interface IconWithTextProps {
  src: string
  alt: string
  text: string
  textStyle?: React.CSSProperties
  iconStyle?: React.CSSProperties
}

const IconWithText: React.FC<IconWithTextProps> = ({ src, alt, text, textStyle, iconStyle }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.container} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={src} alt={alt} style={{ width: '24px', height: '24px', ...iconStyle }} />
      <span style={{ color: 'rgba(51, 51, 51, 1)', fontWeight: '500', fontSize: '17px', lineHeight: '20px', ...textStyle }}>
        {t(text)}
      </span>
    </div>
  )
}

export default IconWithText