export enum ApiResponseStatus {
    Success = 'success',
    Error = 'error',
}

export interface BaseResponse {
    result: any;
    status: ApiResponseStatus;
}
