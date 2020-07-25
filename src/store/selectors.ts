import { NewsState } from './types';

const selectAreNewsLoaded = (state: NewsState) => state.areNewsLoaded;
const selectNews = (state: NewsState) => state.news;
const selectCountry = (state: NewsState) => state.country;
const selectCathegory = (state: NewsState) => state.cathegory;
const selectCurrentPage = (state: NewsState) => state.currentPage;
const selectTotalPages = (state: NewsState) => state.totalPages;

export {
  selectAreNewsLoaded, selectNews, selectCountry,
  selectCathegory, selectCurrentPage, selectTotalPages,
};
