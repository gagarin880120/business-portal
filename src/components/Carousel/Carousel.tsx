import * as React from 'react';
import Slider from 'react-slick';
import { NewsItem } from '../../store/types';
import NewsItemCard from '../NewsItemCard/NewsItemCard';
import styles from './Carousel.module.css';

interface CarouselProps {
  currentNewsItemCardId: number
  news: Array<NewsItem>
}

export default function Carousel({ currentNewsItemCardId, news }: CarouselProps) {
  return (
    <>
      <Slider
        className={styles.slider}
        dots={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        initialSlide={currentNewsItemCardId}
      >
        {
          news.map((item: NewsItem, index: number) => (
            <NewsItemCard
              title={item.title}
              url={item.url}
              urlToImage={item.urlToImage}
              date={item.date}
              key={item.title}
              id={index}
            />
          ))
        }
      </Slider>
    </>
  )
}
