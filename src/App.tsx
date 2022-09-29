import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Users from "./pages/Users";
import Products from "./pages/Products";
import SideBar from "./components/SideBar";
import Container from "@mui/material/Container";
import { Box, Stack } from "@mui/material";
import Product from "./pages/Product";
import { useToggle } from "./hooks/useToggle";

function App() {
  const [openMenu, toggle] = useToggle(false);
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar openMenu={openMenu} toggle={toggle} />
      <Stack maxWidth="xl" sx={{ width: `${openMenu ? "80vw" : "95vw"}` }}>
        <Header openMenu={openMenu} />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<Product type="update" />} />
            <Route path="product/create" element={<Product type="create" />} />
          </Routes>
        </Container>
      </Stack>
    </Box>
  );
}

export default App;
