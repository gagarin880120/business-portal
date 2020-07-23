import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './App.module.css';

interface AppProps {
  name: string;
}

function App({ name }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>
        {`Hello, ${name}!`}
      </h1>
    </div>
  );
}

export default hot(App);
