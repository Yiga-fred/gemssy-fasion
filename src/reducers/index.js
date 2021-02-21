import * as actions from './types'


export  const initialState = {
  isLoading:false,
  catalogs: [],
  error: '',
  filteredCatalogs: [],
}
export default function reduce(state, action) {

  switch(action.type) {
    case actions.FETCH_CATALOGS:
    return {
      ...state,
      isLoading: true,
      error: ''
    }
    case actions.FETCH_CATALOGS_SUCCESS:
      console.log(action.type, state)
    return {
      ...state,
      catalogs: action.payload,
      filteredCatalogs: action.payload,
      isLoading: false
    }
    case actions.FETCH_CATALOGS_FAILURE:
    return {
      ...state,
      isLoading: true,
      error: 'Failed to load categories'
    }
    case actions.FILTER_CATALOGS:
    return {
      ...state,
      filteredCatalogs: state.catalogs.filter(catalog => catalog.category_key.indexOf(action.payload) !== -1)
    }
    case actions.FAVORITE_CATALOG:
    return {
      ...state,
      catalogs: state.catalogs.map(catalog => catalog.id !== action.payload ? catalog : {...catalog, liked: !catalog.liked})
    }
    default:
      return state;
  }  
}