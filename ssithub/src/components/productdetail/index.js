import {
    Dialog,
    DialogTitle,
    Slide,
    Box,
    IconButton,
    DialogContent,
    Typography,
    Button,
    Stack,
  } from "@mui/material";

  function SlideTransition(props) {
    return <Slide direction="down" {...props} />;
  }

  export default function ProductDetail({ open, onClose, product }) {
    return (
        <Dialog
          TransitionComponent={SlideTransition}
          variant="permanant"
          open={open}
          fullScreen
        >
          <DialogTitle
            sx={{
              background: Colors.secondary,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              >
              {product.name}
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            </DialogTitle>
            </Dialog>
    )
        }