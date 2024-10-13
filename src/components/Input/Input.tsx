import styles from './Input.module.scss';
import { ChangeEvent , Dispatch, FC, HTMLInputTypeAttribute, SetStateAction } from 'react';

type InputType = {
  label: string
  type?: HTMLInputTypeAttribute | undefined
  placeHolder?: string | undefined
  value?: string | readonly string[] | number | undefined;
  onChange?: Dispatch<SetStateAction<string>>;
  width?: number
}

export const Input: FC<InputType> = ({ label, type = 'text', placeHolder, value, onChange = () => {}, width }) => {

  const onChangeStatus=(e:ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={label}>{label}</label>
      <input className={styles.input} value={value} onChange={onChangeStatus} type={type} id={label} placeholder={placeHolder} 
      style={{ width: `${width}rem` }} />
    </div>
  );
};
