# {{ name }}

> {{ description }}

## Build Setup

``` bash 
# install dependencies
npm install 

# or
yarn install 

# serve with hot reload at localhost:8080
npm run dev 

# or
yarn dev 

# build for production with minification
npm run build 

# or
yarn build 

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# or
yarn build --report 

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}
 
# or
yarn unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# or
yarn e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}

# or
yarn test
{{/if_or}}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
