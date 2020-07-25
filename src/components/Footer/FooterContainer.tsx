import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState, NewsItem } from '../../store/types';
import {
  selectAreNewsLoaded, selectNews, selectCountry,
  selectCathegory, selectCurrentPage, selectTotalPages,
} from '../../store/selectors';
import { getNews } from '../../store/actions';
import Footer from './Footer';

export interface FooterContainerProps extends NewsState {
  onIntersect: (
    country: string, cathegory: string, currentPage: number, news: null | Array<NewsItem>,
  ) => void
}

export function FooterContainer({
  areNewsLoaded, news, country, cathegory, currentPage, totalPages, onIntersect,
}: FooterContainerProps) {
  return (
    <Footer
      areNewsLoaded={areNewsLoaded}
      news={news}
      country={country}
      cathegory={cathegory}
      currentPage={currentPage}
      totalPages={totalPages}
      onIntersect={onIntersect}
    />
  );
}

export const mapStateToProps = (state: NewsState) => ({
  areNewsLoaded: selectAreNewsLoaded(state),
  news: selectNews(state),
  country: selectCountry(state),
  cathegory: selectCathegory(state),
  currentPage: selectCurrentPage(state),
  totalPages: selectTotalPages(state),
});

export const mapDispatchToProps = (dispatch: ThunkDispatch<NewsState, void, Action>) => ({
  onIntersect(
    country: string, cathegory: string, currentPage: number, news: null | Array<NewsItem>,
  ) {
    dispatch(getNews(country, cathegory, currentPage, news));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
