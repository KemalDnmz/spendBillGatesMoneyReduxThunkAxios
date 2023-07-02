import { allTypes } from "../actionTypes";

const initialState = {
  shopItems: [],
  remain: 100000000000,
  error: null,
};

export const moneyChange = (state = initialState, action) => {
  switch (action.type) {
    case allTypes.moneyTypes.FETCH_REQUEST:
      return {
        ...state,
        shopItems: [],
        remain: 100000000000,
        error: null,
      };
    case allTypes.moneyTypes.FETCH_SUCCESS:
      return {
        ...state,
        shopItems: action.payload,
        error: null,
      };

    case allTypes.moneyTypes.MONEY_CHANGE:
      const updatedShopItems = state.shopItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: parseInt(action.payload.value),
          };
        }
        return item;
      });

      let total = 0;
      updatedShopItems.forEach((item) => {
        total += Number(item.price) * Number(item.quantity);
      });

      const remain = 100000000000 - total;

      return {
        ...state,
        shopItems: updatedShopItems,
        total,
        remain,
      };

    case allTypes.moneyTypes.FETCH_ERROR:
      return {
        ...state,
        shopItems: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
