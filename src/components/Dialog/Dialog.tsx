import React, { MouseEvent } from 'react';
import clsx from 'clsx';
import styles from './Dialog.module.scss';
import ImageSuccess from '@/assets/svg/icon-success.svg';
import ImageInfo from '@/assets/svg/icon-info.svg';
import ImageDanger from '@/assets/svg/icon-danger.svg';
import { Button } from '@/components/Button';

type DialogVariant = 'success' | 'info' | 'danger';

type DialogProps<V extends DialogVariant = DialogVariant> = {
  title: string;
  description: string;
  variant: V;
  isActive: boolean;
  confirmValue?: string;
  isDisabled?: V extends 'success' ? never : boolean;
  onConfirm?: (e: MouseEvent<HTMLButtonElement>) => void;
  onClose?: V extends 'success' ? never : (e: MouseEvent<HTMLButtonElement>) => void;
};

const getSrcVariant = (variant: DialogProps['variant']): React.ReactElement => {
  switch (variant) {
    case 'success':
      return <ImageSuccess className={clsx(styles.icon)} />;
    case 'info':
      return <ImageInfo className={clsx(styles.icon)} />;
    case 'danger':
      return <ImageDanger className={clsx(styles.icon)} />;
    default: {
      const _exhaustiveCheck: never = variant;
      throw new Error(`Unhandled variant: ${_exhaustiveCheck}`);
    }
  }
};

export const Dialog = <V extends DialogVariant>({
  title,
  description,
  variant,
  isActive,

  confirmValue = 'Confirm',
  isDisabled,
  onConfirm = () => {},
  onClose,
}: DialogProps<V>) => {
  return (
    <div className={clsx(styles.dialog, {[styles.hidden]: isActive === false})}>
      <div className={styles.body}>
        {getSrcVariant(variant)}
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.content}>

          {/* conditional rendering, https://react.dev/learn/conditional-rendering# */}
          {variant === 'success' && (
            <Button
              onClick={onConfirm}
            >
              {confirmValue}
            </Button>
          )}

          {variant !== 'success' && (
            <>
            <Button
              color='secondary'
              onClick={onClose}
              isDisabled={isDisabled}
            >
              Cancel
            </Button>
            <Button
              color={variant === 'info' ? 'primary' : 'danger'}
              onClick={(e) => onConfirm(e)}
              isDisabled={isDisabled}
            >
              {confirmValue}
            </Button>
            </>
          )}

        </div>
      </div>
    </div>
  );
};