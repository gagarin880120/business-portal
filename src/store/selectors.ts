import { NewsState } from './types';

const selectAreNewsLoaded = (state: NewsState) => state.areNewsLoaded;
const selectNews = (state: NewsState) => state.news;
const selectCountry = (state: NewsState) => state.country;
const selectCathegory = (state: NewsState) => state.cathegory;
const selectCurrentNewsItemCardId = (state: NewsState) => state.currentNewsItemCardId;
const selectIsIdChanging = (state: NewsState) => state.isIdChanging;

export {
  selectAreNewsLoaded, selectNews, selectCountry,
  selectCathegory, selectCurrentNewsItemCardId, selectIsIdChanging,
};
