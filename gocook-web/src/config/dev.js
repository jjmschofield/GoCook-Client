// @flow
import type { Config } from './'

const config: Config = {
    RECIPES_API: {
        BASE: 'http://localhost:8080/recipes'
    },
    INGREDIENTS_API: {
        BASE: 'http://localhost:8080/ingredients'
    }
};

export default config;