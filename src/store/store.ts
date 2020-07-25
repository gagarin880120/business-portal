import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  NewsState, ARE_NEWS_LOADED, NEWS, COUNTRY, CATHEGORY, CURRENT_PAGE, TOTAL_PAGES, NewsActionTypes,
} from './types';

const initialState: NewsState = {
  areNewsLoaded: false,
  news: null,
  country: 'us',
  cathegory: 'business',
  currentPage: 1,
  totalPages: 0,
};

function reducer(
  state = initialState,
  action: NewsActionTypes,
): NewsState {
  switch (action.type) {
    case ARE_NEWS_LOADED:
      return { ...state, areNewsLoaded: action.areNewsLoaded };
    case NEWS:
      return { ...state, news: action.news };
    case COUNTRY:
      return { ...state, country: action.country };
    case CATHEGORY:
      return { ...state, cathegory: action.cathegory };
    case CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case TOTAL_PAGES:
      return { ...state, totalPages: action.totalPages };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export { reducer, store };
