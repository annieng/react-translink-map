# React Translink Map
A live-updating map of the buses on the Metro Vancouver [Translink](https://www.translink.ca/) network. Built with React and Redux, with use of [`react-map-gl`](https://github.com/uber/react-map-gl).

A live demo is [here](https://react-translink-map.herokuapp.com/). Watch the buses move around or click the little teal icons for more information about that bus!

### Run locally
Run `yarn install` to install dependencies.

Add a file named `.env` in the root directory and provide a [Mapbox](https://www.mapbox.com/) token and a [Translink API](https://developer.translink.ca/) key.

For example:
```
REACT_APP_MAPBOX_TOKEN=supertopsecretkey
REACT_APP_TRANSLINK_KEY=othersupertopsecretkey
```

Since the Translink API doesn't have the CORS headers necessary for AJAX calls to succeed, a [CORS Anywhere proxy](https://github.com/Rob--W/cors-anywhere) has been set up at https://guisers-cors-proxy.herokuapp.com and all the Translink requests are proxied through there. However, to prevent open use of the proxy, only the live demo URL has been whitelisted to use the proxy. To get this working in development, you will have to add `"proxy": "http://api.translink.ca/",` to package.json and change `https://guisers-cors-proxy.herokuapp.com/http://api.translink.ca/rttiapi/v1/buses` to `/rttiapi/v1/buses` in src/actions/busActions.js to proxy through the webpack dev server instead.

Run `yarn start`.
