import { useQuery } from "@apollo/client";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Dishes from "../../components/dishes";
import { Row } from "reactstrap";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

function Restaurant() {
  const router = useRouter();
  const restaurantID = router.query.restaurantID;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  console.log(`URL: ${API_URL}`);
  const [query, setQuery] = useState("");
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache });

  const renderDishes = (restaurantID) => {
    return <Dishes restaurantID={restaurantID}></Dishes>
  };

  return (
    <ApolloProvider client={client}>
      <Row xs="3">{renderDishes(restaurantID)}</Row>
    </ApolloProvider>
  );
}

export default Restaurant;
