import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  NewsState, ARE_NEWS_LOADED, NEWS, COUNTRY, CATHEGORY, CURRENT_NEWS_ITEM_CARD_ID,
  IS_ID_CHANGING, NewsActionTypes,
} from './types';

const initialState: NewsState = {
  areNewsLoaded: false,
  news: null,
  country: 'us',
  cathegory: 'business',
  currentNewsItemCardId: 0,
  isIdChanging: false
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
    case CURRENT_NEWS_ITEM_CARD_ID:
      return { ...state, currentNewsItemCardId: action.currentNewsItemCardId };
    case IS_ID_CHANGING:
      return { ...state, isIdChanging: action.isIdChanging };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export { reducer, store };
