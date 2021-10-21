/* eslint-disable babel/quotes */

// Core
import { generateTemplateFiles } from 'generate-template-files';
import { path as PROJECT_ROOT } from 'app-root-path';
import { IResults, CaseConverterEnum } from 'generate-template-files';
import { resolve } from 'path';

generateTemplateFiles([
    {
        option:      'Create entity in /bus',
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
        onComplete: (results: IResults) => {
            console.log('results', results);
        },
    },
    {
        option:      'Add Saga folder to /bus/someEntity',
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
        onComplete: (results: IResults) => {
            console.log('results', results);
        },
    },
]);
