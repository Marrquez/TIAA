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
  searchTerms: '';
  results: []
};

export function reducer(state: initialState = initialState, action: SearchActions.All): State {
  switch (action.type) {
    case SearchActions.SEARCH: {
      return {
        ...state,
        searchTerms: action.payload
      };
    }

    case SearchActions.SEARCH_SUCCESS: {
      return {
        ...state,
        results: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
