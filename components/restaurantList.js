import { gql, useQuery } from "@apollo/client";
import Dishes from "./dishes";
import { useContext, useState } from "react";
import DishModal from "./dishMotal";
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
import Modal from "react-bootstrap/Modal";

function RestaurantList(props) {
  const [restaurantID, setRestaurantID] = useState(0);
  const { cart } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  function handleShow() {
    setShow(true);
  }
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

  let searchQuery =
    data.restaurants.filter((res) => {
      return res.name.toLowerCase().includes(props.search);
    }) || [];

  const closeBtn = (
    <Button
      className="close fs-2"
      style={{
        backgroundColor: "transparent",
        border: "none",
        color: "rgb(33, 37, 41)",
        fontSize: "28px",
        alignItems: "center",
        height: "30px",
        display: "flex",
      }}
      onClick={toggle}
      type="button"
    >
      &times;
    </Button>
  );

  let restId = searchQuery[0] ? searchQuery[0].id : null;
  let rest = data.restaurants.filter((res) => res.id === restaurantID);

  // definet renderer for Dishes
  const renderDishes = (restaurantID) => {
    return <Dishes restId={restaurantID}> </Dishes>;
  };

  if (searchQuery.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col style={{ textAlign: "center" }} xs="12" sm="6" lg="4" key={res.id}>
        <Button
          onClick={() => {
            setRestaurantID(res.id), handleShow();
          }}
          className="p-0 border-0"
        >
          <Card
            color="light"
            style={{
              minWidth: "245px",
              maxWidth: "275px",
            }}
          >
            <CardImg
              top={true}
              style={{ height: 200 }}
              src={`http://localhost:1337` + res.image.url}
            />

            <div className="card-footer text-center">
              <Button
                color="primary"
                className="w-75"
                onClick={() => {
                  setRestaurantID(res.id), toggle();
                }}
              >
                {res.name}
              </Button>

              {/* <Modal isOpen={dishesModal} toggle={() => handleShowModal(false)}>
                <ModalHeader toggle={() => handleShowModal(false)} close={closeBtn}>
                  {rest.length != 0 ? rest[0].name : ""}
                </ModalHeader>
                <ModalBody>
                  <span style={{ color: "rgba(0,0,0,.6)" }}>
                    {rest.length != 0 ? rest[0].description : ""}
                  </span>
                  <br />
                  <br />
                  <Row xs="3">{renderDishes(restaurantID)}</Row>
                </ModalBody>
              </Modal> */}
            </div>
          </Card>
        </Button>
      </Col>
    ));

    return (
      <Container>
        <Row xs="3">{restList}</Row>
        <br />
        <br />
        <br />
        <Row xs="3">{renderDishes(restaurantID)}</Row>
      </Container>
    );
  } else {
    return <h1> No Restaurants Found</h1>;
  }
}
export default RestaurantList;
