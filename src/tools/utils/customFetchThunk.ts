
// Tools
import { ControlledErrorThunk, IControlledError } from './ControlledErrorThunk';

// Types
type FetchOptions = {
    fetch: () => ReturnType<typeof fetch>;
    successStatusCode: number;
}

export type CFetchContact =
<SuccessData>(fetchOptions: FetchOptions) => Promise<SuccessData | IControlledError | undefined>

export const customFetchThunk: CFetchContact = async (fetchOptions) => {
    try {
        const response = await fetchOptions.fetch();

        if (response.status !== fetchOptions.successStatusCode) {
            // ---------- FAIL START ----------
            let errorData = void 0;

            try {
                errorData = await response.json();
            } catch {
                throw new ControlledErrorThunk({ message: 'Parsing error' });
            }

            throw new ControlledErrorThunk({
                message:    'Client error',
                statusCode: response.status,
                data:       errorData,
            });
            // ---------- FAIL END ----------
        }

        // ---------- SUCCESS START ----------
        let successData = void 0;

        try {
            successData = await response.json();

            return successData;
        } catch {
            throw new ControlledErrorThunk({ message: 'Parsing error' });
        }
        // ---------- SUCCESS END ----------
    } catch (error: any) {
        const customError: IControlledError = error;

        console.log(customError);

        return customError;
    }
};
