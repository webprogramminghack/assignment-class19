import styles from './Input.module.scss';
import { ChangeEvent , Dispatch, FC, HTMLInputTypeAttribute, SetStateAction } from 'react';
import clsx from 'clsx';
import { useDirectionContext } from '@/hooks/useDirectionContext';

type InputType = {
  label: string
  type?: HTMLInputTypeAttribute | undefined
  placeHolder?: string | undefined
  value?: string | readonly string[] | number | undefined;
  onChange?: Dispatch<SetStateAction<string>>;
}

export const Input: FC<InputType> = ({ label, type = 'text', placeHolder, value, onChange = () => {} }) => {
  const context = useDirectionContext();

  const onChangeStatus=(e:ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }

  return (
    <div className={clsx(styles.wrapper, {[styles.half]: context === 'column'})}>
      <label className={styles.label} htmlFor={label}>{label}</label>
      <input className={styles.input} value={value} onChange={onChangeStatus} type={type} id={label} placeholder={placeHolder} />
    </div>
  );
};
