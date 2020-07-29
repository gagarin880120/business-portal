import * as React from 'react';
import { FixedSizeList } from 'react-window';
import { NewsItem } from '../../store/types';
import NewsPageNavBarContainer from '../../components/NewsPageNavBar';
import Carousel from '../../components/Carousel/Carousel';
import NewsListItemContainer from '../../components/NewsListItem';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import styles from './NewsPage.module.css';

interface NewsPageProps {
  news: Array<NewsItem> | null
  currentNewsItemCardId: number
  isIdChanging: boolean
}

interface ListRowProps {
  index: number
  style: Object
}

export default function NewsPage({ news, currentNewsItemCardId, isIdChanging }: NewsPageProps) {
  const ListRow = ({ index, style }: ListRowProps) => (
    <NewsListItemContainer
      style={style}
      title={news[index].title}
      url={news[index].url}
      date={news[index].date}
      sourceName={news[index].sourceName}
      sourceUrl={news[index].sourceUrl}
      id={index}
    />
  );

  return (
    <div className={styles.wrapper}>
      <NewsPageNavBarContainer />
      {
        news ? (
          <div className={styles.contentContainer}>
            {
              isIdChanging ? (
                <div className={styles.idIsLoading}>
                  <Spinner />
                </div>
              ) : (
                <Carousel
                  currentNewsItemCardId={currentNewsItemCardId}
                  news={news}
                />
              )
            }

            <FixedSizeList
              height={500}
              itemCount={news.length}
              itemSize={90}
              width={450}
              className={styles.list}
            >
              {ListRow}
            </FixedSizeList>
          </div>
        ) : null
      }
      {
        news ? <Footer /> : null
      }
    </div>

  );
}
