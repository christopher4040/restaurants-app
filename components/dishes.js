import { gql, useQuery, q } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import AppContext from "./context";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";


function Dishes({ restaurantID }) {
  

  const GET_RESTAURANT_DISHES = gql`
    query ($id: ID!) {
      restaurant(id: $id) {
        id
        name
        dishes {
          id
          name
          description
          price
          image {
            url
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restaurantID },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const { addItem } = useContext(AppContext);

  const router = useRouter();

  let restaurant = data.restaurant;

  if (restaurantID > 0) {
    return (
      <>
      
          {restaurant.dishes.map((res) => (
            <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
              <Card style={{ margin: "0 10px" }}>
                <CardImg
                  top={true}
                  style={{ height: 150, width: 150 }}
                  src={`http://chma-restaurant-app.s3-website.us-east-2.amazonaws.com${res.image.url}`}
                />
                <CardBody>
                  <CardTitle>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Button outline color="primary" onClick={() => addItem(res)}>
                    + Add To Cart
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
      </>
    );
  } else {
    return <h1> No Dishes</h1>;
  }
}
export default Dishes;
