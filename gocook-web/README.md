# GoCook Web

This is the Web client for GoCook.

It is created using React with Flow for type safety checking. 

## Getting Started
Have `node` and `yarn` installed then:

```
$ yarn install
$ yarn start
```

## Configuration
Configurations are controlled in `./src/config`. You will find a default config and a config for each environment in this module.

To specify a configuration at run or build time set the `REACT_APP_ENV` process.env.

For example:

```
$ REACT_APP_ENV=prod npm run build
Will build for production

$ REACT_APP_ENV=dev npm start
Will run the app for dev
```

## Tests
To run the tests do:

```
$ yarn test
```

## Tests
To do a build do:

```
$ yarn build
```

## Deployment
On a push to `master` the app will deploy to Heroku at [https://go-cook-web.herokuapp.com/](https://go-cook-web.herokuapp.com/).

This was a little bit hookey to setup - as Heroku is not expecting a project to be in a sub folder. A custom buildpack is helping out here:

```
$ heroku buildpacks:set https://github.com/timanovsky/subdir-heroku-buildpack -a go-cook-web
$ heroku buildpacks:add heroku/nodejs -a go-cook-web
$ heroku config:set PROJECT_PATH=gocook-web -a go-cook-web
$ heroku config:set REACT_APP_ENV=prod -a go-cook-web
```