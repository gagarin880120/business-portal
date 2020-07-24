interface NewsItem {
  title: string
  url: string
  urlToImage: string
  source: string
}

interface NewsState {
  areNewsLoaded: boolean;
  news: Array<NewsItem> | null;
}

const ARE_NEWS_LOADED = 'ARE_NEWS_LOADED';
const NEWS = 'NEWS';

interface AreNewsLoadedAction {
  type: typeof ARE_NEWS_LOADED
  areNewsLoaded: boolean
}

interface NewsAction {
  type: typeof NEWS
  news: Array<NewsItem>
}

type NewsActionTypes = AreNewsLoadedAction | NewsAction;

export {
  NewsItem, NewsState, ARE_NEWS_LOADED, NEWS, NewsActionTypes,
};
