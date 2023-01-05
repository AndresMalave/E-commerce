import { Box, Typography } from "@mui/material";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import SearcherSection from "./components/SearcherSection";

function App() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Header />
      <SearcherSection />
      <ProductSection />
    </Box>
  );
}

export default App;
