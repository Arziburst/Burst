// BETA TESTING LIBRARY 'nori-store'
// https://www.npmjs.com/package/nori-store

// Core
import { ReactTools } from 'nori-store';

// Tools
import { API_URL } from '../../../init';

type __entityName__(pascalCase) = Array<any> | null;

// Here use as SomeType or generic in createState<> to enable null
const initialState = null as __entityName__(pascalCase);

// Store
export const { state: __entityName__State, hook: use__entityName__(pascalCase)State } = ReactTools.createState(initialState);

// Action example
export const fetch__entityName__(pascalCase) = async () => {
    const response = await fetch(`${API_URL}/__entityName__`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();

    __entityName__State.setValue(result);
};

// Mini docs

// import { useEffect } from 'react';
// import { fetch__entityName__(pascalCase), use__entityName__(pascalCase)State } from '../../../bus/nori-store/__entityName__';

// const __entityName__(pascalCase) = () => {
//     const __entityName__ = use__entityName__(pascalCase)State();

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

