export class ValidationError extends Error {
    readonly statusCode: number;

    constructor(...args: [ string, number? ]) {
        super(args[ 0 ]);
        const [ , statusCode = 400 ] = args;

        if (typeof statusCode !== 'number') {
            throw new Error('can not construct ValidationError due to arguments error');
        }

        if (!/^[1-5]{1}[0-9]{2}$/.test(String(statusCode))) {
            throw new Error(
                'statusCode in ValidationError should be a number in range from 100 to 599',
            );
        }

        Error.captureStackTrace(this, ValidationError);
        this.name = 'ValidationError';
        this.statusCode = statusCode;
    }
}
