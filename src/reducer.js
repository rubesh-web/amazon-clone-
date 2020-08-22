//all the logic for data layer

export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for intem adding
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //logic for removeing item from ShoppingBasketIcon
      return { state };

    default:
      return state;
  }
}

export default reducer;
