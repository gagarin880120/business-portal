import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState } from '../../store/types';
import NewsListItemTypes from './types';
import { setCurrentNewsItemCardId, setIsIdChanging } from '../../store/actions';
import NewsListItem from './NewsListItem';

export function NewsListItemContainer({
  title, url, date, id, onItemClick, style,
}: NewsListItemTypes) {
  return (
    <NewsListItem
      style={style}
      title={title}
      url={url}
      date={date}
      id={id}
      onItemClick={onItemClick}
    />
  );
}

export const mapDispatchToProps = (dispatch: ThunkDispatch<NewsState, void, Action>) => ({
  onItemClick(id: number) {
    dispatch(setIsIdChanging(true));
    dispatch(setCurrentNewsItemCardId(id));
    setTimeout(() => { dispatch(setIsIdChanging(false)); }, 0);
  },
});

export default connect(null, mapDispatchToProps)(NewsListItemContainer);
