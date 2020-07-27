import { Dispatch } from 'redux';
import {
  NewsItem, ARE_NEWS_LOADED, NEWS, COUNTRY, CATHEGORY,
  CURRENT_NEWS_ITEM_CARD_ID, IS_ID_CHANGING, NewsActionTypes,
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

function setCathegory(cathegory: string): NewsActionTypes {
  return {
    type: CATHEGORY,
    cathegory,
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

function getNews(
  country: string, cathegory: string,
) {
  const API_KEY = 'e8169df8eb694e758fae2531e218d78e';
  const url = 'https://newsapi.org/v2/top-headlines?'
  + `apiKey=${API_KEY}`
  + `&country=${country}`
  + `&category=${cathegory}`
  + '&pageSize=100';
  return (dispatch: Dispatch) => {
    dispatch(setAreNewsLoaded(false));
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const items = data.articles.map((v: any) => ({
          title: v.title,
          url: v.url,
          urlToImage: v.urlToImage,
          date: new Date(v.publishedAt).toLocaleDateString('en-GB').split('/').join(' '),
        }));
        dispatch(setNews(items));
        dispatch(setAreNewsLoaded(true));
      })
      .catch((e) => console.log(e));
  };
}

export {
  setAreNewsLoaded, setNews, setCountry, setCathegory, getNews, setCurrentNewsItemCardId,
  setIsIdChanging,
};
