import styles from './Dialog.module.scss';
import React from 'react';
import clsx from 'clsx';
import { Button } from '@/components/Button';
import ImageSuccess from '@/assets/svg/icon-success.svg';
import ImageInfo from '@/assets/svg/icon-info.svg';
import ImageDanger from '@/assets/svg/icon-danger.svg';

// Define the type for props passed to the Alert component
interface AlertProps {
  variant: 'success' | 'info' | 'danger'; // Define the variant type
  onClose: () => void;
  onConfirm: () => void;
}

export const Dialog: React.FC<AlertProps> = ({
  variant,
  onClose,
  onConfirm,
}) => {
  const dialogProps = {
    success: {
      title: 'Successfully loaded',
      description: 'Neque porro quisquam est qui dolorem ipsum',
      confirmValue: 'Ok',
    },
    info: {
      title: 'New information',
      description: 'Neque porro quisquam est qui dolorem ipsum',
      confirmValue: 'Create',
      isDisabled: false,
    },
    danger: {
      title: 'Are you sure you want to delete this user?',
      description: 'This action is irreversible',
      confirmValue: 'Delete',
      isDisabled: false,
    },
  };

  return (
    <div className={clsx(styles.dialogContainer)}>
      <div className={clsx(styles.alertContainer)}>
        <div className={clsx(styles.alertContent)}>
          <div className={clsx(styles.alertIcon)}>
            {(() => {
              switch (variant) {
                case 'success':
                  return <ImageSuccess className={clsx(styles.icon)} />;
                case 'info':
                  return <ImageInfo className={clsx(styles.icon)} />;
                case 'danger':
                  return <ImageDanger className={clsx(styles.icon)} />;
                default:
                  return null;
              }
            })()}
          </div>
          <div className={clsx(styles.alertText)}>
            <h3 className={clsx(styles.title)}>{dialogProps[variant].title}</h3>
            <p className={clsx(styles.description)}>
              {dialogProps[variant].description}
            </p>
          </div>
        </div>

        <div className={clsx(styles.footer)}>
          <div className={clsx(styles.content)}>
            {/* conditional rendering, https://react.dev/learn/conditional-rendering# */}
            {variant === 'success' && (
              <Button color='secondary' onClick={onClose}>
                {dialogProps[variant].confirmValue}
              </Button>
            )}

            {variant !== 'success' && (
              <>
                <Button
                  color='secondary'
                  onClick={onClose}
                  isDisabled={dialogProps[variant].isDisabled}
                >
                  Cancel
                </Button>
                <Button
                  color={variant === 'info' ? 'primary' : 'danger'}
                  onClick={onConfirm}
                  isDisabled={dialogProps[variant].isDisabled}
                >
                  {dialogProps[variant].confirmValue}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
