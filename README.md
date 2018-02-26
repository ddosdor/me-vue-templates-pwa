# me-vue-templates-pwa boilerplate

This is my pwa template for vue-cli. It's was forked from original pwa boilerplate - [Oficial PWA Boilerplate](https://github.com/vuejs-templates/pwa).

This template includes, inter alia, scaffolding for components, containers and Vuex modules. It's still work in progress ;)

> A full-featured [PWA](https://developers.google.com/web/progressive-web-apps/) template with webpack, hot-reload, lint-on-save, unit testing & css extraction.

## Install template

``` bash
vue init ddosdor/me-vue-templates-pwa my-project
```

## Project structure

Below is info about folders that are not in the original vue-cli template

### "containers"

It's main component for routes. It contains child components dedicated to a given functionality.

To generate new container, type:

``` bash
$ gulp container --name MyContainer
```

### "store"

It's store for Vuex and is divided into modules.

To generate new Vuex module, type:

``` bash
$ gulp container --name MyModule
```

## "utils"

This folder contains all usable functionalities and helpers functions. It contains also decorator, which is used to store current asynchronous methods (api requests).

## "components"

This folder is also in orginal Vue PWA boilerplate, but I decided that each component should be stored in folders corresponding to its container. I also seperate component structure to single files:

* index.vue - main component file
* component.js - component logic
* style.sass - component SASS style

To generate new component, type:

``` bash
$ gulp component --name MyComponent
```

The above command will generate component in the parent component folder. To generate it in the corresponding folder, type:

``` bash
$ gulp component --name MyComponent --parent MyParentFolder
```

or

``` bash
$ gulp component --name MyComponent --parent MyParentFolder/MyParentSubfolder
```

---------------------------------------------------------------------------------------------------------------------------------------------------------------

# Original documentation

- This template builds on top of the main webpack template, so please refer to the [webpack template docs](http://vuejs-templates.github.io/webpack).

- Check out the [official Vue.js guide](http://vuejs.org/guide/) for general information about Vue that is not specific to this template.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ or [yarn](https://yarnpkg.com) for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init pwa my-project
$ cd my-project
$ npm install
$ npm run dev
```

If port 8080 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.

## What's Included

* Service Worker precaching of application shell + static assets (prod)
* Script (async chunk) preloading using `<link rel="preload">`
* Web Application Manifest + favicons
* Mobile-friendly meta-viewport
* Lighthouse score of 90+/100

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.
  - Generates a Service Worker for offline caching your static assets using [sw-precache-webpack-plugin](https://www.npmjs.com/package/sw-precache-webpack-plugin)

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015+ in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
