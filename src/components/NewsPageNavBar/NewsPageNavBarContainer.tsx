import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState } from '../../store/types';
import { setCountry, setCathegory, getNews } from '../../store/actions';
import { selectCountry, selectCathegory } from '../../store/selectors';
import NewsPageNavBar from './NewsPageNavBar';
import NewsPageNavBarTypes from './types';

export function NewsPageNavBarContainer({
  country, cathegory, onChange, onCountryChange, onCathegoryChange,
}: NewsPageNavBarTypes) {
  return (
    <NewsPageNavBar
      country={country}
      cathegory={cathegory}
      onChange={onChange}
      onCountryChange={onCountryChange}
      onCathegoryChange={onCathegoryChange}
    />
  );
}

export const mapStateToProps = (state: NewsState) => ({
  country: selectCountry(state),
  cathegory: selectCathegory(state),
});

export const mapDispatchToProps = (dispatch: ThunkDispatch<NewsState, void, Action>) => ({
  onCountryChange(country: string) {
    dispatch(setCountry(country));
  },
  onCathegoryChange(cathegory: string) {
    dispatch(setCathegory(cathegory));
  },
  onChange(country: string, cathegory: string) {
    dispatch(getNews(country, cathegory, 1, null));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPageNavBarContainer);
