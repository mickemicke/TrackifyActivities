import { LOGIN, LOGOUT } from "../constants";
import createDates from './createDates';

export const initialState = {
  user: null,
  months: createDates(),
};

function reducer(state, action) {
  console.log('reducer state', state);
  console.log("reducer payload", action.payload);
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { user: null };
    default:
      return state;
  }
}

export default reducer;
