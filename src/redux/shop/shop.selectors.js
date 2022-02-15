import { createSelector } from "reselect";

const shopSelector = state => state.shop

export const selectShopCollections = createSelector(
    [shopSelector], shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(   // [hats, sneakers,jackets, mens, womens].map()
    [selectShopCollections], collections => Object.keys(collections).map( key => collections[key] )
)

export const selectShopCollection = collectionUrlParam =>{
    createSelector(
        [selectShopCollections], collections => collections[collectionUrlParam]
    )
}