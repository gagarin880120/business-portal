interface NewsState {
  areNewsLoaded: boolean;
  news: Array<Object> | null;
}

const ARE_NEWS_LOADED = 'ARE_NEWS_LOADED';
const NEWS = 'NEWS';

interface AreNewsLoadedAction {
  type: typeof ARE_NEWS_LOADED
  areNewsLoaded: boolean
}

interface NewsAction {
  type: typeof NEWS
  news: Array<Object>
}

type NewsActionTypes = AreNewsLoadedAction | NewsAction;

export {
  NewsState, ARE_NEWS_LOADED, NEWS, NewsActionTypes,
};
