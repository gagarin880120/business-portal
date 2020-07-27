interface NewsItem {
  title: string
  url: string
  urlToImage?: string
  date: string
  id?: number
  style?: Object
}

interface NewsState {
  areNewsLoaded: boolean;
  news: Array<NewsItem> | null;
  cathegory: string
  country: string
  currentNewsItemCardId: number
  isIdChanging: boolean
}

const ARE_NEWS_LOADED = 'ARE_NEWS_LOADED';
const NEWS = 'NEWS';
const COUNTRY = 'COUNTRY';
const CATHEGORY = 'CATHEGORY';
const CURRENT_NEWS_ITEM_CARD_ID = 'CURRENT_NEWS_ITEM_CARD_ID';
const IS_ID_CHANGING = 'IS_ID_CHANGING';


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

interface CathegoryAction {
  type: typeof CATHEGORY
  cathegory: string
}

interface CurrentNewsItemCardIdAction {
  type: typeof CURRENT_NEWS_ITEM_CARD_ID
  currentNewsItemCardId: number
}

interface IsIdChangingAction {
  type: typeof IS_ID_CHANGING
  isIdChanging: boolean
}

type NewsActionTypes = AreNewsLoadedAction
| NewsAction
| CountryAction
| CathegoryAction
| CurrentNewsItemCardIdAction
| IsIdChangingAction;

export {
  NewsItem, NewsState, ARE_NEWS_LOADED, NEWS, COUNTRY,
  CURRENT_NEWS_ITEM_CARD_ID, CATHEGORY, IS_ID_CHANGING, NewsActionTypes,
};
