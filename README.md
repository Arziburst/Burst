# Arziburst React App

### Welcome to Arziburst React App.

Arziburst React App works on Windows, Linux, macOS.<br>
If something doesn’t work, please [file an issue](https://github.com/Arziburst/boilerplate/issues/new).<br>
If you have some enhancements, please [file an pull request](https://github.com/Arziburst/boilerplate/compare).<br>

## Quick Overview

```
INITIALIZING COMMANDS
```

Also you can create `.development.env` and `.production.env` by example from `.env.example`.

### `npm start`
To run project in dev mode

### `npm run build`
To create bundle

### `npm run serve`
To serve bundle

### `npm run analyze`
To analyze bundle with `webpack-bundle-analyzer`

### `npm run gen`
To generate some template file

## Features
🔍 Code generating<br>
🔍 Font minification<br>
🔍 Image lossless minification<br>
🔍 Auto generated manifest<br>
🔍 Bundle file stats analytics<br>

## Technologies
✅ Webpack `v5.60.0`<br>
✅ Typescript `v4.4.4`<br>
✅ React `v17.0.2`<br>
✅ Redux `v4.1.1`<br>
✅ Styled-components `v5.3.1`<br>
✅ ESLint `v7.18.0`<br>

## Requirements
❗️ NPM `v6.0.0 or later`<br>
❗️ Node `v14.0.0 of later`<br>
❗️ Font types `ttf`  `eot` `woff` `woff2`<br>

### ⚠️ If you will use another tools you may catch unexpected errors

## Additions
📍 Auto formatting code with ESLint

You may need to correct `settings.json` in VS Code
```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
},
"eslint.format.enable": true,
```

📍 Extention for VS Code `Better Comments (id: aaron-bond.better-comments)`

Best comments names:

![image](https://user-images.githubusercontent.com/53538417/139050274-e7f87f9e-7d8c-4b9c-8ac2-8f65837850c2.png)

## Deploy

local:
### `npm run build`
### `docker build -t [dokerId]/[imageName] .`

### `docker push [dokerId]/[imageName]`

Remote:
### `docker pull [dokerId]/[imageName]`
### `docker tag [dokerId]/[imageName] dokku/[appName]`

### `dokku tags:deploy [appName]`
### `dokku [module]:[report|help]`

Mini Dokku docs:

sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git postgres

sudo dokku plugin:install https://github.com/dokku/dokku-mongo.git mongo

sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git

dokku postgres:create db

dokku postgres:[unexpose|expose] db [?port]

dokku apps:create [dokkuAppName]

dokku postgres:link db [dokkuAppName]

dokku config:set [dokkuAppName] [key=value] [key=value]...

dokku domains:[add|remove][?-global] [?dokkuAppName] [domain]

dokku proxy:ports-[add|remove|clear] [dokkuAppName] [?http:[port:port]]

dokku letsencrypt:enable [dokkuAppName]
