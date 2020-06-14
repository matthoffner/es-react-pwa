# es-react-pwa

minimalist and modern react boilerplate designed for minimal configuration.

[demo](https://es-react-pwa.netlify.com/)

## usage

### Install and build

```js
npm install && npm run build && npm run pwa
```

### Serve locally

```js
npm run serve
```

## contents:

* [snowpack](https://snowpack.dev)
* [styled-components](https://styled-components.com)
* [es-module-shims](https://github.com/guybedford/es-module-shims)
* [kv-storage](https://github.com/WICG/kv-storage)
* [workbox](https://developers.google.com/web/tools/workbox)
* [htm](https://github.com/developit/htm)

## concepts:

### import maps

included is es module shims, which includes polyfill support for `importmaps`. these allow direct global imports. this is key in not requiring babel.

### web modules (snowpack)

snowpack allows you to treeshake es module dependencies in a convinient way. there is a production command that will do the treeshaking, and a post npm install step which will localize the es modules.

```sh
npm run prepare
```

```sh
npm run optimize
```

### progressive web app (workbox)

workbox is configured to be run during build to generate the caching configuration.

intialization:

```sh
npm run pwa:init
```

to generate caching with each build

```sh
npm run pwa
```

