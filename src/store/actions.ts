import { Dispatch } from 'redux';
import {
  NewsItem, ARE_NEWS_LOADED, NEWS, NewsActionTypes,
} from './types';

function setAreNewsLoaded(areNewsLoaded: boolean): NewsActionTypes {
  return {
    type: ARE_NEWS_LOADED,
    areNewsLoaded,
  };
}

function setNews(news: Array<NewsItem>): NewsActionTypes {
  return {
    type: NEWS,
    news,
  };
}

function getNews(country: string) {
  const API_KEY = 'e8169df8eb694e758fae2531e218d78e';
  const url = 'https://newsapi.org/v2/top-headlines?'
  + `apiKey=${API_KEY}`
  + `&country=${country}`
  + '&category=business';
  return (dispatch: Dispatch) => {
    dispatch(setAreNewsLoaded(false));
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const items = data.articles.map((v: any) => ({
          title: v.title,
          url: v.url,
          urlToImage: v.urlToImage,
          source: v.source.name,
        }));
        dispatch(setNews(items));
        dispatch(setAreNewsLoaded(true));
      });
  };
}

export {
  setAreNewsLoaded, setNews, getNews,
};
