import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Table
} from "reactstrap";
import AppContext from "./context";
import Link from "next/link";
import Checkout from "../pages/checkout";
// we can pass cart data in via props method
// the alternative is using useContext as below
function Cart(props) {
  let isAuthenticated = true;
  let { cart, addItem, removeItem } = useContext(AppContext);
  const [state, setState] = useState({ cart: cart });
  let [totalItems, setTotalItems] = useState(0);

  const toggle = props.toggle;

  // addItem = (item) => {
  //   let { items } = state.cart;
  //   //check for item already in cart
  //   //if not in cart, add item if item is found increase quanity ++
  //   let foundItem = true;
  //   if (items.length > 0) {
  //     foundItem = items.find((i) => i.id === item.id);

  //     if (!foundItem) foundItem = false;
  //   } else {
  //     foundItem = false;
  //   }
  //   console.log(`Found Item value: ${JSON.stringify(foundItem)}`);
  //   // if item is not new, add to cart, set quantity to 1
  //   if (!foundItem) {
  //     //set quantity property to 1

  //     let temp = JSON.parse(JSON.stringify(item));
  //     temp.quantity = 1;
  //     var newCart = {
  //       items: [...state.cart.items, temp],
  //       total: state.cart.total + item.price,
  //     };
  //     setState({ cart: newCart });
  //     console.log(`Total items: ${JSON.stringify(newCart)}`);
  //   } else {
  //     // we already have it so just increase quantity ++
  //     console.log(`Total so far:  ${state.cart.total}`);
  //     newCart = {
  //       items: items.map((item) => {
  //         if (item.id === foundItem.id) {
  //           return Object.assign({}, item, { quantity: item.quantity + 1 });
  //         } else {
  //           return item;
  //         }
  //       }),
  //       total: state.cart.total + item.price,
  //     };
  //   }
  //   setState({ cart: newCart }); // problem is this is not updated yet
  //   setTotalItems((totalItems += 1));
  //   console.log(`state reset to cart:${JSON.stringify(state)}`);
  // };
  // removeItem = (item) => {
  //   let { items } = state.cart;
  //   //check for item already in cart
  //   const foundItem = items.find((i) => i.id === item.id);
  //   if (foundItem.quantity > 1) {
  //     var newCart = {
  //       items: items.map((item) => {
  //         if (item.id === foundItem.id) {
  //           return Object.assign({}, item, { quantity: item.quantity - 1 });
  //         } else {
  //           return item;
  //         }
  //       }),
  //       total: state.cart.total - item.price,
  //     };
  //     //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
  //   } else {
  //     // only 1 in the cart so remove the whole item
  //     console.log(`Try remove item ${JSON.stringify(foundItem)}`);
  //     const index = items.findIndex((i) => i.id === foundItem.id);
  //     items.splice(index, 1);
  //     var newCart = { items: items, total: state.cart.total - item.price };
  //   }
  //   setTotalItems((totalItems -= 1));
  //   setState({ cart: newCart });
  // };

  

  //const [cartA, setCartA] = useState({cart})
  //cart = value.cart;
  //console.log('props:'+ JSON.stringify(value));
  console.log(`in CART: ${JSON.stringify(cart)}`);

  //   problem is that cart may not be set
  const router = useRouter();
  console.log(`Router Path: ${JSON.stringify(router)}`);
  const renderItems = () => {
    let { items } = cart;
    console.log(`items: ${JSON.stringify(items)}`);
    console.log(`Total Items: ${totalItems}`);
    if (items && items.length) {
      var itemList = cart.items.map((item) => {
        if (item.quantity > 0) {
          return (
            <>
              <Table className="m-0">
                <tbody style={{ verticalAlign: "middle" }}>
                  <tr key={item.id}>
                    <td style={{ width: "0" }}>
                      <img
                        height={64}
                        src={`http://chma-restaurant-app.s3-website.us-east-2.amazonaws.com/` + item.image.url}
                      ></img>
                    </td>
                    <td>
                      <span id="item-name">&nbsp; {item.name}</span>

                      <br></br>
                      <span>&nbsp; Qty:</span>
                      <Button
                        style={{
                          height: 30,
                          padding: 0,
                          width: 20,
                          marginRight: 5,
                          marginLeft: 10,
                          fontSize: 18,
                        }}
                        onClick={() => removeItem(item)}
                        color="outline-secondary"
                      >
                        -
                      </Button>
                      <span
                        style={{ marginLeft: 5, fontSize: 18 }}
                        id="item-quantity"
                      >
                        {item.quantity}
                      </span>
                      <Button
                        style={{
                          height: 30,
                          padding: 0,
                          width: 20,
                          marginRight: 5,
                          marginLeft: 10,
                          fontSize: 18,
                        }}
                        onClick={() => addItem(item)}
                        color="outline-secondary"
                      >
                        +
                      </Button>
                    </td>
                    <td style={{ textAlign: "end" }}>
                      <span
                        style={{ marginLeft: 5, fontSize: 18 }}
                        id="item-quantity"
                      >
                        ${item.price * item.quantity}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </>
          );
        }
      });
      return itemList;
    } else {
      return <div></div>;
    }
  };
  const checkoutItems = () => {
    return (
      <div>
        <Table className="my-4">
          <tbody style={{ verticalAlign: "middle", fontSize: "18px" }}>
            <tr key="total-price">
              <td style={{ width: "112px" }}></td>
              <td>
                <b>
                  <span>&nbsp;Total Price:</span>
                </b>
              </td>
              <td style={{ textAlign: "end" }}>
                <b>
                  <span>&nbsp;${cart.total}</span>
                </b>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="mt-5">
          <Link href="/checkout/">
            <Button style={{ width: "100%" }} color="primary" onClick={toggle}>
              <a>Checkout</a>
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  // return Cart
  return (
    <div>
     
          <Card
            style={{ padding: "10px 5px", border: "none" }}
            className="cart"
          >
            <CardTitle style={{ margin: 10, fontSize: 18 }}>
              Order details:
            </CardTitle>
            <CardBody style={{ padding: 10 }}>
              <div>{renderItems()}</div>
              <div>{checkoutItems()}</div>

              {console.log(`Router Path: ${router.asPath}`)}
            </CardBody>
          </Card>
        
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
export default Cart;
