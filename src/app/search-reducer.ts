import { Employee } from './models/Employee'
import * as SearchActions from './search-actions';

/**
 * the reducer state
 * */
export interface State {
  searchTerms: string,
  results: Employee[],
  area: string,
  jobTitle: Array<string>
};

/**
 * the reducer initial state
 * */
const initialState: State = {
  searchTerms: '',
  results: [],
  area: 'Services',
  jobTitle: ["Manager", "Host", "Tuttofare", "Waitress", "Dining room manager"]
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

    case SearchActions.UPDATE_AREA:
      var jobTitle = action.payload === "Services" ? ["Manager", "Host", "Tuttofare", "Waitress", "Dining room manager"] : ["Chef", "Sous Chef", "Dishwasher", "Cook"];
      return {
        ...state,
        area: action.payload,
        jobTitle: jobTitle
      };
      break;

    default:
      return state;
    break;
  }
}
