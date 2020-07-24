import * as React from 'react';
import styles from './NewsCard.module.css';
import { NewsItem } from '../../store/types';

export default function NewsCard({
  title, url, urlToImage, source,
}: NewsItem) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.url}>{url}</div>
      <div className={styles.urlToImage}>{urlToImage}</div>
      <div className={styles.source}>{source}</div>
    </div>
  );
}
