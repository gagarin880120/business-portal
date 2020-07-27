import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState, NewsItem } from '../../store/types';
import { selectAreNewsLoaded, selectNews, selectCurrentNewsItemCardId, selectIsIdChanging } from '../../store/selectors';
import { getNews } from '../../store/actions';
import NewsPage from './NewsPage';

interface NewsPageContainerProps {
  news: Array<NewsItem> | null
  onPageLoad: () => void
  currentNewsItemCardId: number
  isIdChanging: boolean
}

export function NewsPageContainer({
  news, onPageLoad, currentNewsItemCardId, isIdChanging,
}: NewsPageContainerProps) {
  React.useEffect(() => {
    onPageLoad();
  }, []);

  return (
    <NewsPage
      news={news}
      currentNewsItemCardId={currentNewsItemCardId}
      isIdChanging={isIdChanging}
    />
  );
}

export const mapStateToProps = (state: NewsState) => ({
  areNewsLoaded: selectAreNewsLoaded(state),
  news: selectNews(state),
  currentNewsItemCardId: selectCurrentNewsItemCardId(state),
  isIdChanging: selectIsIdChanging(state),
});

export const mapDispatchToProps = (dispatch: ThunkDispatch<NewsState, void, Action>) => ({
  onPageLoad() {
    dispatch(getNews('us', 'business'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPageContainer);
