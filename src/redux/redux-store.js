import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {setPizzasReducer} from "./reducers/setPizaaReducer";
import filtersReducer from "./reducers/filtersReducer";
import thunk from 'redux-thunk'
import {cartReducer} from "./reducers/cartReducer";

const rootReducer=combineReducers({
    pizzas:setPizzasReducer,
    filters:filtersReducer,
    cart:cartReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

 const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));



window.store=store

export default store

