import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useState } from "react";

export default function PaymentModal() {
  const [OpenModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!OpenModal);
  };
  return (
    <>
      <Button variant="contained" onClick={handleModal} sx={{ marginY: 2 }}>
        Check out
      </Button>

      <Dialog open={OpenModal} onClose={handleModal}>
        <DialogTitle>Check out</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column"}}>
          <FormControl margin="dense">
            <FormLabel>Name</FormLabel>
            <TextField
              placeholder="Name"
              type="text"
            />
          </FormControl>
          <FormControl margin="dense">
            <FormLabel>Email</FormLabel>
            <TextField
              placeholder="Email"
              type="text"
            />
          </FormControl>
          <FormControl margin="dense">
            <FormLabel>Addres</FormLabel>
            <TextField
              placeholder="Addres"
              type="text"
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={handleModal}>
            Cancel
          </Button>
          <Button variant="outlined" color="primary" onClick={handleModal}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
