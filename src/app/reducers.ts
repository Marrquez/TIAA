import * as fromSearch from './search-reducer';

export interface State {
  search: fromSearch.State;
}

export const reducers = {
    search: fromSearch.reducer
};


export function selectResults(state: State) {
  return state.search.results;
};

export function selectCountries(state: State){
  return state.search.countries;
}

export function selectCount(state: State) {
  return state.search.results.length;
};

export function selectTerms(state: State) {
  return state.search.searchTerms;
};

export function selectArea(state: State) {
  return state.search.area;
};

export function selectJobTitle(state: State) {
  return state.search.jobTitle;
};
