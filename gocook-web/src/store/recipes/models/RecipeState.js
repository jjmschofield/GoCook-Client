export class RecipeState {
    constructor() {
        this.recipes = {};
        this.fetchInProgress = false;
        this.fetchError = false;
    }
}

export default RecipeState;