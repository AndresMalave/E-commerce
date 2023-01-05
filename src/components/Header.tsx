import { Box, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          background: "#b6b6b6",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Cart />
      </Box>

      <Box
        sx={{
          background: "#c9c9c9",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "50px" }}>Jurassic Store</Typography>
      </Box>
    </>
  );
}
