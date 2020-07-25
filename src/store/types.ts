interface NewsItem {
  title: string
  url: string
  urlToImage: string
  date: string
}

interface NewsState {
  areNewsLoaded: boolean;
  news: Array<NewsItem> | null;
  cathegory: string
  country: string
  currentPage: number
  totalPages: number
}

const ARE_NEWS_LOADED = 'ARE_NEWS_LOADED';
const NEWS = 'NEWS';
const COUNTRY = 'COUNTRY';
const CATHEGORY = 'CATHEGORY';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOTAL_PAGES = 'TOTAL_PAGES';

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

interface CurrentPageAction {
  type: typeof CURRENT_PAGE
  currentPage: number
}

interface TotalPagesAction {
  type: typeof TOTAL_PAGES
  totalPages: number
}

type NewsActionTypes = AreNewsLoadedAction
| NewsAction
| CountryAction
| CathegoryAction
| CurrentPageAction
| TotalPagesAction;

export {
  NewsItem, NewsState, ARE_NEWS_LOADED, NEWS, COUNTRY,
  CATHEGORY, CURRENT_PAGE, TOTAL_PAGES, NewsActionTypes,
};
