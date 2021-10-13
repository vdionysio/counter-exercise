import { INCREMENT, DECREMENT } from "./actionTypes";

export const incrementCounter = (payload) => ({
  type: INCREMENT,
  payload,
});

export const decrementCounter = (payload) => ({
  type: DECREMENT,
  payload,
});
