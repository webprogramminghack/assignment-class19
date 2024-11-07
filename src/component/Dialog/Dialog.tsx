import IconDanger from '@/assets/svg/icon-danger.svg';
import IconInfo from '@/assets/svg/icon-info.svg';
import IconSuccess from '@/assets/svg/icon-success.svg';
import { Button } from '@/component/Button/Button';
import clsx from 'clsx';
import React, { MouseEvent } from 'react';
import styles from './Dialog.module.scss';

type DialogProps = {
  variant: 'success' | 'info' | 'danger';
  color?: 'primary' | 'secondary' | 'danger';
  title: string;
  subtitle: string;
  isDisabled?: boolean;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onConfirm?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const getIcon = (type: DialogProps['variant']) => {
  switch (type) {
    case 'danger':
      return <IconDanger />;
    case 'success':
      return <IconSuccess />;
    case 'info':
      return <IconInfo />;
    default: {
      const _exhaustiveCheck: never = type;
      throw new Error(`Unhandled type: ${_exhaustiveCheck}`);
    }
  }
};

export const Dialog: React.FC<DialogProps> = ({
  variant,
  title,
  subtitle,
  isDisabled,
  onClick,
  onConfirm,
}) => {
  return (
    <div className={clsx(styles.dialog)}>
      <div className={clsx(styles.body)}>
        {getIcon(variant)}
        <div className={clsx(styles.description)}>
          <p className={clsx(styles.title)}>{title}</p>
          <p className={clsx(styles.subtitle)}>{subtitle}</p>
        </div>
      </div>
      <div className={clsx(styles.buttonWrapper)}>
        <Button onClick={onClick} color='secondary' disabled={isDisabled}>
          {variant === 'success' ? 'OK' : 'Cancel'}
        </Button>
        {variant === 'success' || (
          <Button
            onClick={onConfirm}
            color={variant === 'info' ? 'primary' : 'danger'}
            disabled={isDisabled}
          >
            {variant === 'info' ? 'Create' : 'Delete'}
          </Button>
        )}
      </div>
    </div>
  );
};
