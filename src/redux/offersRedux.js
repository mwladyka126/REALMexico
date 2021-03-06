import Axios from "axios";
import { API_URL } from "../config";
/* selectors */
export const getAllOffers = ({ offers }) => offers.data;
export const getOne = ({ offers }) => offers.oneOffer;
export const getOneOffer = ({ offers }, offerId) =>
  offers.data.find((offer) => offer._id === offerId);
export const getOffersByRegion = ({ offers }, regionId) =>
  offers.data.filter((offer) => offer.regionId === regionId);
export const getFromCart = ({ offers }) => offers.cart;
export const countInCart = ({ offers }) => offers.cart.length;
export const getLoadingState = ({ offers }) => offers.loading;

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
const CLEAN_CART = createActionName("CLEAN_CART");
const FETCH_ONE_OFFER = createActionName("FETCH_ONE_OFFER");

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const fetchOneOffer = (payload) => ({ payload, type: FETCH_ONE_OFFER });
export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });
export const editInCart = (payload) => ({ payload, type: EDIT_IN_CART });
export const cleanCart = (payload) => ({
  payload,
  type: CLEAN_CART,
});
export const removeFromCart = (payload) => ({
  payload,
  type: REMOVE_FROM_CART,
});

/* thunk creators */

export const fetchOffersFromAPI = () => {
  return (dispatch, getState) => {
    const { offers } = getState();

    if (offers.data.length === 0 || offers.loading.active === "false") {
      dispatch(fetchStarted());
      Axios.get(`${API_URL}/offers`)
        .then((res) => {
          dispatch(fetchSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchOneOfferFromAPI = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios.get(`${API_URL}/offers/${id}`)
      .then((res) => {
        dispatch(fetchOneOffer(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
          confirmation: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          confirmation: false,
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
          confirmation: false,
        },
      };
    }
    case FETCH_ONE_OFFER: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          confirmation: false,
        },
        oneOffer: action.payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          confirmation: false,
        },
        cart: [...statePart.cart, action.payload],
      };
    }
    case EDIT_IN_CART: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          confirmation: false,
        },
        cart: [
          ...statePart.cart.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        ],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          confirmation: false,
        },
        cart: [
          ...statePart.cart.filter((item) => item._id !== action.payload._id),
        ],
      };
    }
    case CLEAN_CART: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          confirmation: true,
        },
        cart: [],
      };
    }
    default:
      return statePart;
  }
};
