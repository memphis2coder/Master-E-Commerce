import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// find the items by key
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

// finds the right collection
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  )
) 