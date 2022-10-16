import { gql, useQuery } from "@apollo/client";
import Dishes from "./dishes";
import { useContext, useState } from "react";

import AppContext from "./context";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

function RestaurantList(props) {
  const [restaurantID, setRestaurantID] = useState(0);
  const { cart } = useContext(AppContext);
  const [state, setState] = useState(cart);
  const [offcanvas, setOffcanvas] = useState(false);
  const handleCloseOffcanvas = () => setOffcanvas(false);
  const handleShowOffcanvas = () => setOffcanvas(true);
  const toggleOffcanvas = () => setOffcanvas(!offcanvas);
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants}`);
  // data.restaurants.filter((res) => res.id === restaurantID ? console.log(res.name): 'No rest')

  let searchQuery =
    data.restaurants.filter((res) => {
      return res.name.toLowerCase().includes(props.search);
    }) || [];

  let restId = searchQuery[0] ? searchQuery[0].id : null;
  let rest = data.restaurants.filter((res) => res.id === restaurantID)

  // definet renderer for Dishes
  const renderDishes = (restaurantID) => {
    return <Dishes restId={restaurantID}> </Dishes>;
  };

  if (searchQuery.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col xs="12" sm="6" lg="4" key={res.id}>
        <Card
          style={{
            margin: "10px auto 10px auto",
            minWidth: "245px",
            maxWidth: "300px",
          }}
        >
          <CardImg
            top={true}
            style={{ height: 200 }}
            src={`http://localhost:1337` + res.image.url}
          />
          {/* <CardBody>
            <CardText>{res.description}</CardText>
          </CardBody> */}
          <div className="card-footer text-center">
            <Button
              color="primary"
              className="w-75"
              onClick={() => {
                setRestaurantID(res.id), handleShowOffcanvas();
              }}
            >
              {res.name}
            </Button>
            <Offcanvas
              show={offcanvas}
              onHide={handleCloseOffcanvas}
              placement={"bottom"}
              style={{height: "80%"}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>{rest.id}</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Row xs='3'>
          {renderDishes(restaurantID)}
        </Row>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Card>
      </Col>
    ));

    return (
      <Container>
        <Row xs="3">{restList}</Row>

        {/* <Row xs='3'>
          {renderDishes(restaurantID)}
        </Row> */}
      </Container>
    );
  } else {
    return <h1> No Restaurants Found</h1>;
  }
}
export default RestaurantList;
