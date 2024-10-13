import { FC, FormEvent, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import { Button } from '@/components/Button';
import CancelIcon from '@/assets/svg/x-icon.svg'

type ModalProps = {
  title: string;
  description?: string;
  children: ReactNode;

  confirmValue: string;
  onConfirm?: (e: FormEvent<HTMLFormElement>) => void;
  onClose?: () => void;
  
  isActive?: boolean;
  isDisabled?: boolean;
};

export const Modal: FC<ModalProps> = ({
  title,
  description,
  children,

  onConfirm,
  confirmValue,
  onClose,

  isActive = false,
  isDisabled = true,
}: ModalProps) => {

  const handleClose = () => {
    onClose?.();
  } 

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onConfirm?.(event);
  }

  return (
    <div className={clsx(styles.modal, {[styles.hidden]: isActive === false})}>
      <div className={styles.modal_header}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <CancelIcon className={styles.cancelIcon} onClick={handleClose} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.modal_body}>
            {children}
        </div>
        <div className={styles.modal_footer}>
          <Button isDisabled={isDisabled} color='primary'>{confirmValue}</Button>
        </div>
      </form>
    </div>
  );
}
