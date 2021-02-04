import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "../utils/history";
import { userReducer } from "./user/reducer";

export default combineReducers({
  router: connectRouter(history),
  user: userReducer,
});
