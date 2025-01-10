import IconClose from '@/assets/svg/icon-close.svg';
import { Button } from '@/component/Button/Button';
import { Input } from '@/component/Input/Input';
import clsx from 'clsx';
import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import styles from './Modal.module.scss';

// type ModalProps = {
//   a?: string;
// };

type modalProps = {
  isActive?: boolean;
  disabled?: boolean;
  className?: string;
  onConfirm?: (e: MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
};

export const Modal: React.FC<modalProps> = ({ onConfirm }) => {
  const [isActive, setActive] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  const closeFunction = () => {
    setActive(false);
  };
  useEffect(() => {
    if (firstName && lastName && email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [firstName, lastName, email, password]);

  const firstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const lastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // const [textFirstName, setTextFirstName] = useState('');

  return (
    <div
      className={clsx(styles.modal, { [styles.hidden]: isActive === false })}
    >
      <div className={styles.header}>
        <div className={styles.headText}>
          <p className={styles.title}>Create new user</p>
          <p className={styles.description}>Fill out the information below</p>
        </div>
        <IconClose onClick={closeFunction} className={styles.icon} />
      </div>
      <div className={styles.main}>
        <div className={styles.contactWrapper}>
          <div className={styles.nameWrapper}>
            <div className={styles.firstName}>
              <Input
                id='firstName'
                nameLabel='First Name'
                variant='text'
                onChange={firstNameChange}
              />
            </div>
            <div className={styles.lastName}>
              <Input
                id='lastName'
                nameLabel='Last Name'
                variant='text'
                onChange={lastNameChange}
              />
            </div>
          </div>
          <div className={styles.emailWrapper}>
            <div className={styles.email}>
              <Input
                id='email'
                nameLabel='Email'
                variant='email'
                onChange={emailChange}
              />
            </div>
            <div className={styles.password}>
              <Input
                id='password'
                nameLabel='Password'
                variant='password'
                onChange={passwordChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Button disabled={isDisabled} onClick={onConfirm}>
          Create
        </Button>
      </div>
    </div>
  );
};
