import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/product" component={Dashboard} />
        <Route path="/cart" component={CartDetail} />
      </Switch>
    </Container>
  );
}

export default App;
