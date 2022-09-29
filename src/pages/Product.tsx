import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const Product = ({ type }: { type: string }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {type ? "Create Product" : "Edit Product"}
      </Typography>
      <Paper sx={{ width: "100%", py: "16px" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ display: "blocks", width: "16.66667%" }}
            >
              Image
            </Typography>
            {type === "create" ? (
              <Button variant="contained" component="label">
                Upload File
                <input type="file" hidden />
              </Button>
            ) : (
              <img
                src="https://images.unsplash.com/photo-1657664049360-66ca933f7a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1920&q=60"
                alt=""
                style={{
                  height: "100px",
                  width: "200px",
                  borderRadius: "10px",
                }}
              />
            )}
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ display: "blocks", width: "16.66667%" }}
            >
              Title
            </Typography>
            <TextField
              id="standard-basic"
              label="Enter new Title"
              variant="standard"
            />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ display: "blocks", width: "16.66667%" }}
            >
              Price
            </Typography>
            <TextField
              id="filled-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ display: "blocks", width: "16.66667%" }}
            >
              Description
            </Typography>
            <TextField
              label="Multiline Placeholder"
              placeholder="Enter new Description"
              multiline
            />
          </Stack>
          {type === "update" ? (
            <Stack
              direction="row"
              spacing={2}
              sx={{
                alignItems: "center",
              }}
            >
              <Button size="small" variant="contained" color="success">
                Save
              </Button>
              <Button
                variant="contained"
                component={RouterLink}
                to="/products"
                size="small"
              >
                Back
              </Button>
              <Button size="small" variant="contained" color="error">
                Delete
              </Button>
            </Stack>
          ) : (
            <Stack
              direction="row"
              spacing={2}
              sx={{
                alignItems: "center",
              }}
            >
              <Button size="small" variant="contained" color="success">
                Create
              </Button>
              <Button
                variant="contained"
                component={RouterLink}
                to="/products"
                size="small"
              >
                Back
              </Button>
            </Stack>
          )}
        </Container>
      </Paper>
    </Box>
  );
};

export default Product;
