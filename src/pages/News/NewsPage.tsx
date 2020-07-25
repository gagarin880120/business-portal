import * as React from 'react';
import styles from './NewsPage.module.css';
import NewsItemCard from '../../components/NewsItemCard/NewsItemCard';
import { NewsItem } from '../../store/types';

interface NewsPageProps {
  news: Array<NewsItem>
}

export default function NewsPage({ news }: NewsPageProps) {
  return (
    <div className={styles.wrapper}>
      {
    news.map((item) => (
      <NewsItemCard
        title={item.title}
        url={item.url}
        key={item.url}
        urlToImage={item.urlToImage}
        date={item.date}
      />
    ))
  }
    </div>

  );
}
