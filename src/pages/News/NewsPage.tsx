import * as React from 'react';
import styles from './NewsPage.module.css';
import NewsItemCard from '../../components/NewsItemCard/NewsItemCard';
import Spinner from '../../components/Spinner/Spinner';
import FooterContainer from '../../components/Footer';
import { NewsItem } from '../../store/types';

interface NewsPageProps {
  areNewsLoaded: boolean
  news: Array<NewsItem> | null
}

export default function NewsPage({ news, areNewsLoaded }: NewsPageProps) {
  return (
    <div className={styles.wrapper}>
      {
        news
          ? news.map((item) => (
            <NewsItemCard
              title={item.title}
              url={item.url}
              key={item.url}
              urlToImage={item.urlToImage}
              date={item.date}
            />
          )) : <Spinner />
      }
      {
        !areNewsLoaded ? <Spinner /> : null
      }
      {
        news ? <FooterContainer /> : null
      }
    </div>

  );
}
