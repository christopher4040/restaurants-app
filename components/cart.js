import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Button, Card, CardBody, CardTitle, Badge, Collapse, Alert } from "reactstrap";
import AppContext from "./context"
import Link from "next/link"
// we can pass cart data in via props method 
// the alternative is using useContext as below
function Cart() {
  let isAuthenticated = true;
  let {cart,addItem,removeItem} = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  //const [cartA, setCartA] = useState({cart})
  //cart = value.cart;
  //console.log('props:'+ JSON.stringify(value));
  console.log(`in CART: ${JSON.stringify(cart)}`)
  
  //   problem is that cart may not be set
  const router = useRouter();
  console.log(`Router Path: ${JSON.stringify(router)}`)
  const renderItems = ()=>{
  let {items} = cart;
   console.log(`items: ${JSON.stringify(items)}`)
    if(items && items.length){
      var itemList = cart.items.map((item) => {
          if (item.quantity > 0) {
            return (
              <div
                className="items-one"
                style={{ marginBottom: 15 }}
                key={item.id}
              >
                <div>
                  <span id="item-price">&nbsp; ${item.price}</span>
                  <span id="item-name">&nbsp; {item.name}</span>
                </div>
                <div>
                  <Button
                    style={{
                      height: 25,
                      padding: 0,
                      width: 15,
                      marginRight: 5,
                      marginLeft: 10,
                    }}
                    onClick={() => addItem(item)}
                    color="link"
                  >
                    +
                  </Button>
                  <Button
                    style={{
                      height: 25,
                      padding: 0,
                      width: 15,
                      marginRight: 10,
                    }}
                    onClick={() => removeItem(item)}
                    color="link"
                  >
                    -
                  </Button>
                  <span style={{ marginLeft: 5 }} id="item-quantity">
                    {item.quantity}x
                  </span>
                </div>
              </div>
            );
          }
        })
        return itemList;
      }
    else {
        return (<div></div>)
    }
  }
const checkoutItems = ()=>{
  return (
    <div>
      <Badge style={{ width: 200, padding: 10 }} color="dark">
        <h5 style={{ fontWeight: 100, color: "gray" }}>Total:</h5>
        <h1 style={{ fontWeight: 600, color: "black" }}>${cart.total}</h1>
      </Badge>
          <Link href="/checkout/">
            <Button style={{ width: "60%" }} color="primary">
              <a>Order</a>
            </Button>
          </Link>
          <Button
    color="primary"
    onClick={toggle}
    style={{
      marginBottom: '1rem'
    }}
  >
    Toggle
  </Button>
  <Collapse horizontal isOpen={isOpen} >
    <Alert
      style={{
        width: '500px'
      }}
    >
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </Alert>
  </Collapse>
    </div>
  )}

// return Cart
  return (
    <div>
      <h1> Cart</h1>
      <Card style={{ padding: "10px 5px" }} className="cart">
        <CardTitle style={{ margin: 10 }}>Your Order:</CardTitle>
        <hr />
        <CardBody style={{ padding: 10 }}>
          <div style={{ marginBottom: 6 }}>
            <small>Items:</small>
          </div>
          <div>
            {renderItems()}
          </div>
          <div>
            {checkoutItems()}
          </div>
          
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
