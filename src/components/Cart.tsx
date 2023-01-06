import {
  Box,
  Container,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";

import ProductInCart from "./ProductInCart";
import TYPES from "../reducers/actionTypes";
import { IData } from "../interfaces/IData";
import PaymentModal from "./PaymentModal";
import { useState } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Cart(data: IData) {
  const [OpenDrawer, setOpenDrawer] = useState(false);

  const handleDrawer = () => {
    setOpenDrawer(!OpenDrawer);
  };

  const calculateTotalPriceCart = () => {
    data.dispatch({
      type: TYPES.CALCULATE_TOTAL_PRICE_CART,
    });
  };

  const deleteProductFromCart = (id: number) => {
    data.dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id,
    });
    calculateTotalPriceCart();
  };

  return (
    <>
      <IconButton onClick={handleDrawer} sx={{ color: "#fff" }}>
        <ShoppingCartIcon fontSize="large" />
      </IconButton>

      <Drawer anchor="right" open={OpenDrawer} onClose={handleDrawer}>
        <Container>
          <Box width="400px">

            <Box sx={{ display: "flex", flexDirection: "row", paddingTop: 2}}>
            <ArrowBackIosIcon fontSize="large" onClick={handleDrawer} sx={{ cursor: "pointer"}} />
            <Typography variant="h4" fontWeight="bold">
              Cart
            </Typography>
            </Box>

            <Box
              gap={2}
              sx={{ display: "flex", flexDirection: "column", paddingY: 3 }}
            >
              {data.state.cart.length === 0 && (
                <Typography>There are no products in the cart</Typography>
              )}

              {data.state.cart.map((productCart: any) => {
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

            {data.state.totalPriceShoppingCart > 0 && (
              <Box>
                <Typography variant="h5">
                  Total: {data.state.totalPriceShoppingCart}$
                </Typography>
                <PaymentModal />
              </Box>
            )}
          </Box>
        </Container>
      </Drawer>
    </>
  );
}
