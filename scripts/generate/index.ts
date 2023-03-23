// Core
import { CLIGen } from 'burst-generate-files';

CLIGen([
    {
        name:      'Entity: ./src/bus/__entityName__',
        templates: [
            {
                stringsReplacers: '__entityName__',
                pathToTemplate:   './scripts/generate/templates/busEntity',
                outputPath:       './src/bus/__entityName__',
                markers:          [
                    {
                        pattern:        '// MarkerGen reducers',
                        markerTemplate: './scripts/generate/templates/busEntity/.genignore/importReducer.ts',
                        pathToMarker:   './src/init/redux/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen add reducer',
                        markerTemplate: './scripts/generate/templates/busEntity/.genignore/addReducer.ts',
                        pathToMarker:   './src/init/redux/index.ts',
                    },
                ],
            },
        ],
    },
    {
        name:      'BETA nori-store entity: ./src/bus/nori-store/__entityName__',
        templates: [
            {
                stringsReplacers: '__entityName__',
                pathToTemplate:   './scripts/generate/templates/noriStore',
                outputPath:       './src/bus/nori-store/__entityName__',
            },
        ],
    },
    {
        name:      'Saga: ./src/bus/__entityName__/saga',
        templates: [
            {
                stringsReplacers: '__entityName__',
                pathToTemplate:   './scripts/generate/templates/saga',
                outputPath:       './src/bus/__entityName__/saga',
                markers:          [
                    {
                        pattern:        '// MarkerGen middleware',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/importCustomHookSaga.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen api hook',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/apiHook.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen use api hook',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/useApiHook.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen tools imports',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/importWatch.ts',
                        pathToMarker:   './src/init/redux/rootSaga.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen use watch',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/useWatch.ts',
                        pathToMarker:   './src/init/redux/rootSaga.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen import Saga or Thunk',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/importSaga.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen sagaMiddleware',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/varSagaMiddleware.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen use middleware Saga or Thunk',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/sagaMiddleware.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen export sagaMiddleware',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/sagaMiddleware.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen sagaMiddleware',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/sagaMiddleware.ts',
                        pathToMarker:   './src/init/redux/index.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen import rootSaga',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/importTootSaga.ts',
                        pathToMarker:   './src/init/redux/index.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen run rootSaga',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/runRootSaga.ts',
                        pathToMarker:   './src/init/redux/index.ts',
                        onceInsert:     true,
                    },
                ],
            },
        ],
    },
    {
        name:      'Thunk: ./src/bus/__entityName__/thunk',
        templates: [
            {
                stringsReplacers: '__entityName__',
                pathToTemplate:   './scripts/generate/templates/thunk',
                outputPath:       './src/bus/__entityName__/thunk',
                markers:          [
                    {
                        pattern:        '// MarkerGen middleware',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/importCustomHookThunk.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen api hook',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/apiHook.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen use api hook',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/useApiHook.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen import extraReducers',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/importExtraReducers.ts',
                        pathToMarker:   './src/bus/__entityName__/slice.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen use extraReducers',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/useExtraReducers.ts',
                        pathToMarker:   './src/bus/__entityName__/slice.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen import Saga or Thunk',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/importThunkMiddleware.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen use middleware Saga or Thunk',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/thunkMiddleware.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                ],
            },
        ],
    },
    {
        name:      'Component: ./src/view/components/__componentName__',
        templates: [
            {
                stringsReplacers: '__componentName__',
                pathToTemplate:   './scripts/generate/templates/component',
                outputPath:       './src/view/components/__componentName__(pascalCase)',
                markers:          [
                    {
                        pattern:        '// MarkerGen re-export',
                        markerTemplate: './scripts/generate/templates/component/.genignore/export.ts',
                        pathToMarker:   './src/view/components/index.ts',
                    },
                ],
            },
        ],
    },
    {
        name:      'Element: ./src/view/elements/__elementName__',
        templates: [
            {
                stringsReplacers: '__elementName__',
                pathToTemplate:   './scripts/generate/templates/element',
                outputPath:       './src/view/elements',
                markers:          [
                    {
                        pattern:        '// MarkerGen re-export',
                        markerTemplate: './scripts/generate/templates/element/.genignore/export.ts',
                        pathToMarker:   './src/view/elements/index.ts',
                    },
                ],
            },
        ],
    },
    {
        name:      'Container: ./src/view/containers/__containerName__',
        templates: [
            {
                stringsReplacers: '__containerName__',
                pathToTemplate:   './scripts/generate/templates/container',
                outputPath:       './src/view/containers/__containerName__(pascalCase)',
                markers:          [
                    {
                        pattern:        '// MarkerGen re-export',
                        markerTemplate: './scripts/generate/templates/container/.genignore/export.ts',
                        pathToMarker:   './src/view/containers/index.ts',
                    },
                ],
            },
        ],
    },
    {
        name:      'Page: ./src/view/pages/__pageName__',
        templates: [
            {
                stringsReplacers: '__pageName__',
                pathToTemplate:   './scripts/generate/templates/page',
                outputPath:       './src/view/pages/__pageName__(pascalCase)',
                markers:          [
                    {
                        pattern:        '// MarkerGen pages',
                        markerTemplate: './scripts/generate/templates/page/.genignore/exportLazy.ts',
                        pathToMarker:   './src/view/pages/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen books',
                        markerTemplate: './scripts/generate/templates/page/.genignore/book.ts',
                        pathToMarker:   './src/view/routes/book.ts',
                    },
                    {
                        pattern:        /(\{\/\* MarkerGen route \*\/\})/,
                        markerTemplate: './scripts/generate/templates/page/.genignore/route.ts',
                        pathToMarker:   [ './src/view/routes/Private.tsx', './src/view/routes/Public.tsx' ],
                        genDirection:   'before',
                    },
                ],
            },
        ],
    },
]);

