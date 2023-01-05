import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ProductsCard from "./ProductsCard";
import {
  reducerCart,
  productInitialState,
} from "../reducers/shoppingCartReducer";
import TYPES from "../reducers/actionTypes";
import { useReducer } from "react";
import ProductInCart from "./ProductInCart";

export default function ProductSection() {
  const [state, dispatch] = useReducer(reducerCart, productInitialState);

  const calculateTotalPriceCart = () => {
    dispatch({
      type: TYPES.CALCULATE_TOTAL_PRICE_CART,
    });
  };

  const addToCart = (id: number) => {
    console.log("producto agregado");
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id,
    });
    calculateTotalPriceCart();
    console.log(state);
  };

  const deleteProductFromCart = (id: number) => {
    dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id,
    });
    calculateTotalPriceCart();
  };

  return (
    <Container sx={{ paddingBottom: 6 }}>
      <Grid container spacing={2}>
        {state.products.map((product: any) => {
          return (
            <ProductsCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              addToCart={addToCart}
            />
          );
        })}
      </Grid>

      <Box width="400px">
        <Typography variant="h4" fontWeight="bold">
          Cart
        </Typography>

        <Box
          gap={2}
          sx={{ display: "flex", flexDirection: "column", paddingY: 3 }}
        >
          {state.cart.length === 0 && (
            <Typography>There are no products in the cart</Typography>
          )}

          {state.cart.map((productCart: any) => {
            return (
              <Box key={productCart.id + Math.random() * 50}>
                <ProductInCart
                  id={productCart.id}
                  name={productCart.name}
                  price={productCart.price}
                  quantity={productCart.quantity}
                  deleteProductFromCart={deleteProductFromCart}
                />
              </Box>
            );
          })}
        </Box>

        {state.totalPriceShoppingCart > 0 && (
          <Box>
            <Typography variant="h5">
              Total: {state.totalPriceShoppingCart}$
            </Typography>
            <Button variant="contained">Check out</Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}
