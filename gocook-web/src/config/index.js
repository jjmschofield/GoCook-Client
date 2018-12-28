// @flow
import defaultConfig from './default';
import devConfig from './dev'
import prodConfig from './prod'


export type Config = {
    RECIPES_API: {
        BASE: string,
    },
    INGREDIENTS_API: {
        BASE: string,
    },
};

const getConfig = (): Config => {
    const env: string = process.env.REACT_APP_ENV || 'dev';

    console.log(`Using configuration for ${env}`);

    switch (process.env.REACT_APP_ENV) {
        case('prod'):
            return Object.assign({}, defaultConfig, prodConfig);
        case('dev'):
            return Object.assign({}, defaultConfig, devConfig);
        default:
            console.warn(`No known configuration for ${env}. Using default config.`);
            return defaultConfig;
    }
};

const config: Config = getConfig();

Object.freeze(config);

export default config;