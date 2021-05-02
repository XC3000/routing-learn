import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { FirstPage } from "./pages/FirstPage";
import { SecondPage } from "./pages/SecondPage";
import { ThirdPage } from "./pages/ThirdPage";
import { PageNotFound } from "./pages/PageNotFound";
import { Items } from "./pages/Items";
import { Item } from "./pages/Item";
import { PrivatePage } from "./pages/PrivatePage";

export const Routes = () => {
  const isUserLoggedIn = false;
  return (
    <TransitionGroup>
      <CSSTransition classNames={"anim"} timeout={1000}>
        <Switch>
          <Route path="/" exact={true}>
            <FirstPage />
          </Route>
          <Route path="/second" exact={true} component={SecondPage} />
          <Route path="/third" component={ThirdPage} />
          <Route path="/items" component={Items} exact={true} />
          <Route path="/items/:userId" component={Item} exact={true} />
          <Route
            path="/private"
            render={() => {
              if (isUserLoggedIn) {
                return <PrivatePage />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Redirect to="/second" from="/third" />
          <Route component={PageNotFound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
