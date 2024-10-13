import styles from './Button.module.scss';
import { FC, ReactNode, MouseEvent } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'danger';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean | undefined;
  className?: string | undefined;
};

export const Button: FC<ButtonProps> = ({
  color = 'secondary',
  children,
  onClick,
  isDisabled,
  className
}) => {

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  return (
    <button
      className={clsx(styles.button, styles[color], isDisabled && styles.disabled, className)}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
