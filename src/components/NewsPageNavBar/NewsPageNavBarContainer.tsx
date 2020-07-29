import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState } from '../../store/types';
import {
  setCountry, setCategory, getNews, getNewsBySearch, setCurrentNewsAPIRequest,
} from '../../store/actions';
import { selectCountry, selectCategory, selectCurrentNewsAPIRequest } from '../../store/selectors';
import NewsPageNavBar from './NewsPageNavBar';
import NewsPageNavBarTypes from './types';

export function NewsPageNavBarContainer({
  country, category, currentNewsAPIRequest, onChange, onCountryChange, onCategoryChange, onSearch,
}: NewsPageNavBarTypes) {
  return (
    <NewsPageNavBar
      country={country}
      category={category}
      currentNewsAPIRequest={currentNewsAPIRequest}
      onChange={onChange}
      onCountryChange={onCountryChange}
      onCategoryChange={onCategoryChange}
      onSearch={onSearch}
    />
  );
}

export const mapStateToProps = (state: NewsState) => ({
  country: selectCountry(state),
  category: selectCategory(state),
  currentNewsAPIRequest: selectCurrentNewsAPIRequest(state),
});

export const mapDispatchToProps = (dispatch: ThunkDispatch<NewsState, void, Action>) => ({
  onCountryChange(country: string) {
    dispatch(setCountry(country));
  },
  onCategoryChange(category: string) {
    dispatch(setCurrentNewsAPIRequest('topics'));
    dispatch(setCategory(category));
  },
  onChange(country: string, category: string) {
    dispatch(getNews(country, category));
  },
  onSearch(country: string, query: string) {
    dispatch(getNewsBySearch(country, query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPageNavBarContainer);
