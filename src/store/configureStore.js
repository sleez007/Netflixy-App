import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger'
import { persistStore } from "redux-persist";
import rootReducer from "../reducers";
import api from "../middleware/api";
import DevTools from "../containers/DevTools";

const configureStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(api,logger),DevTools.instrument()));
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }
  const persiststore = persistStore(store);
  return { store, persiststore };
};

export default configureStore;