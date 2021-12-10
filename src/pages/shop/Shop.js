import React from 'react'
import SHOP_DATA from '../../shop.data'
import CollectionPrev from '../../components/CollectionPrev'
import './ShopPage.styles.scss'

class Shop extends React.Component{

    state = {
        collections: SHOP_DATA
    }

    render(){

        const {collections} = this.state
        return(
            <div>
                {collections.map(collection => (
                    <CollectionPrev key={collection.id} title={collection.title} items={collection.items}/>
                ))}
            </div>
        )
    }
}

export default Shop