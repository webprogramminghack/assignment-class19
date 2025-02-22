import styles from './Dialog.module.scss';
import React from 'react';
import { Button } from '@/components/Button';
import ImageSuccess from '@/assets/svg/icon-success.svg';
import ImageInfo from '@/assets/svg/icon-info.svg';

// Define the type for props passed to the Alert component
interface AlertProps {
  variant: 'success' | 'info'; // Define the variant type
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
      title: 'Successfully created a new user',
      description: 'The new user has been successfully created',
      confirmValue: 'Ok',
    },
    info: {
      title: 'Do you want to create a new user?',
      description: 'Click the create button to continue',
      confirmValue: 'Create',
      isDisabled: false,
    },
  };

  return (
    <div className={styles.dialogContainer}>
      <div className={styles.alertContainer}>
        <div className={styles.alertContent}>
          <div className={styles.alertIcon}>
            {(() => {
              switch (variant) {
                case 'success':
                  return <ImageSuccess className={styles.icon} />;
                case 'info':
                  return <ImageInfo className={styles.icon} />;
                default:
                  return null;
              }
            })()}
          </div>
          <div className={styles.alertText}>
            <h3 className={styles.title}>{dialogProps[variant].title}</h3>
            <p className={styles.description}>
              {dialogProps[variant].description}
            </p>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.content}>
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
