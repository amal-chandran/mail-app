import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/RootReducer";
import logger from "redux-logger";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

export default createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(logger, routerMiddleware(history))
);
