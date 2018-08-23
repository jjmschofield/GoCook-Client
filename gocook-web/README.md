# GoCook Web

This is the Web client for GoCook.

It is created using React with Flow for type safety checking. 

## Getting Started
Have `node` and `yarn` installed then:

```
$ yarn install
$ yarn start
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
```