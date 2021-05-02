import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectFavorites = createSelector([selectShop], (shop) => shop.favorites);

export const selectShopItemsCount = createSelector([selectFavorites], (favorites) => {
    let acc = 0;
    for (let i = 0; i < favorites.length; i++) {
        const currentValue = favorites[i].count;
        acc += currentValue;
    }
    return acc;
});
