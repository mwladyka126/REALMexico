/* selectors */
export const getAllOffers = ({ offers }) => offers.data;
export const getOneOffer = ({ offers }, offerId) =>
  offers.data.find((offer) => offer.id === offerId);
export const getOffersByRegion = ({ offers }, regionId) =>
  offers.data.filter((offer) => offer.regionId === regionId);
export const getFromCart = ({ offers }) => offers.cart;
export const countInCart = ({ offers }) => offers.cart.length;

/* action name creator */
const reducerName = "offers";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_ERROR = createActionName("FETCH_ERROR");
const ADD_TO_CART = createActionName("ADD_TO_CART");
const EDIT_IN_CART = createActionName("EDIT_IN_CART");
const REMOVE_FROM_CART = createActionName("REMOVE_FROM_CART");

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });
export const editInCart = (payload) => ({ payload, type: EDIT_IN_CART });
export const removeFromCart = (payload) => ({
  payload,
  type: REMOVE_FROM_CART,
});

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
        cart: [...statePart.cart, action.payload],
      };
    }
    case EDIT_IN_CART: {
      return {
        ...statePart,
        cart: [
          ...statePart.cart.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        ],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...statePart,
        cart: [
          ...statePart.cart.filter((item) => item.id !== action.payload.id),
        ],
      };
    }
    default:
      return statePart;
  }
};
