import React, { useContext} from 'react';
import CatalogsContext from '../../context'
import useQueryString from '../../hooks/useUpdateQuery'

import useFilterOnQueryChange from '../../hooks/useFilterOnQueryChange'
import Input from '../Input';
import Card from '../Card';
import Loader from '../Loader'
import {
  Link
} from "react-router-dom"

import './catalog.scss'

 const Catalog = () => {
  const {state: {isLoading, filteredCatalogs}} = useContext(CatalogsContext);

  const [value, setValue] = useQueryString()
  useFilterOnQueryChange(value);

  const catalogs = filteredCatalogs;
  const hasLoadedCatalogs = catalogs.length > 0;
  return (
    <div className='c-catalog'>
      <Input value={value} onChange={e => setValue(e.target.value)}/>
      {isLoading && <Loader/>}
      {!isLoading && catalogs.length ? <div className='c-catalog__catalogs'>
      {hasLoadedCatalogs && catalogs.map(({id,name, category_image, category_key}) => {
        
        return <Link to={`/${category_key}`} key={id}>
        <Card> 
        <div className='description'>
          <p>{name}</p>
        </div>
        <div className='image'><img src={category_image} alt=""/></div>
      </Card>
        </Link>
      })}
      </div>: null}
    </div>
  )
}

export default Catalog