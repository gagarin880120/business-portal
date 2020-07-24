import * as React from 'react';
import styles from './NewsPage.module.css';
import NewsCard from '../../components/NewsCard/NewsCard';
import { NewsItem } from '../../store/types';

interface NewsPageProps {
  news: Array<NewsItem>
}

export default function NewsPage({ news }: NewsPageProps) {
  return (
    <>
      {
    news.map((item) => (
      <NewsCard
        title={item.title}
        url={item.url}
        key={item.url}
        urlToImage={item.urlToImage}
        source={item.source}
      />
    ))
  }
    </>

  );
}
