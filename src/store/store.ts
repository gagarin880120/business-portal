import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  NewsState, ARE_NEWS_LOADED, NEWS, NewsActionTypes,
} from './types';

const initialState: NewsState = {
  areNewsLoaded: false,
  news: null,
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
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export { reducer, store };
