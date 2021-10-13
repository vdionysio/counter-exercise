import { DECREMENT, INCREMENT } from "../actions/actionTypes";

const INITIAL_STATE = 0;

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
