import React, { useState, useEffect } from "react"
import styles from './Modal.module.scss'
import clsx from "clsx"
import IconClose from '@/assets/svg/icon-close.svg'
import { Button, Input, Dialog } from "@/components"


export const Modal: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(true);
  const [dialogInfoActive, setDialogInfoActive] = useState<boolean>(false);
  const [dialogSuccessActive, setDialogSuccessActive] = useState<boolean>(false);
  const [validForm, setValidForm] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const formValidation = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): boolean => {
    if (!firstName) return false;
    if (!lastName) return false;
    if (!email) return false;
    if (!password) return false;
    return true;
  }

  useEffect(() => {
    const isValidForm: boolean = formValidation(firstName, lastName, email, password);
    if (isValidForm) setValidForm(isValidForm);
  }, [firstName, lastName, email, password])

  const closeModal = () => setModalActive(false);
  const cancelDialog = () => setDialogInfoActive(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDialogInfoActive(true);
  }

  const handleCreateButton = () => {
    setDialogInfoActive(false);
    setModalActive(false);
    setDialogSuccessActive(true);
  }
  
  const handleOkButton = () => {
    setDialogSuccessActive(false);
    setModalActive(true);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setValidForm(false);
  }

  return (
    <>
      <div className={clsx(
        styles.modalContainer,
        { [styles.hidden] : modalActive === false }
      )}>
        <div className={styles.header}>
          <div className={styles.wrapper}>
            <p className={styles.title}>Create new user</p>
            <p className={styles.description}>Fill out the information below</p>
          </div>
          <IconClose className={styles.icon} onClick={closeModal} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <Input
              title="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              title="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              title="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              title="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.footer}>
            <Button color="primary" isDisabled={!validForm} >
              Create
            </Button>
          </div>
        </form>
      </div>
      <div className={clsx(
        styles.dialogContainer,
        { [styles.hidden] : dialogInfoActive === false }
      )}>
        <Dialog
          variant="info"
          title="Do you want to create a new user?"
          description="Click the create button to continue."
          onClose={cancelDialog}
          onConfirm={handleCreateButton}
        />
      </div>
      <div className={clsx(
        { [styles.hidden] : dialogSuccessActive === false }
      )}>
        <Dialog
          variant="success"
          title="Successfully created a new user"
          description="The new user has been successfully created."
          onClose={handleOkButton}
        />
      </div>
    </>
  )
}