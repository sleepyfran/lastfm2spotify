/* Based on https://github.com/natchiketa/angular-cli-envvars/blob/master/src/set-env.ts */
const fs = require('fs');

// Get the current directory from the argv, split it into an array to get the different
// folders and pop the last one, this is the .js file and we don't need it.
const jsDirectory = process.argv[1].split('/')
jsDirectory.pop()
const currentDirectory = jsDirectory.join('/');

// Get the environment passed to the config file.
const environment = process.argv[2];
const isProd = environment === 'prod';
const appUrl = isProd ? 'https://lastfm2spotify.com' : 'http://localhost:4200';

const targetPath = `${currentDirectory}/environments/environment.${environment}.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  appUrl: '${appUrl}',
  spotifyClientId: '${process.env.SPOTIFY_CLIENT_ID}',
  spotifyClientSecret: '${process.env.SPOTIFY_CLIENT_SECRET}'
};
`

// Write the file contents.
fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
