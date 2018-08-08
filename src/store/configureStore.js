import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage'
import reducers from '../reducers'

import { routerReducer } from 'react-router-redux'

const enhancer = compose(
    persistState('user')
)

const rootReducer = combineReducers({
    ...reducers,
    rotuter: routerReducer
})

export default function configureStore(middleware){ 
    return createStore(
        rootReducer,
        applyMiddleware(middleware),
        enhancer
    );
}