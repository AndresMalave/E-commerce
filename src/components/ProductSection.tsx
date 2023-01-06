import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ProductsCard from "./ProductsCard";
import {
  reducerCart,
  productInitialState,
} from "../reducers/shoppingCartReducer";
import TYPES from "../reducers/actionTypes";
import { useReducer } from "react";
import ProductInCart from "./ProductInCart";
import { IData } from "../interfaces/IData";

export default function ProductSection(data: IData) {

  const calculateTotalPriceCart = () => {
    data.dispatch({
      type: TYPES.CALCULATE_TOTAL_PRICE_CART,
    });
  };

  const addToCart = (id: number) => {
    console.log("producto agregado");
    data.dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id,
    });
    calculateTotalPriceCart();
    console.log(data.state);
  };

  const deleteProductFromCart = (id: number) => {
    data.dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id,
    });
    calculateTotalPriceCart();
  };

  return (
    <Container sx={{ paddingBottom: 6 }}>
      <Grid container spacing={2}>
        {data.state.products.map((product: any) => {
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
    </Container>
  );
}
