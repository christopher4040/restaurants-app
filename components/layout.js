/* /components/Layout.js */
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Navbar,
  NavItem,
  NavLink,
  Button,
  Badge,
  NavbarBrand,
} from "reactstrap";
import AppContext from "./context";
import { logout } from "./auth";
import Cart from "../components/cart";

const Layout = (props) => {
  const title = "Restaurants";
  const { cart, user, setUser, totalItems } = useContext(AppContext);

  // Navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
        <script src="https://js.stripe.com/v3" />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Head>
      <header>
        <style jsx>
          {`
            h5 {
              color: white;
            }
          `}
        </style>
        <Navbar light style={{ borderBottom: "solid 1px rgba(0,0,0,.125)" }}>
          <Container>
            <NavbarBrand className="fw-bold" style={{color: "rgba(0, 0, 0, .6)"}} href="/">Restaurants</NavbarBrand>

            <NavItem className="ms-auto me-2 d-flex">
              <Button
                onClick={toggle}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  width: "100%",
                }}
              >
                <div>
                  <a>
                    <ion-icon
                      name="cart"
                      style={{
                        color: "rgba(0,0,0,.6)",
                        fontSize: "26px",
                        marginRight: "-16px",
                        marginTop: "4px",
                      }}
                    ></ion-icon>
                  </a>
                  <Badge
                    style={{
                      width: "0",
                      top: "-23px",
                      left: "4px",
                      position: "relative",
                      color: "rgba(0,0,0,.6)",
                    }}
                  >
                    {totalItems > 0 ? totalItems : " "}
                  </Badge>
                </div>
              </Button>
            </NavItem>
            <NavItem className="d-flex">
              {user ? (
                <span className="ms-1 me-3" style={{ color: "rgba(0, 0, 0, .6)" }}>
                  <b>{user.username}</b>
                </span>
              ) : (
                <Button className="p-0 mx-2" color="secondary" outline>
                  <NavLink style={{ color: "rgba(0, 0, 0, .6)" }} href="/login">
                    Log in
                  </NavLink>
                </Button>
              )}
            </NavItem>
            {user ? (null) : <span style={{ color: "rgba(0, 0, 0, .4)" }}>or</span>}
            <NavItem className="d-flex">
              {user ? (
                <Button className="p-0 mx-2" color="secondary">
                  <NavLink
                    style={{ color: "white" }}
                    href="/"
                    onClick={() => {
                      logout();
                      setUser(null);
                    }}
                  >
                    Logout
                  </NavLink>
                </Button>
              ) : (
                <Button className="p-0 mx-2" size="md">
                  <NavLink style={{ color: "white" }} href="/register">
                    Sign up
                  </NavLink>
                </Button>
                
              )}
            </NavItem>
            {/* <span style={{ color: "rgba(0, 0, 0, .4)" }}>or</span> */}
            
          </Container>
        </Navbar>
        <Cart toggle={toggle} isOpen={isOpen}></Cart>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
