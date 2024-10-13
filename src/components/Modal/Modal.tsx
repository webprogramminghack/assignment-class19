import React, { useEffect, useState } from 'react';
import styles from './Modal.module.scss'; // Import the SCSS file
import IconCancel from '@/assets/svg/icon-x.svg';
import clsx from 'clsx';
import { Dialog } from '../Dialog';
import { Button } from '../Button';

const Modal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true); // Modal state
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false); // Dialog state
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] =
    useState<boolean>(false); // Dialog Success state

  // Use useEffect to manage form validation
  useEffect(() => {
    setIsFormValid(!!firstName && !!lastName && !!email && !!password);
  }, [firstName, lastName, email, password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsDialogOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDialogConfirm = () => {
    setIsModalOpen(false);
    setIsSuccessDialogOpen(true);
  };

  const handleSuccessDialog = () => {
    setIsSuccessDialogOpen(false);
    console.log('User Created:', { firstName, lastName, email, password });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setIsModalOpen(true);
    setIsDialogOpen(false);
  };

  console.log(isFormValid);

  return (
    <div>
      {isModalOpen && (
        <div className={clsx(styles.modalContainer)}>
          <form onSubmit={handleSubmit}>
            <div className={clsx(styles.modalHeader)}>
              <div className={clsx(styles.wrapperHeader)}>
                <h2 className={clsx(styles.title)}>Create New User</h2>
                <p className={clsx(styles.description)}>
                  Fill out the information below
                </p>
              </div>
              <IconCancel
                className={clsx(styles.cancelIcon)}
                onClick={handleModalClose}
              />
            </div>

            <div className={clsx(styles.containerForm)}>
              <div className={clsx(styles.wrapperForm)}>
                <label className={clsx(styles.label)}>First Name</label>
                <input
                  type='text'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={clsx(styles.input)}
                />
              </div>
              <div className={clsx(styles.wrapperForm)}>
                <label className={clsx(styles.label)}>Last Name</label>
                <input
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={clsx(styles.input)}
                />
              </div>
              <div className={clsx(styles.wrapperForm)}>
                <label className={clsx(styles.label)}>Email</label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={clsx(styles.input)}
                />
              </div>
              <div className={clsx(styles.wrapperForm)}>
                <label className={clsx(styles.label)}>Password</label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={clsx(styles.input)}
                />
              </div>
            </div>

            <div className={clsx(styles.modalFooter)}>
              <Button color='primary' isDisabled={!isFormValid}>
                Create
              </Button>
            </div>
          </form>

          {isDialogOpen && (
            <Dialog
              variant='info'
              onClose={handleDialogClose}
              onConfirm={handleDialogConfirm}
            />
          )}
        </div>
      )}
      {isSuccessDialogOpen && (
        <Dialog
          variant='success'
          onClose={handleSuccessDialog}
          onConfirm={handleSuccessDialog}
        />
      )}
    </div>
  );
};

export default Modal;
