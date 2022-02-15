import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './ShopPage.styles.scss'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import Collection from '../collection/Collection'
import { useParams } from 'react-router-dom'

const Shop = () =>{
   const params = useParams()
   return(
      <div className='shop-page'> 
         <Routes>        
            <Route path='/' element={<CollectionsOverview/>}>
              <Route path='/:collectionId' element={<Collection/>} />
            </Route>
         </Routes>      
      </div>
     )
  }  

export default Shop

