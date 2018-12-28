import { getAllRecipes } from '../../../lib/api/recipieApi';

const fetchAllRecipesStart = () => {
    return { type: FETCH_ALL_RECIPES };
};

export const FETCH_ALL_RECIPES_SUCCESS = 'FETCH_ALL_RECIPES_SUCCESS';

const fetchAllRecipesSuccess = (data) => {
    return { type: FETCH_ALL_RECIPES_SUCCESS, data };
};

export const FETCH_ALL_RECIPES_FAILURE = 'FETCH_ALL_RECIPES_FAILURE';

const fetchAllRecipesFailure = () => {
    return { type: FETCH_ALL_RECIPES_FAILURE };
};

export const fetchAllRecipes = (auth) => {
    return async (dispatch) => {
        dispatch(fetchAllRecipesStart());

        try {
            const recipes = await getAllRecipes(auth);
            dispatch(fetchAllRecipesSuccess({ recipes }));
        }
        catch (error) {
            console.error("Couldn't fetch recipes", error);
            dispatch(fetchAllRecipesFailure());
            throw error;
        }
    };
};

export const FETCH_ALL_RECIPES = 'FETCH_ALL_RECIPES';
