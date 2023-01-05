import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

// Local
import SearchIcon from "@mui/icons-material/Search";

export default function SearcherSection() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ color: "#000", paddingY: 3 }}
    >
      <Typography variant="h6" fontWeight={500} sx={{ paddingBottom: 2 }}>
        Browse the Catalogue
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          width: "80%",
        }}
      >
        <TextField
          placeholder="Search for products..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton edge="end">
                  <SearchIcon fontSize="large" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ background: "#fff", borderRadius: "5px", maxWidth: "80%" }}
          fullWidth
        />
      </Box>
    </Stack>
  );
}
