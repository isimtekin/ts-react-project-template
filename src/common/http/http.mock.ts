import AxiosMockAdapter from 'axios-mock-adapter';
import httpService from './http.service';

export default new AxiosMockAdapter(httpService.mock, { delayResponse: 0 });
