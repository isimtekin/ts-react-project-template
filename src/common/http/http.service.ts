import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
    baseURL: 'api',
};

class HttpService {
    private _client: AxiosInstance;
    private _mock: AxiosInstance;

    constructor() {
        this._client = axios.create(axiosConfig);
        this._mock = axios.create(axiosConfig);
    }

    public get client(): AxiosInstance {
        return this._client;
    }

    public get mock(): AxiosInstance {
        return this._mock;
    }
}

export default new HttpService();
