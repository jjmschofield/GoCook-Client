import RecipeState from './models/RecipeState';
import {
    FETCH_ALL_RECIPES,
    FETCH_ALL_RECIPES_SUCCESS,
    FETCH_ALL_RECIPES_FAILURE,
} from './actions/fetchAllRecipes';

import {
    fetchAllRecipesInProgress,
    fetchAllRecipesSuccess,
    fetchAllRecipesFailure,
} from './reducers/fetchAllRecipes';

export default (state = new RecipeState(), action) => {
    switch (action.type) {
        case FETCH_ALL_RECIPES:
            return fetchAllRecipesInProgress(state, action);
        case FETCH_ALL_RECIPES_SUCCESS:
            return fetchAllRecipesSuccess(state, action);
        case FETCH_ALL_RECIPES_FAILURE:
            return fetchAllRecipesFailure(state, action);
        default:
            return state;
    }
};