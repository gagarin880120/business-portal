import { Dispatch } from 'redux';
import {
  NewsItem, ARE_NEWS_LOADED, NEWS, COUNTRY, CATHEGORY, CURRENT_PAGE, TOTAL_PAGES, NewsActionTypes,
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

function setCurrentPage(currentPage: number): NewsActionTypes {
  return {
    type: CURRENT_PAGE,
    currentPage,
  };
}

function setTotalPages(totalPages: number): NewsActionTypes {
  return {
    type: TOTAL_PAGES,
    totalPages,
  };
}

function getNews(
  country: string, cathegory: string, page: number, news: null | Array<NewsItem>,
) {
  const API_KEY = 'e8169df8eb694e758fae2531e218d78e';
  const url = 'https://newsapi.org/v2/top-headlines?'
  + `apiKey=${API_KEY}`
  + `&country=${country}`
  + `&category=${cathegory}`
  + '&pageSize=10'
  + `&page=${page}`;
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
        dispatch(setCurrentPage(page));
        dispatch(setNews(page > 1 ? [...news, ...items] : items));
        dispatch(setAreNewsLoaded(true));
        dispatch(setTotalPages(Math.ceil(data.totalResults / 10)));
      });
  };
}

export {
  setAreNewsLoaded, setNews, setCountry, setCathegory, setCurrentPage, setTotalPages, getNews,
};
