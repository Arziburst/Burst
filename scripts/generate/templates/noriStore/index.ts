// BETA TESTING LIBRARY 'nori-store'
// https://www.npmjs.com/package/nori-store

// Core
import { NoriStore, ReactTools } from 'nori-store';

// Tools
import { API_URL } from '../../../init/constants';

type __entityName__(pascalCase) = Array<any>

type __entityName__(pascalCase)State = {
    __entityName__: __entityName__(pascalCase) | null
}

const initialState: __entityName__(pascalCase)State = {
    __entityName__: null,
};

// Store
export const __entityName__Store = new NoriStore(/* storeName: */'__entityName__', /* initialState: */ initialState);
export const use__entityName__(pascalCase) = ReactTools.createUseState(__entityName__Store);

// Action example
export const fetch__entityName__(pascalCase) = async () => {
    const response = await fetch(`${API_URL}/__entityName__`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();

    __entityName__Store.setValues({ __entityName__: result });
};

// Mini docs

// import { useEffect } from 'react';
// import { fetch__entityName__(pascalCase), use__entityName__(pascalCase) } from '../../../bus/nori-store/__entityName__';

// const __entityName__(pascalCase) = () => {
//     const { __entityName__ } = use__entityName__(pascalCase)();

//     useEffect(() => {
//         fetch__entityName__(pascalCase)();
//     }, []);

//     return (
//         <section>
//             {
//                 __entityName__?.map((__, index) => (
//                     <p key = { index }>{index}</p>
//                 ))
//             }
//             Page: __entityName__(pascalCase)
//         </section>
//     );
// };

