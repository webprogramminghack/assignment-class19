import styles from './Dialog.module.scss';
import React from 'react';
import ImageSuccess from '@/assets/svg/icon-success.svg';
import ImageInfo from '@/assets/svg/icon-info.svg';
import { Button } from '@/components';

type DialogVariant = 'success' | 'info';

type DialogProps<V extends DialogVariant = DialogVariant> = {
  title: string;
  description: string;
  variant: V,
  onClose: () => void,
  onConfirm?: () => void
};

export const Dialog = <V extends DialogVariant>({
  title,
  description,
  variant,
  onClose,
  onConfirm
}: DialogProps<V>) => {
  const getSrcVariant = (variant: DialogProps['variant']): React.ReactElement => {
    switch (variant) {
      case 'success':
        return <ImageSuccess className={styles.icon} />;
      case 'info':
        return <ImageInfo className={styles.icon} />;
      default: {
        const _exhaustiveCheck: never = variant;
        throw new Error(`Unhandled variant: ${_exhaustiveCheck}`);
      }
    }
  };

  return (
    <div className={styles.dialog}>
      <div className={styles.body}>
        {getSrcVariant(variant)}
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          color='secondary'
          onClick={onClose}
        >
          { variant === 'success' ? 'OK' : 'Cancel' }
        </Button>
        {
          variant === 'info' &&
          <Button
            color='primary'
            onClick={onConfirm}
          >
            Create
          </Button>
        }
      </div>
    </div>
  )
}