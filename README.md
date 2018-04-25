<img src="https://github.com/spaceisstrange/lastfm2spotify/blob/master/src/assets/img/logo.png?raw=true" width="600"/>

[![forthebadge](https://forthebadge.com/images/badges/compatibility-club-penguin.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/compatibility-ie-6.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-oxygen.svg)](https://forthebadge.com)

Lastfm2Spotify allows you to easily import songs from your Last.fm account into a Spotify playlist.

**Currently in development**

# How to build

In order to preserve the Spotify Client ID and Client Secret keys away from the repository, you need to set a couple of environmental variables, but first of all you need to generate such keys. So there we go!

## 1. Grab the keys
Simply go to https://developer.spotify.com, login using your Spotify account and create a new app. This will generate a couple of keys (client ID and client secret). Save those.

## 2. Set the keys as environment variables
Simply execute in your shell:

```SHELL
export SPOTIFY_CLIENT_ID='your client ID'
export SPOTIFY_CLIENT_SECRET='your client secret'
```

## 3. Building
This couple of variables are set in the Angular environment files with a script called `create-environment.js`, so you need to execute it before building or serving the app. There's already some nice npm commands to help you with that.

### 3.1. Local app serve
```SHELL
npm run start:dev
```

### 3.2. Production build
```SHELL
npm run build
```

Or the _Heroku_ command:
```SHELL
npm run postinstall
```
