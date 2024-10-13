import { FC, FormEvent, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import { Dialog } from '@/components/Dialog';
import { Button } from '@/components/Button';
import cancelIcon from '@/assets/svg/x-icon.png'

type ModalProps = {
  title: string;
  description?: string;
  children: ReactNode;

  confirmValue: string;
  onConfirm?: (e: FormEvent<HTMLFormElement>) => void;
  onClose?: () => void;
  
  isActive?: boolean;
  isDisabled?: boolean;

  DialogConfirm?: ReactNode;
  isActiveDialogConfirm?: boolean;
  DialogSuccess?: ReactNode;
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

  DialogConfirm,
  isActiveDialogConfirm = false,
  DialogSuccess,
}: ModalProps) => {

  const handleClose = () => {
    onClose?.();
  } 

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onConfirm?.(event);
  }

  return (
    <>
    <div className={styles.dialog_success}>
      {DialogSuccess} 
    </div>
    <div className={clsx(styles.modal, {[styles.hidden]: isActive === false})}>
      <div className={clsx(styles.modal_dialog, {[styles.hidden]: isActiveDialogConfirm === false})}>
        <div className={styles.content}>
          {DialogConfirm} 
        </div>
      </div>
      <div className={styles.modal_header}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <img className={styles.cancelIcon} onClick={handleClose} src={cancelIcon} alt="Close Modal" />
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
    </>
  );
}
