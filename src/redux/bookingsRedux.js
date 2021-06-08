import Axios from "axios";

/* selectors */
export const getAllbookings = ({ bookings }) => bookings.data;
export const getLoadingState = ({ bookings }) => bookings.loading;

/* action name creator */
const reducerName = "bookings";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_ERROR = createActionName("FETCH_ERROR");
const ADD_NEW_BOOKING = createActionName("ADD_NEW_BOOKING");

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addNewBooking = (payload) => ({ payload, type: ADD_NEW_BOOKING });

/* thunk creators */

export const fetchBookingsFromAPI = () => {
  return (dispatch, getState) => {
    const { bookings } = getState();

    if (bookings.data.length === 0 || bookings.loading.active === "false") {
      dispatch(fetchStarted());
      Axios.get("http://localhost:8000/api/bookings")
        .then((res) => {
          dispatch(fetchSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
    }
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
    case ADD_NEW_BOOKING: {
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
      };
    }
    default:
      return statePart;
  }
};
