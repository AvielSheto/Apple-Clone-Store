import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Components
import Customers from "././Components/customers/Customers";
import EditCustomer from "././Components/customers/EditCustomer";
import EditProduct from "./Components/Products/EditProduct";
import Menu from "./Components/menu/Menu";
import Products from "./Components/Products/Products";
import Purchased from "./Components/Purchases/Purchases";
import SignIn from "./Components/sign/SignIn";
import SignUp from "./Components/sign/SignUp";
import Loading from "./Components/sign/Loading";
import '././Components/menu/menu_style.scss';
// mui
import AppleIcon from "@mui/icons-material/Apple";
import Avatar from '@mui/material/Avatar';
// bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// firebase
import { auth } from "././firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <BrowserRouter >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container >
            <Navbar.Toggle style={{ border: "none" }} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" className="p-2 pt-1"><AppleIcon /></Nav.Link>
                <Nav.Link href="/products" className="p-2 pt-1">Products</Nav.Link>
                <Nav.Link href="/customers" className="p-2 pt-1">Costumers</Nav.Link>
                <Nav.Link href="/purchased" className="p-2 pt-1">Purchases</Nav.Link>
                <NavDropdown className="ps-2 " title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/signIn">Sign in</NavDropdown.Item>
                  <NavDropdown.Item href="/signUp">Sign Up</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>log out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              {user &&
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar sx={{ m: 1, bgcolor: 'info.main' }}></Avatar>
                  <Nav style={{ color: "white" }}>{user?.email}</Nav>
                </div>
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="" element={<Menu />} />
          <Route path="products" element={<Products />} />
          <Route path="editProduct/:id" element={<EditProduct />} />
          <Route path="customers" element={<Customers />} />
          <Route path="editCustomer/:id" element={<EditCustomer />} />
          <Route path="purchased" element={<Purchased />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
