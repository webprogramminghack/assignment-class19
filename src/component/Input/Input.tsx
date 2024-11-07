import React, { ChangeEvent } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  id: string;
  variant: React.HTMLInputTypeAttribute;
  nameLabel: string;
  value?: 'string | number | readonly string[] | undefined';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  variant,
  id,
  nameLabel,
  value,
  onChange,
}) => {
  // const [text, setText] = useState('');

  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {nameLabel}
      </label>
      <input onChange={onChange} value={value} type={variant} id={id} />
    </div>
  );
};
