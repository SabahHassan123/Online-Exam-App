
declare type SuccessfulResponse<T> = {
    message: 'success',
} & T

declare type ErrorResponse = {
    message: string,
    code: number,
}

declare type SuccessfulVerificationCode = {
    status: 'Success',
}

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;


declare type VerificationAPIResponse = SuccessfulVerificationCode | ErrorResponse;


