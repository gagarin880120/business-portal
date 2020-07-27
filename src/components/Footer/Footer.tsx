import * as React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Copyright © 2020 Business Portal. Andrei Mandryk
      </p>
    </div>
  );
}
