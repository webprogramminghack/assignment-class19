import { FC, FormEvent, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import { Dialog } from '@/components/Dialog';
import { Button } from '@/components/Button';
import cancelIcon from '@/assets/svg/x-icon.png'
import { DirectionProvider } from '@/context/DirectionContext';

export type childrenDirectionType = 'row' | 'column';

type ModalProps<T extends childrenDirectionType> = {
  title: string;
  description?: string;
  children: ReactNode;
  childrenDirection: T;

  confirmValue: string;
  onConfirm?: (e: FormEvent<HTMLFormElement>) => void;
  onClose?: () => void;
  
  isActive?: boolean;
  isDisabled?: boolean;

  DialogConfirm?: ReactNode;
  isActiveDialogConfirm?: boolean;
  DialogSuccess?: ReactNode;
};

export const Modal: FC<ModalProps<childrenDirectionType>> = ({
  title,
  description,
  children,
  childrenDirection = 'column',

  onConfirm,
  confirmValue,
  onClose,

  isActive = false,
  isDisabled = true,

  DialogConfirm,
  isActiveDialogConfirm = false,
  DialogSuccess,
}: ModalProps<childrenDirectionType>) => {

  const handleClose = () => {
    onClose?.();
  } 

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onConfirm?.(event);
  }

  return (
    <>
    <div className={clsx([styles.dialog_success])}>
      {DialogSuccess} 
    </div>
    <div className={clsx(styles.modal, {[styles.hidden]: isActive === false})}>
      <div className={clsx(styles.modal_dialog, {[styles.hidden]: isActiveDialogConfirm === false})}>
        <div className={clsx(styles.content)}>
          {DialogConfirm} 
        </div>
      </div>
      <div className={clsx(styles.modal_header)}>
        <div className={clsx(styles.wrapper)}>
          <h3 className={clsx(styles.title)}>{title}</h3>
          <p className={clsx(styles.description)}>{description}</p>
        </div>
        <img className={clsx(styles.cancelIcon)} onClick={handleClose} src={cancelIcon} alt="Close Modal" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={clsx(styles.modal_body)}>
          <DirectionProvider childrenDirection={childrenDirection}>
            {children}
          </DirectionProvider>
        </div>
        <div className={clsx(styles.modal_footer)}>
          <Button isDisabled={isDisabled} color='primary'>{confirmValue}</Button>
        </div>
      </form>
    </div>
    </>
  );
}
