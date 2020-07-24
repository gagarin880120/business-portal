import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import NewsContainer from '../../pages/News';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <NewsContainer />
    </div>
  );
}

export default hot(App);
