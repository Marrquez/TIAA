import { Employee } from './models/Employee'
import * as SearchActions from './search-actions';

/**
 * the reducer state
 * */
export interface State {
  searchTerms: string;
  results: Employee[]
};

/**
 * the reducer initial state
 * */
const initialState: State = {
  searchTerms: '',
  results: []
};

export function reducer(state = initialState, action: SearchActions.All): State {
  switch (action.type) {
    case SearchActions.SEARCH:
      return {
        ...state,
        searchTerms: action.payload
      };
    break;

    case SearchActions.SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload
      };
    break;

    case SearchActions.ADD:
      state.results.push(action.payload);
      return state;
      break;

    default:
      return state;
    break;
  }
}
