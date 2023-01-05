import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useReducer, useState } from "react";
import ProductInCart from "./ProductInCart";
import {
  reducerCart,
  productInitialState,
} from "../reducers/shoppingCartReducer";
import TYPES from "../reducers/actionTypes";

export default function Cart() {
  const [OpenModal, setOpenModal] = useState(false);
  const [state, dispatch] = useReducer(reducerCart, productInitialState);

  const handleModal = () => {
    setOpenModal(!OpenModal);
  };

  const calculateTotalPriceCart = () => {
    dispatch({
      type: TYPES.CALCULATE_TOTAL_PRICE_CART,
    });
  };

  const deleteProductFromCart = (id: number) => {
    dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id,
    });
    calculateTotalPriceCart();
  };

  return (
    <>
      <IconButton onClick={handleModal} sx={{ color: "#000" }}>
        <ShoppingCartIcon fontSize="large" />
      </IconButton>

      <Drawer anchor="right" open={OpenModal} onClose={handleModal}>
        <Container>
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
      </Drawer>
    </>
  );
}
