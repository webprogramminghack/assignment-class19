import React, { useState, useEffect } from "react"
import styles from './Modal.module.scss'
import IconClose from '@/assets/svg/icon-close.svg'
import { Button, Input } from "@/components"


export const Modal: React.FC = () => {
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

  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.header}>
          <div className={styles.wrapper}>
            <p className={styles.title}>Create new user</p>
            <p className={styles.description}>Fill out the information below</p>
          </div>
          <IconClose className={styles.icon} />
        </div>
        <form>
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
    </>
  )
}