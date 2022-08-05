# Welcome to Burst🔥

Burst is the perfect template for react web applications.

Typescript, webpack, react, redux are the basis of most SPA applications, and here they are already fully and conveniently configured. Simple and flexible react architecture with customized routing. Also Redux is configured with DDD approach, which makes it possible to generate boilerplate code in a couple of steps.

Ready to use, just waiting for you!

### Features
 - Simple, flexible, extensible architecture
 - Custom modular Webpack
 - Configured custom ESlint
 - Docker ready
 - Lightweight bundle
 - Code generating

### Initializing
Burst is easy to use and all it needs is installed `node_modules`.

If need better control on your environment, you can create `.env.development` and `.env.production` by example from `.env.example`.</br>
If you do not create any `.env.**`, Burst use `.env.example` by default.

## Requirements
❗️ NPM `v6.0.0 or later`</br>
❗️ Node `v14.0.0 of later`

### Available scripts
```sh
npm start        /* calls webpack devserver */
npm run build    /* generate lightweight build */
npm run gen      /* file generation CLI */
npm run analyze  /* web bundle analysis */
npm run serve    /* start web process based on build */
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

📍 Extention for VS Code `Better Comments (id: aaron-bond.better-comments)`.</br>
Сolorizes your comments based on the config file ```.vscode/settings.json ```, best comments examples below:

![image](https://user-images.githubusercontent.com/53538417/139050274-e7f87f9e-7d8c-4b9c-8ac2-8f65837850c2.png)

## Deploy
```sh
npm run build                            /* generate lightweight build */
docker build -t [dokerId]/[imageName] .  /* create docker image based on build */
docker push [dokerId]/[imageName]        /* push docker image to dockerHub */
```
