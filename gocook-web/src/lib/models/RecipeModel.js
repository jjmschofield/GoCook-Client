// @flow
class RecipeModel {
    id: string;
    contributors: string[];
    description: string;
    imgUrl: string;
    name: string;
    owner: string;
    tags: string[];
    url: string;
    yield: number;
    ingredients: Ingredient[];
    steps: Step[];
    time: Time;
}

class Ingredient{
    id: string;
    name: string;
    qty: number;
    unit: string;
}

class Step {
    id: string;
    name: string;
    description: string;
    time: Time;
}

class Time {
    prepSec: number;
    cookSec: number;
}

export default RecipeModel;
