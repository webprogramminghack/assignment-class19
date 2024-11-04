import IconClose from '@/assets/svg/icon-close.svg';
import { Button } from '@/component/Button/Button';
import { Input } from '@/component/Input/Input';
import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './Modal.module.scss';

// type ModalProps = {
//   a?: string;
// };

type modalProps = {
  isActive?: boolean;
  disabled?: boolean;
};

export const Modal: React.FC<modalProps> = () => {
  const [isActive, setActive] = useState(true);
  const closeFunction = () => {
    setActive(false);
  };
  const openFunction = () => {
    setActive(true);
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
              <Input id='firstName' nameLabel='First Name' variant='text' />
            </div>
            <div className={styles.lastName}>
              <Input id='lastName' nameLabel='Last Name' variant='text' />
            </div>
          </div>
          <div className={styles.emailWrapper}>
            <div className={styles.email}>
              <Input id='email' nameLabel='Email' variant='email' />
            </div>
            <div className={styles.password}>
              <Input id='password' nameLabel='Password' variant='password' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Button disabled onClick={openFunction}>
          Create
        </Button>
      </div>
    </div>
  );
};
