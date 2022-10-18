import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  
} from "reactstrap";
import AppContext from "./context";
import Link from "next/link";
import Checkout from "../pages/checkout";
// we can pass cart data in via props method
// the alternative is using useContext as below
function DishModal(props) {
  // let isAuthenticated = true;
  // let { cart, addItem, removeItem, totalItems } = useContext(AppContext);

  const toggle = props.toggle;
  const restaurant = props.restaurant;

  // const closeBtn = (
  //   <Button
  //     className="close fs-2"
  //     style={{
  //       backgroundColor: "transparent",
  //       border: "none",
  //       color: "rgb(33, 37, 41)",
  //       fontSize: "28px",
  //       alignItems: "center",
  //       height: "30px",
  //       display: "flex",
  //     }}
  //     onClick={toggle}
  //     type="button"
  //   >
  //     &times;
  //   </Button>
  // );

  // return Cart
  return (
    <div>
      <Modal
        style={
          {
            // position:"fixed",
            // top:"auto",
            // right:"auto",
            // left:"auto",
            // bottom:"0"
          }
        }
        isOpen={props.isOpen}
        toggle={toggle}
        {...props}
      >
        <ModalHeader toggle={toggle}>
          {restaurant.length != 0 ? restaurant[0].name : ""}
        </ModalHeader>
        <ModalBody>
          <span style={{ color: "rgba(0,0,0,.6)" }}>
            {restaurant.length != 0 ? restaurant[0].description : ""}
          </span>
          <br />
          <br />
          <Row xs="3">{props.renderDishes(restaurant.id)}</Row>
        </ModalBody>
      </Modal>
      <style jsx>{`
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>
    </div>
  );
}
export default DishModal;
