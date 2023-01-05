import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import OilImg from "../assets/oil.jpg";

interface IProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  deleteProductFromCart: any;
}

export default function ProductInCart(props: IProps) {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box
          component="img"
          src={OilImg}
          sx={{ height: "100px", width: "100px" }}
        />
        <Box sx={{ flexDirection: "column", paddingX: 2, width: "150px" }}>
          <Typography variant="h5">{props.name}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Qty: {props.quantity}</Typography>
            <Typography>{props.price} $</Typography>
          </Box>
        </Box>
        <IconButton
          onClick={() => props.deleteProductFromCart(props.id)}
          sx={{ color: "#000" }}
        >
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Box>
    </>
  );
}
