import * as React from 'react';
import { NewsItem } from '../../store/types';
import styles from './NewsItemCard.module.css';

export default function NewsItemCard({
  title, url, urlToImage, date,
}: NewsItem) {
  return (
    <div className={styles.wrapper}>
      <a className={styles.link} href={url}>
        <div className={styles.image} style={{ backgroundImage: `url(${urlToImage})` }} />
        <div className={styles.info}>
          <p className={styles.title}>
            {title}
          </p>
          <p className={styles.date}>
            {date}
          </p>
        </div>
      </a>
    </div>
  );
}
