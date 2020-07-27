import * as React from 'react';
import { NewsItem } from '../../store/types';
import styles from './NewsItemCard.module.css';

export default function NewsItemCard({
  title, url, urlToImage, date,
}: NewsItem) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image} style={{ backgroundImage: `url(${urlToImage})` }}>
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.title}>
              {title}
            </p>
            <p className={styles.date}>
              {date}
            </p>
            <a className={styles.link} href={url}>Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}
