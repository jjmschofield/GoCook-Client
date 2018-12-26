// @flow
class RecipeModel {
    id: ?string;
    name: string;
    owner: string;
    description: string;
    imgUrl: ?string;
    tags: string[];
    source: Source;
    yield: number;
    ingredients: Ingredient[];
    steps: Step[];
    time: Time;
    contributors: string[];

    constructor(props: RecipeModel) {
        this.id = props.id;
        this.name = props.name;
        this.owner = props.owner;
        this.description = props.description;
        this.imgUrl = props.imgUrl;
        this.tags = props.tags;
        this.source = props.source;
        this.yield = props.yield;
        this.ingredients = props.ingredients;
        this.steps = props.steps;
        this.time = props.time;
        this.contributors = props.contributors;
    }

    static FromApiResponse(response: RecipeModel) {
        return new RecipeModel(response);
    }
}

class Ingredient {
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

class Source {
    name: string;
    url: ?string;
}

export default RecipeModel;
