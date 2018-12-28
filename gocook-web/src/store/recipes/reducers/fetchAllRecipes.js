import RecipeModel from '../models/RecipeModel';

export function fetchAllRecipesInProgress(state) {
    return Object.assign({}, state, {
        fetchInProgress: true,
        fetchError: false,
    });
}

export function fetchAllRecipesSuccess(state, action) {
    const newRecipes = {};

    action.data.recipes.forEach((apiRecipe) => {
        const recipe =  RecipeModel.FromApiResponse(apiRecipe);
        newRecipes[recipe.id] = recipe;
    });

    return Object.assign({}, state, {
        recipes: Object.assign({}, state.recipes, newRecipes),
        fetchInProgress: false,
        fetchError: false,
    });
}

export function fetchAllRecipesFailure(state) {
    return Object.assign({}, state, {
        fetchInProgress: false,
        fetchError: true,
    });
}
