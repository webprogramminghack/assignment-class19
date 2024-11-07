import { Dialog } from '@/component/Dialog/Dialog';
import { Modal } from '@/component/Modal/Modal';
import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  // You can add the logic here
  const [isActive, setActive] = useState(true);
  const [isDialogActive, setDialog] = useState(false);
  const openDialog = () => {
    setDialog(true);
  };
  const closeDialog = () => {
    setDialog(false);
  };
  const [isConfirmActive, setConfirm] = useState(false);
  const openConfirm = () => {
    setConfirm(true);
    setDialog(false);
    setActive(false);
  };
  const closeConfirm = () => {
    setConfirm(false);
  };

  return (
    <div className={styles.container}>
      {/* Add your components here */}
      {isActive && <Modal onConfirm={openDialog} className={styles.modal} />}
      {isDialogActive && (
        <div className={styles.dialogContainer}>
          <Dialog
            title='Do you want to create a new user?'
            subtitle='Click the create button to continue.'
            variant='info'
            onClick={closeDialog}
            onConfirm={openConfirm}
          />
        </div>
      )}
      {isConfirmActive && (
        <div className={styles.dialogContainer}>
          <Dialog
            title='Successfully created a new user'
            subtitle='The new user has been successfully created.'
            variant='success'
            onClick={closeConfirm}
          />
        </div>
      )}

      {/* Ensure it matches the design exactly */}
    </div>
  );
}

export default App;
