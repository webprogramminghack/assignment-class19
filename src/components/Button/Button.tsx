import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'danger';
  children?: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  children,
  onClick,
  isDisabled
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[color],
        isDisabled && styles.disabled
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};