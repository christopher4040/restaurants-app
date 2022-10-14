/* /components/Layout.js */
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem, Button, Badge } from "reactstrap";
import AppContext from "./context";
import { logout } from "./auth";
import Cart from "../components/cart";

const Layout = (props) => {
  const title = "Restaurants";
  const {cart, user, setUser } = useContext(AppContext);

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
            a {
              color: white;
            }
            a:hover {
              color: grey;
            }
            h5 {
              color: white;
              padding-top: 11px;
            }
          `}
        </style>
        <Nav className="navbar navbar-dark bg-dark ps-3">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Restaurants</a>
            </Link>
          </NavItem>

          <NavItem className="ms-auto px-2 py-2">
            <Button
              onClick={toggle}
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <a>
                {/* <Badge style={{color: "grey"}}>
                  1
                </Badge> */}

                <ion-icon
                  name="cart"
                  style={{ color: "white", fontSize: "24px", marginRight: "-16px", marginTop: "4px" }}
                ></ion-icon>
              </a>
            </Button>
            <Badge style={{width: "0", top: "-11px", left: "-3px", position: "relative"}} color="white">
                {cart.items.length}
              </Badge>
          </NavItem>

          <NavItem>
            {user ? (
              <h5>{user.username}</h5>
            ) : (
              <Link href="/register">
                <a className="nav-link">Sign up</a>
              </Link>
            )}
          </NavItem>
          <NavItem>
            {user ? (
              <Link href="/">
                <a
                  className="nav-link"
                  onClick={() => {
                    logout();
                    setUser(null);
                  }}
                >
                  Logout
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a className="nav-link">Sign in</a>
              </Link>
            )}
          </NavItem>
        </Nav>
        <Cart toggle={toggle} isOpen={isOpen}></Cart>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
