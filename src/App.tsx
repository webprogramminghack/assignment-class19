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

  const [FirstName, setFirstName] = useState<string>('');
  const [LastName, setLastName] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [Password, setPassword] = useState<string>('');

  useEffect(() => {
    const value = FirstName && LastName && Email && Password;
    if(!FirstName && !LastName && !Email && !Password) {
      return
    } 
    setIsDisabled(!value);
  }, [FirstName, LastName, Email, Password])

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
      <Modal
        title='Create New User'
        description='Fill out the information below'
        confirmValue='Create'

        isActive={isActive}
        childrenDirection='column'

        onConfirm={(e) => handleSubmit(e)}
        onClose={() => setIsActive(false)}
        isDisabled={isDisabled}

        isActiveDialogConfirm={isActiveDialog}
        DialogConfirm={
          <Dialog
            isActive={isActiveDialog}
            title='Do you want to create a new user?'
            description='Click the create button to continue.'
            variant='info'
            confirmValue='Create'
            onConfirm={() => handleDialogConfirm()}
            onClose={() => setIsActiveDialog(false)}
          />
        }
        DialogSuccess={
          <Dialog
            isActive={isActiveDialogSuccess}
            title='Successfully created a new user'
            description='The new user has been successfully created.'
            variant='success'
            confirmValue='Ok'
            onConfirm={() => setIsActiveDialogSuccess(false)}
          />
        }
      >
        <Input value={FirstName} onChange={setFirstName} label='First Name' />
        <Input value={LastName} onChange={setLastName}  label='Last Name' />
        <Input value={Email} onChange={setEmail} label='Email' type='email' />
        <Input value={Password} onChange={setPassword} label='Password' type='password' />
      </Modal>
    </div>
  );
}

export default App;
