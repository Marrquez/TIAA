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

export function selectEmployee(state: State) {
  return state.search.employee;
};

export function selectCountries(state: State){
  return state.search.countries;
}

export function selectArea(state: State) {
  return state.search.area;
};

export function selectJobTitle(state: State) {
  return state.search.jobTitle;
};
