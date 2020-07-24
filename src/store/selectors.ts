import { NewsState } from './types';

const selectAreNewsLoaded = (state: NewsState) => state.areNewsLoaded;
const selectNews = (state: NewsState) => state.news;

export { selectAreNewsLoaded, selectNews };
