import React from 'react';
import { useTranslation } from 'next-i18next';

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  translationKey: string;
}

const Text: React.FC<TextProps> = ({ translationKey, ...props }) => {
  const { t } = useTranslation();
  return <span {...props}>{t(translationKey)}</span>;
};

export default Text;