import * as React from 'react';
import NewsListItemTypes from './types';
import styles from './NewsListItem.module.css';

export default function NewsListItem({
  title, url, date, id, onItemClick, style,
}: NewsListItemTypes) {
  return (
    <div className={styles.wrapper}
      onClick={() => {
        onItemClick(id);
      }}
      style={style}
    >
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.date}>
        {date}
      </div>
      <a href={url} className={styles.url}>
        Read More
      </a>
    </div>
  );
}
