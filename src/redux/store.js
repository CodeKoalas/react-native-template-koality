import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { autoRehydrate } from 'redux-persist';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import reducers from '../reducers';
import history from './history';
import ReduxPersist from '../config/ReduxPersist';
import RehydrationServices from '../services/RehydrationServices';

const middleware = routerMiddleware(history);
const enhancer = compose(applyMiddleware(middleware), autoRehydrate());

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  enhancer,
);

if (ReduxPersist.active) {
  RehydrationServices.updateReducers(store);
}

export default store;
