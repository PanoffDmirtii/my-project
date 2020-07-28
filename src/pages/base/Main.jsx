import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { UiComponentsPage } from "../content/ui/UiComponentsPage";

export const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Redirect to="/ui" />
        </Route>
        <Route path="/ui" component={UiComponentsPage} />
        <Route path="/test1" render={() => <h1>dsfsdf</h1>} />
      </Switch>
    </div>
  );
};
