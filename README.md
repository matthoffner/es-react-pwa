# es-react-pwa

modern react es modules boilerplate. no babel transpilation or webpack build.

contents:

* [snowpack](https://snowpack.dev)
* [react-esm]
* [styled-components]()
* [es-module-shims]()
* [kv-storage]()
* [workbox]()

concepts:

## import maps

included is es module shims, which includes polyfill support for `importmaps`. these allow direct global imports. this is key in not requiring babel.

## tree shaking (snowpack)

snowpack allows you to treeshake es module dependencies in a convinient way. there is a production command that will do the treeshaking, and a post npm install step which will localize the es modules.

```sh
yarn prepare
```

```sh
yarn optimize
```

### progressive web app (workbox)

workbox is configured to be run before each commit to generate the caching configuration and whatever else you want to configure a pwa for.

intialization:

```sh
yarn pwa:init
```

to generate caching with each build:

```sh
yarn pwa
```

