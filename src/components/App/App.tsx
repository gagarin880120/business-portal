import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import NewsPageContainer from '../../pages/News';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <NewsPageContainer />
    </div>
  );
}

export default hot(App);
