import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { logger } from 'common/logger/logger.service';

const axiosConfig: AxiosRequestConfig = {
    baseURL: 'api',
};

class HttpService {
    private _client: AxiosInstance;
    private _mock: AxiosInstance;

    constructor() {
        this._client = axios.create(axiosConfig);
        this._mock = axios.create(axiosConfig);
        this.applyInterceptor();
    }

    private applyInterceptor() {
        this._mock.interceptors.request.use((config) => {
            logger.debug([config.url, config.headers, config.data]);
            return config;
        });
        this._mock.interceptors.response.use((config) => {
            logger.debug([config.request.url, config.headers, config.data]);
            return config;
        });
    }

    public get client(): AxiosInstance {
        return this._client;
    }

    public get mock(): AxiosInstance {
        return this._mock;
    }
}

export default new HttpService();
