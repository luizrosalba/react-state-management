import { ActionTypes } from "./Actions";

/// o estado inicial é o carrinho e a lista de produtos vazia 
const initialState = {
  cart: [],
  productsList: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_PRODUCTS:
      return {
        ...state,
        productsList: action.payload.products  
        /// guarda os produtos na productsList
      };
    case ActionTypes.CHECKOUT:
      return {
        ...state,
        cart: [] /// zera o carrinho 
      };
    case ActionTypes.ADD_TO_CART:
      const product = state.productsList.find(
        ({ id }) => id === action.payload.id
      );
      return {
        ...state,
        cart: [...state.cart, product]
      };
    default:
      return state;
  }
};

export default Reducer;
