import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState, NewsItem } from '../../store/types';
import { selectAreNewsLoaded, selectNews } from '../../store/selectors';
import { getNews } from '../../store/actions';
import NewsPage from './NewsPage';

interface NewsPageContainerProps {
  areNewsLoaded: boolean
  news: Array<NewsItem> | null
  onPageLoad: () => void
}

export function NewsPageContainer({ news, onPageLoad, areNewsLoaded }: NewsPageContainerProps) {
  React.useEffect(() => {
    onPageLoad();
  }, []);

  return (
    <NewsPage
      news={news}
      areNewsLoaded={areNewsLoaded}
    />
  );
}

export const mapStateToProps = (state: NewsState) => ({
  areNewsLoaded: selectAreNewsLoaded(state),
  news: selectNews(state),
});

export const mapDispatchToProps = (dispatch: ThunkDispatch<NewsState, void, Action>) => ({
  onPageLoad() {
    dispatch(getNews('us', 'business', 1, null));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPageContainer);
