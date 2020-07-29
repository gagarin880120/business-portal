interface NewsItem {
  title: string
  url: string
  urlToImage?: string
  date: string
  sourceName: string
  sourceUrl: string
  id?: number
  style?: Object
}

interface NewsState {
  areNewsLoaded: boolean;
  news: Array<NewsItem> | null;
  category: string
  country: string
  currentNewsItemCardId: number
  isIdChanging: boolean
  currentNewsAPIRequest: string
}

const ARE_NEWS_LOADED = 'ARE_NEWS_LOADED';
const NEWS = 'NEWS';
const COUNTRY = 'COUNTRY';
const CATEGORY = 'CATEGORY';
const CURRENT_NEWS_ITEM_CARD_ID = 'CURRENT_NEWS_ITEM_CARD_ID';
const IS_ID_CHANGING = 'IS_ID_CHANGING';
const CURRENT_NEWS_API_REQUEST = 'CURRENT_NEWS_API_REQUEST';

interface AreNewsLoadedAction {
  type: typeof ARE_NEWS_LOADED
  areNewsLoaded: boolean
}

interface NewsAction {
  type: typeof NEWS
  news: Array<NewsItem>
}

interface CountryAction {
  type: typeof COUNTRY
  country: string
}

interface CategoryAction {
  type: typeof CATEGORY
  category: string
}

interface CurrentNewsItemCardIdAction {
  type: typeof CURRENT_NEWS_ITEM_CARD_ID
  currentNewsItemCardId: number
}

interface IsIdChangingAction {
  type: typeof IS_ID_CHANGING
  isIdChanging: boolean
}

interface CurrentNewsAPIRequestAction {
  type: typeof CURRENT_NEWS_API_REQUEST
  currentNewsAPIRequest: string
}

type NewsActionTypes = AreNewsLoadedAction
| NewsAction
| CountryAction
| CategoryAction
| CurrentNewsItemCardIdAction
| IsIdChangingAction
| CurrentNewsAPIRequestAction;

export {
  NewsItem, NewsState, ARE_NEWS_LOADED, NEWS, COUNTRY, CURRENT_NEWS_ITEM_CARD_ID,
  CATEGORY, IS_ID_CHANGING, CURRENT_NEWS_API_REQUEST, NewsActionTypes,
};
