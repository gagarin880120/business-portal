import * as React from 'react';
import NewsListItemTypes from './types';
import styles from './NewsListItem.module.css';

export default function NewsListItem({
  title, url, date, sourceName, sourceUrl, id, onItemClick, style, currentNewsItemCardId,
}: NewsListItemTypes) {
  return (
    <div className={currentNewsItemCardId === id ? styles.activeIdWrapper : styles.wrapper}
      onClick={() => {
        onItemClick(id);
      }}
      style={style}
    >
      <div className={styles.title}>
        {title}
      </div>
      <a href={sourceUrl} className={styles.source}>
        {sourceName}
      </a>
      <div className={styles.date}>
        {date}
      </div>
      <a href={url} className={styles.url}>
        Read More
      </a>
    </div>
  );
}
