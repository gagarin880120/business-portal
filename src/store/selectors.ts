import { NewsState } from './types';

const selectAreNewsLoaded = (state: NewsState) => state.areNewsLoaded;
const selectNews = (state: NewsState) => state.news;
const selectCountry = (state: NewsState) => state.country;
const selectCategory = (state: NewsState) => state.category;
const selectCurrentNewsItemCardId = (state: NewsState) => state.currentNewsItemCardId;
const selectIsIdChanging = (state: NewsState) => state.isIdChanging;
const selectCurrentNewsAPIRequest = (state: NewsState) => state.currentNewsAPIRequest;

export {
  selectAreNewsLoaded, selectNews, selectCountry, selectCategory,
  selectCurrentNewsItemCardId, selectIsIdChanging, selectCurrentNewsAPIRequest,
};
