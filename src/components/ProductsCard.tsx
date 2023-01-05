import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import OilImg from "../assets/oil.jpg";

interface IProps {
  id: number;
  name: string;
  price: number;
  addToCart: any;
}

export default function ProductsCard(props: IProps) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{ marginY: 2, display: "flex", justifyContent: "center" }}
    >
      <Card sx={{ width: "300px", maxWidth: "400px" }}>
        <CardActionArea>
          <CardMedia component="img" height="250" src={OilImg} />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {props.name}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" color="text.secondary">
              {props.price} $
            </Typography>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => props.addToCart(props.id)}
            >
              Add to cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
