import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import initialState from "./initialState";
import { reducer as offersReducer } from "./offersRedux";
import { reducer as regionsReducer } from "./regionsRedux";
import { reducer as bookingsReducer } from "./bookingsRedux";

// define reducers
const reducers = {
  offers: offersReducer,
  regions: regionsReducer,
  bookings: bookingsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == "undefined") {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
