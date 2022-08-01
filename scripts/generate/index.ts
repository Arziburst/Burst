// Core
import { generateTemplateFiles, CaseConverterEnum } from 'generate-template-files';
import { path as PROJECT_ROOT } from 'app-root-path';
import { resolve } from 'path';

generateTemplateFiles([
    {
        option:      'Entity: /bus/__entityName__',
        defaultCase: CaseConverterEnum.CamelCase,
        entry:       {
            folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/busEntity'),
        },
        stringReplacers: [ '__entityName__' ],
        output:          {
            path:                       resolve(PROJECT_ROOT, './src/bus/__entityName__'),
            pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
            overwrite:                  true,
        },
        onComplete: (results) => {
            console.log('results', results);
        },
    },
    {
        option:      'Saga: /bus/__entityName__/saga',
        defaultCase: CaseConverterEnum.CamelCase,
        entry:       {
            folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/saga'),
        },
        stringReplacers: [ '__entityName__' ],
        output:          {
            path:                       resolve(PROJECT_ROOT, './src/bus/__entityName__/saga'),
            pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
            overwrite:                  true,
        },
        onComplete: (results) => {
            console.log('results', results);
        },
    },
    {
        option:      'Thunk: /bus/__entityName__/thunk',
        defaultCase: CaseConverterEnum.CamelCase,
        entry:       {
            folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/thunk'),
        },
        stringReplacers: [ '__entityName__' ],
        output:          {
            path:                       resolve(PROJECT_ROOT, './src/bus/__entityName__/thunk'),
            pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
            overwrite:                  true,
        },
        onComplete: (results) => {
            console.log('results', results);
        },
    },
    {
        option:      'Component: /view/components/__componentName__',
        defaultCase: CaseConverterEnum.CamelCase,
        entry:       {
            folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/component'),
        },
        stringReplacers: [ '__componentName__' ],
        output:          {
            path:                       resolve(PROJECT_ROOT, './src/view/components/__componentName__(pascalCase)'),
            pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
            overwrite:                  true,
        },
        onComplete: (results) => {
            console.log('results', results);
        },
    },
    {
        option:      'Container: /view/containers/__containerName__',
        defaultCase: CaseConverterEnum.CamelCase,
        entry:       {
            folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/container'),
        },
        stringReplacers: [ '__containerName__' ],
        output:          {
            path:                       resolve(PROJECT_ROOT, './src/view/containers/__containerName__(pascalCase)'),
            pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
            overwrite:                  true,
        },
        onComplete: (results) => {
            console.log('results', results);
        },
    },
    {
        option:      'Page: /view/pages/__pageName__',
        defaultCase: CaseConverterEnum.CamelCase,
        entry:       {
            folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/page'),
        },
        stringReplacers: [ '__pageName__' ],
        output:          {
            path:                       resolve(PROJECT_ROOT, './src/view/pages/__pageName__(pascalCase)'),
            pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
            overwrite:                  true,
        },
        onComplete: (results) => {
            console.log('results', results);
        },
    },
]);
