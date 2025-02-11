import styles from './App.module.scss';
// import { Modal } from '@/components/Modal';
import { Modal } from '@/components';

function App() {
  // You can add the logic here

  return (
    <div className={styles.container}>
      {/* Add your components here */}
      {/* Ensure it matches the design exactly */}
      <Modal />
    </div>
  );
}

export default App;
