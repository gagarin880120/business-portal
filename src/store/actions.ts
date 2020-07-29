import { Dispatch } from 'redux';
import {
  NewsItem, ARE_NEWS_LOADED, NEWS, COUNTRY, CATEGORY, CURRENT_NEWS_ITEM_CARD_ID,
  IS_ID_CHANGING, CURRENT_NEWS_API_REQUEST, NewsActionTypes,
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

function setCountry(country: string): NewsActionTypes {
  return {
    type: COUNTRY,
    country,
  };
}

function setCategory(category: string): NewsActionTypes {
  return {
    type: CATEGORY,
    category,
  };
}

function setCurrentNewsItemCardId(currentNewsItemCardId: number): NewsActionTypes {
  return {
    type: CURRENT_NEWS_ITEM_CARD_ID,
    currentNewsItemCardId,
  };
}

function setIsIdChanging(isIdChanging: boolean): NewsActionTypes {
  return {
    type: IS_ID_CHANGING,
    isIdChanging,
  };
}

function setCurrentNewsAPIRequest(currentNewsAPIRequest: string): NewsActionTypes {
  return {
    type: CURRENT_NEWS_API_REQUEST,
    currentNewsAPIRequest,
  };
}

function getNews(
  country: string, category: string,
) {
  const API_KEY = '6e32a23ffca37acfdc46f9027792a220';
  const url = `https://gnews.io/api/v3/topics/${category}?`
  + `token=${API_KEY}`
  + `&country=${country}`
  + '&lang=us';
  return (dispatch: Dispatch) => {
    dispatch(setAreNewsLoaded(false));
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const items = data.articles.map((v: any) => ({
          title: v.title,
          url: v.url,
          urlToImage: v.image,
          date: new Date(v.publishedAt).toLocaleDateString('en-GB').split('/').join(' '),
          sourceName: v.source.name,
          sourceUrl: v.source.url,
        }));
        dispatch(setNews(items));
        dispatch(setAreNewsLoaded(true));
        dispatch(setCurrentNewsItemCardId(0));
      })
      .catch((e) => console.log(e));
  };
}

function getNewsBySearch(
  country: string, query: string,
) {
  console.log(country, query)
  const API_KEY = '6e32a23ffca37acfdc46f9027792a220';
  const url = 'https://gnews.io/api/v3/search?'
  + `q=${query}`
  + `&token=${API_KEY}`
  + `&country=${country}`
  + '&lang=en';
  return (dispatch: Dispatch) => {
    dispatch(setAreNewsLoaded(false));
    dispatch(setCurrentNewsAPIRequest('search'));
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const items = data.articles.map((v: any) => ({
          title: v.title,
          url: v.url,
          urlToImage: v.image,
          date: new Date(v.publishedAt).toLocaleDateString('en-GB').split('/').join(' '),
          sourceName: v.source.name,
          sourceUrl: v.source.url,
        }));
        dispatch(setNews(items));
        dispatch(setAreNewsLoaded(true));
        dispatch(setCurrentNewsItemCardId(0));
      })
      .catch((e) => console.log(e));
  };
}

export {
  setAreNewsLoaded, setNews, setCountry, setCategory, getNews, setCurrentNewsItemCardId,
  setIsIdChanging, setCurrentNewsAPIRequest, getNewsBySearch,
};
