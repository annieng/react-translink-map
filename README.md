# React Translink Map
A live-updating map of the buses on the Metro Vancouver [Translink](https://www.translink.ca/) network. Built with React and Redux, with use of [`react-map-gl`](https://github.com/uber/react-map-gl).

### Run
Run `yarn install` to install dependencies.

Add a file named `.env` in the root directory and provide a [Mapbox](https://www.mapbox.com/) token and a [Translink API](https://developer.translink.ca/) key.

For example:
```
REACT_APP_MAPBOX_TOKEN=supertopsecretkey
REACT_APP_TRANSLINK_KEY=othersupertopsecretkey
```

Then run `yarn start`.
