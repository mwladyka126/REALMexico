/* selectors */
export const getAllOffers = ({ offers }) => offers.data;
export const getOneOffer = ({ offers }, offerId) =>
  offers.data.find((offer) => offer.id === offerId);
export const getOffersByRegion = ({ offers }, regionName) =>
  offers.data.filter((offer) => {
    const nameSmall = offer.region.replace(" ", "").toLowerCase();
    return nameSmall === regionName;
  });
export const getFromCart = ({ offers }) => offers.cart;

/* action name creator */
const reducerName = "offers";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_ERROR = createActionName("FETCH_ERROR");
const ADD_TO_CART = createActionName("ADD_TO_CART");

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_TO_CART: {
      return {
        ...statePart,
        cart: action.payload,
      };
    }
    default:
      return statePart;
  }
};
