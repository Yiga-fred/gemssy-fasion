import * as actions from './types'


export  const initialState = {
  isLoading:false,
  catalogs: [],
  error: '',
  filteredCatalogs: [],
  products: []
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
    case actions.FETCH_PRODUCTS:
    return {
      ...state,
      products: action.payload
    }
    case actions.FAVORITE_PRODUCT:
    return {
      ...state,
      products: state.products.map(product => product.id !== action.payload ? product : {...product, liked: !product.liked})
    }
    default:
      return state;
  }  
}