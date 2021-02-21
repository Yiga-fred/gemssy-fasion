import  {useEffect, useContext} from 'react';
import axios from '../axios'
import CatalogsContext from '../context'
import {fetchCatalogs, fetchCatalogsSuccess, fetchCatalogsFailure, filterCatalogs} from '../reducers/actions';

const fetchCategories = async (dispatch) => {
  dispatch(fetchCatalogs());
  try {
    const {data} = await axios.get('/categories');
    dispatch(fetchCatalogsSuccess(data));
  } catch (error) {
    dispatch(fetchCatalogsFailure())
  }
}
const useFilterOnQueryChange = (value) => {
  const {dispatch} = useContext(CatalogsContext);
  

  useEffect(() => fetchCategories(dispatch),[dispatch])

  useEffect(() => { 
  dispatch(filterCatalogs(value))
  },[dispatch, value])

}

export default useFilterOnQueryChange