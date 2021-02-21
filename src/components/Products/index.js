import React, { useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from '../../axios'
import CatalogsContext from '../../context';
import {fetchProducts, favoriteProduct} from '../../reducers/actions'
import Card from '../Card';
import Loader from '../Loader'
import { IoHeart, IoHeartOutline } from "react-icons/io5";

import './products.scss'

 const Catalog = () => {
  const {state: {isLoading, products}, dispatch} = useContext(CatalogsContext);
const {product} = useParams();
useEffect(() => {
  axios.get(`/products?category=${product}`)
  .then(({data}) => dispatch(fetchProducts(data))); 
  
}, [dispatch, product])
  const hasLoadedCatalogs = products.length > 0;
  return (
    <div className='c-products'>
      {isLoading && <Loader/>}
      {!isLoading && products.length ? <div className='c-products__catalogs'>
      {hasLoadedCatalogs && products.map(({id,name, image, liked}) => {  
        return <Card key={id}> 
        <div className='image'><img src={image} alt=""/></div>
        <div className='description'>
          <p>{name}</p>
          {liked? <IoHeart onClick={() => dispatch(favoriteProduct(id))} 
            className={`c-products__heart c-products__heart--red`} 
            /> 
          : <IoHeartOutline 
            onClick={() => dispatch(favoriteProduct(id))} 
            className={`c-products__heart`}/>}
        </div>
      </Card>
      })}
      </div>: null}
    </div>
  )
}

export default Catalog