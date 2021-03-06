import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { store } from "./redux/store";

import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Homepage } from "./components/views/Homepage/Homepage";
import { AllOffers } from "./components/views/AllOffers/AllOffers";
import { Region } from "./components/views/Region/Region";
import { OfferPage } from "./components/views/OfferPage/OfferPage";
import { Cart } from "./components/views/Cart/Cart";
import { NotFound } from "./components/views/NotFound/NotFound";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#f2c460" },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/offers" component={AllOffers} />
              <Route exact path="/offers/:regionId" component={Region} />
              <Route
                exact
                path="/offers/:regionId/:offerId"
                component={OfferPage}
              />
              <Route exact path="/cart" component={Cart} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
