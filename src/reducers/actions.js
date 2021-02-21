import * as actions from './types'

export function fetchCatalogs(){
  return {
    type: actions.FETCH_CATALOGS,
  }
}
export function fetchCatalogsSuccess(catalogs){
  return {
    type: actions.FETCH_CATALOGS_SUCCESS,
    payload: catalogs
  }
}

export function fetchCatalogsFailure(){
  return {
    type: actions.FETCH_CATALOGS_FAILURE,
  }
}
export function filterCatalogs(filter){
  return {
    type: actions.FILTER_CATALOGS,
    payload: filter
  }
}
export function fetchProducts(payload){
  return {
    type: actions.FETCH_PRODUCTS,
    payload
  }
}
export function favoriteProduct(id){
  return {
    type: actions.FAVORITE_PRODUCT,
    payload: id
  }
}
