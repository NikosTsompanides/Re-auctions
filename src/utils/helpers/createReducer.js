import produce from "immer";

/**
 * Creates an reducer with immerjs
 * 
 * @param {function} initialState function that returns the initial state 
 * @param {function} mutations function that contain all action type cases
 * @returns reducer
 */
export default function createReducer(initialState, mutations) {
  return produce((draft, action) => {
    const mutation = mutations(draft)[action.type];
    if (mutation) mutation(action.payload)
  }, initialState());
}
