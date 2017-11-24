# {{ name }}

> {{ description }}

## Build Setup

install dependencies
``` bash npm install ```

or
``` bash yarn install ```

serve with hot reload at localhost:8080
``` bash npm run dev ```

or
``` bash yarn dev ```

build for production with minification
``` bash npm run build ```

or
``` bash yarn build ```

build for production and view the bundle analyzer report
``` bash npm run build --report
{{#unit}}
```

or
``` bash yarn build --report ```

run unit tests
``` bash npm run unit
{{/unit}}
{{#e2e}}
```

or
``` bash yarn unit
{{/unit}}
{{#e2e}}
```

run e2e tests
``` bash npm run e2e
{{/e2e}}
{{#if_or unit e2e}}
```

or
``` bash yarn e2e
{{/e2e}}
{{#if_or unit e2e}}
```

run all tests
``` bash npm test
{{/if_or}}
```

or
``` bash yarn test
{{/if_or}}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
