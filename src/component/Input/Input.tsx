import React, { ReactNode } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  id: string;
  variant: React.HTMLInputTypeAttribute;
  nameLabel: string;
  value?: ReactNode;
};

export const Input: React.FC<InputProps> = ({ variant, id, nameLabel }) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {nameLabel}
      </label>
      <input type={variant} id={id} />
    </div>
  );
};
