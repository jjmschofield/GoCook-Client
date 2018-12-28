//@flow
import axios from 'axios';
import config from '../../config';
import { Auth } from '../auth';
import Recipe from '../../models/RecipeModel';

const baseUrl = config.RECIPES_API.BASE;

const getDefaultHeaders = async (auth: Auth) => {
    const accessToken = await auth.getAccessToken();

    return {
        Authorization: `Bearer ${accessToken}`
    }
};

export const getAllRecipes = async (auth: Auth) => {
    try {
        const headers = await getDefaultHeaders(auth);

        const response = await axios.get(baseUrl, { headers });

        const recipes = response.data.map((recipe) => Recipe.FromApiResponse(recipe));

        return recipes;
    }
    catch (error) {
        console.error('Failed to retrieve recipes from api', error);
        throw error;
    }
};

export const getRecipeById = async (auth: Auth, id: string) => {
    try {
        const headers = await getDefaultHeaders(auth);

        const response = await axios.get(baseUrl + `/${id}`, { headers });

        const recipe = Recipe.FromApiResponse(response.data);

        return recipe;
    }
    catch (error) {
        console.error(`Failed to retrieve recipe with id ${id}`, error);
        throw error;
    }
};