import { FormEvent, useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { Dialog } from '@/components/Dialog';
import { Button } from '@/components/Button';
import clsx from 'clsx';


function App() {
  // You can add the logic here
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isActiveDialog, setIsActiveDialog] = useState<boolean>(false);
  const [isActiveDialogSuccess, setIsActiveDialogSuccess] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    const value = firstName && lastName && email && password;
    if(!firstName && !lastName && !email && !password) {
      return
    } 
    setIsDisabled(!value);
  }, [firstName, lastName, email, password])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsActiveDialog(true);
  };

  const handleDialogConfirm = ()=> {
    setIsActiveDialog(false)
    setIsActive(false)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setIsActiveDialogSuccess(true)
    setIsDisabled(true);
  }

  return (
    <div className={styles.container}>
      {/* Add your components here */}
      {/* Ensure it matches the design exactly */}
      <Button className={styles.button} onClick={() => setIsActive(true)}>Open Modal</Button>
      
      <div className={clsx(styles.modalDialog, {[styles.hidden]: isActiveDialog === false})}>
        <Dialog
          isActive={isActiveDialog}
          title='Do you want to create a new user?'
          description='Click the create button to continue.'
          variant='info'
          confirmValue='Create'
          onConfirm={() => handleDialogConfirm()}
          onClose={() => setIsActiveDialog(false)}
        />
      </div>
      <div className={clsx(styles.modalDialogSuccess, {[styles.hidden]: isActiveDialogSuccess === false})}>
        <Dialog
          isActive={isActiveDialogSuccess}
          title='Successfully created a new user'
          description='The new user has been successfully created.'
          variant='success'
          confirmValue='Ok'
          onConfirm={() => setIsActiveDialogSuccess(false)}
        />
      </div>
        
        
      <Modal
        title='Create New User'
        description='Fill out the information below'
        confirmValue='Create'
        isActive={isActive}
        isDisabled={isDisabled}
        onConfirm={(e) => handleSubmit(e)}
        onClose={() => setIsActive(false)}
      >
        <div className={styles.containerModal}>
          <Input width={20} value={firstName} onChange={setFirstName} label='First Name' />
          <Input width={20} value={lastName} onChange={setLastName}  label='Last Name' />
          <Input width={20} value={email} onChange={setEmail} label='Email' type='email' />
          <Input width={20} value={password} onChange={setPassword} label='Password' type='password' />
        </div>
      </Modal>
    </div>
  );
}

export default App;
