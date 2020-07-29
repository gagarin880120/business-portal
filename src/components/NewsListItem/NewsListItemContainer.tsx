import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState } from '../../store/types';
import NewsListItemTypes from './types';
import { setCurrentNewsItemCardId, setIsIdChanging } from '../../store/actions';
import { selectCurrentNewsItemCardId } from '../../store/selectors';
import NewsListItem from './NewsListItem';

export function NewsListItemContainer({
  title, url, date, sourceName, sourceUrl, id, onItemClick, style, currentNewsItemCardId,
}: NewsListItemTypes) {
  return (
    <NewsListItem
      style={style}
      title={title}
      url={url}
      date={date}
      sourceName={sourceName}
      sourceUrl={sourceUrl}
      id={id}
      onItemClick={onItemClick}
      currentNewsItemCardId={currentNewsItemCardId}
    />
  );
}

export const mapStateToProps = (state: NewsState) => ({
  currentNewsItemCardId: selectCurrentNewsItemCardId(state),
});

export const mapDispatchToProps = (dispatch: ThunkDispatch<NewsState, void, Action>) => ({
  onItemClick(id: number) {
    dispatch(setIsIdChanging(true));
    dispatch(setCurrentNewsItemCardId(id));
    setTimeout(() => { dispatch(setIsIdChanging(false)); }, 0);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsListItemContainer);
