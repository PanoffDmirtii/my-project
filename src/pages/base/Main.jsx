import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { UiComponentsPage } from "../content/ui/UiComponentsPage";
import { CardPage } from "../content/ui/CardPage/CardPage";
import {LINKS} from "../../constans"

export const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <Redirect to={LINKS.UI.UI_BASE_PAGE} />
        </Route>
        <Route exact path={LINKS.UI.UI_BASE_PAGE} component={UiComponentsPage} />
        <Route path={LINKS.UI.CARDS_PAGE} component={CardPage} />

        <Route path="/test1" render={() => <h1>dsfsdf</h1>} />
      </Switch>
    </main>
  );
};
