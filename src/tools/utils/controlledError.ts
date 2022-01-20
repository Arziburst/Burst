type Options = {
    message: string
    statusCode?: number
    data?: any
}

export class ControlledError<T extends Options> extends Error {
    readonly message;
    readonly statusCode;
    readonly data;

    constructor(args: T) {
        super(args.message);
        const { message, statusCode, data } = args;

        if (typeof statusCode !== 'number') {
            throw new Error('can not construct ValidationError due to arguments error');
        }

        if (!/^[1-5]{1}[0-9]{2}$/.test(String(statusCode))) {
            throw new Error(
                'statusCode in ValidationError should be a number in range from 100 to 599',
            );
        }

        Error.captureStackTrace(this, ControlledError);
        this.name = 'ControlledError';
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

export type IControlledError = InstanceType<typeof ControlledError>
