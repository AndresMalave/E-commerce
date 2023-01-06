import { Box, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";
import { IData } from "../interfaces/IData";
import zIndex from "@mui/material/styles/zIndex";

export default function Header(data: IData) {
  return (
    <>
      <Box
        sx={{
          background: "rgba(0,0,0,0.9)",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          height: "50px",
          zIndex: 100
        }}
      >
        <Cart state={data.state} dispatch={data.dispatch} />
      </Box>

      <Box
        sx={{
          background: "#c9c9c9",
          height: "200px",
          paddingTop: "50px",
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
