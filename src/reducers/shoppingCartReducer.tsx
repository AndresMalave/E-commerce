import TYPES from "./actionTypes";

export const productInitialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 20,
    },
    {
      id: 2,
      name: "Product 2",
      price: 10,
    },
    {
      id: 3,
      name: "Product 3",
      price: 15,
    },
    {
      id: 4,
      name: "Product 4",
      price: 25,
    },
    {
      id: 5,
      name: "Product 5",
      price: 100,
    },
    {
      id: 6,
      name: "Product 6",
      price: 50,
    },
    {
      id: 7,
      name: "Product 7",
      price: 55,
    },
    {
      id: 8,
      name: "Product 8",
      price: 5,
    },
  ],
  quantity: 1,
  cart: [],
  totalPriceCart: 0,
};

export const reducerCart = (state: any, action: any) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newProduct = state.products.find(
        (product: any) => product.id === action.payload
      );

      let itemInCart = state.cart.find(
        (item: any) => item.id === newProduct.id
      );

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item: any) =>
              item.id === newProduct.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newProduct, quantity: 1 }] };
    }
    case TYPES.DELETE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(
          (product: any) => product.id !== action.payload
        ),
      };
    }
    case TYPES.CALCULATE_TOTAL_PRICE_CART: {
      return {
        ...state,
        totalPriceShoppingCart: state.cart.reduce(
          (previousValue: any, product: any) =>
            previousValue + product.price * product.quantity,
          0
        ),
      };
    }
    default:
      return state;
  }

  throw Error("Unknow action: " + action.type);
};
