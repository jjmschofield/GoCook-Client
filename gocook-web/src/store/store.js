import { createStore as createReduxStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import recipeStore from './recipes/recipeStore';

export function createStore() {
    const reducers = combineReducers({
        recipeStore,
    });

    const logger = createLogger();

    return createReduxStore(
        reducers,
        applyMiddleware(thunk, logger)
    );
}

export default createStore;