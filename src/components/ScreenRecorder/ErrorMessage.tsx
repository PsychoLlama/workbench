import React from 'react';
import * as styles from './ErrorMessage.css';

interface ErrorMessageProps {
  title: string;
  message: string;
  icon?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title,
  message,
  icon = '⚠️',
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{message}</p>
    </div>
  );
};
