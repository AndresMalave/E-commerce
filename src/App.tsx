import { Box } from "@mui/material";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import SearcherSection from "./components/SearcherSection";
import { useReducer } from "react";
import { reducerCart, productInitialState } from "./reducers/shoppingCartReducer";

function App() {
  const [state, dispatch] = useReducer(reducerCart, productInitialState);
  return (
    <Box sx={{ height: "100vh" }}>
      <Header state={state} dispatch={dispatch} />
      <SearcherSection />
      <ProductSection state={state} dispatch={dispatch} />
    </Box>
  );
}

export default App;
