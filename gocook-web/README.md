# GoCook Web

This is the Web client for GoCook. 

## Getting Started
Have `node` and `yarn` installed then:

```$xslt
$ yarn install
...
$ yarn start
```

# Deployment
On a push to `master` the app will deploy to Heroku at [https://go-cook-web.herokuapp.com/](https://go-cook-web.herokuapp.com/).

This was a little bit hookey to setup - as Heroku is not expecting a project to be in a sub folder. A custom buildpack is helping out here:

```$xslt
$ heroku buildpacks:set https://github.com/timanovsky/subdir-heroku-buildpack -a go-cook-web
...
$ heroku buildpacks:add heroku/nodejs -a go-cook-web
...
$ heroku config:set PROJECT_PATH=gocook-web -a go-cook-web
```