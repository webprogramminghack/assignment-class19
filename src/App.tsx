import { Dialog } from '@/component/Dialog/Dialog';
import { Modal } from '@/component/Modal/Modal';
import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  // You can add the logic here
  const [isActive] = useState(true);
  // const closeFunction = () => {
  //   setClose(true);
  // };
  return (
    <div className={styles.container}>
      {/* Add your components here */}
      <Modal />
      {isActive && (
        <div>
          <Dialog
            title='Do you want to create a new user?'
            subtitle='Click the create button to continue.'
            variant='info'
          />
        </div>
      )}
      {isActive && (
        <div>
          <Dialog
            title='Successfully created a new user'
            subtitle='The new user has been successfully created.'
            variant='success'
          />
        </div>
      )}

      {/* Ensure it matches the design exactly */}
    </div>
  );
}

export default App;
