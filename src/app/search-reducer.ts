import { Employee } from './models/Employee'
import { Country } from './models/Country'
import * as SearchActions from './search-actions';

/**
 * the reducer state
 * */
export interface State {
  searchTerms: string,
  results: Employee[],
  area: string,
  jobTitle: Array<string>,
  countries: Country[],
  employee: Employee
};

/**
 * the reducer initial state
 * */
const initialState: State = {
  searchTerms: '',
  results: [],
  area: 'Services',
  jobTitle: ["Manager", "Host", "Tuttofare", "Waitress", "Dining room manager"],
  countries: [],
  employee: {id:'', name:'', dob: '', country: '', username: '', hireDate:'', status: true, tipRate: 0, jobTitle: '', area: true  }
};

export function reducer(state = initialState, action: SearchActions.All): State {
  switch (action.type) {
    case SearchActions.SEARCH:
      return {
        ...state,
        searchTerms: action.payload
      };
    break;

    case SearchActions.SEARCH_COUNTRIES:
      return {
        ...state
      };
      break;

    case SearchActions.SEARCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload
      };
      break;

    case SearchActions.SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload
      };
    break;

    case SearchActions.SEARCH_EMPLOYEE:
      var emp = state.results.filter(function(e){
        return e.id === action.payload;
      })[0];

      return {
        ...state,
        employee: emp
      };
      break;

    case SearchActions.ADD:

      var emp = state.results.filter(function(e, index, arr){
        if(e.id === action.payload.id){
          arr[index] = action.payload;
          return true;
        }

        return false;

      })[0];

      if(!emp){
        state.results.push(action.payload);
      }

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
