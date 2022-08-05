# Welcome to Burst.🔥

Burst is the perfect template for react web applications.

Typescript, webpack, react, redux are the basis of most SPA applications, and here they are already fully and conveniently configured. Simple and flexible react architecture with customized routing. Also Redux is configured with DDD approach, which makes it possible to generate boilerplate code in a couple of steps.

Ready to use, just waiting for you!

### How to install
Burst can be installed in all possible ways, and can also be downloaded via npm.
```sh
npx create-react-app <your_project_name> --template burst
```
### Features
 - Simple, flexible, extensible architecture
 - Custom modular Webpack
 - Configured custom ESlint
 - Docker ready
 - Lightweight bundle
 - Code generating

### Initializing
Burst is easy to use and all it needs is installed `node_modules`.

Also you can create `.env.development` and `.env.production` for better control you environment by example from `.env.example`.</br>
If you do not create any `.env.**`, Burst use `.env.example` by default.

## Requirements
❗️ NPM `v6.0.0 or later`</br>
❗️ Node `v14.0.0 of later`

### Available scripts
```sh
npm start        /* calls webpack devserver */
npm run build    /* generate lightweight bundle */
npm run gen      /* file generation CLI */
npm run analyze  /* web bundle analysis */
npm run serve    /* web bundle analysis */
npm run clean    /* delete node_modules */
```
## Optional VSCode Extensions
📍 Auto formatting code with ESLint
You may need to add code below to your `settings.json` in VSCode
```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
},
"eslint.format.enable": true,
```

📍 Extention for VS Code `Better Comments (id: aaron-bond.better-comments)`</br>
Сolorizes your comments based on the config file ```.vscode/settings.json ```.

## Deploy
```sh
npm run build                            /* generate lightweight bundle */
docker build -t [dokerId]/[imageName] .  /* create docker image based on build */
docker push [dokerId]/[imageName]        /* push docker image to dockerHub */
```
