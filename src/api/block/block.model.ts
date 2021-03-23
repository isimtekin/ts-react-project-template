import { AxiosResponse } from 'axios';
import { BaseResponse } from 'common/http/http.model';

export interface BlockListItem {
    height: number;
    hash: string;
    time: number;
    main_chain: boolean;
}

export interface BlockDetail {
    height: number;
    weight: number;
    hash: string;
    time: number;
    main_chain: boolean;
    size: number;
    prev_block: string;
}

export interface BlockApiCalls {
    fetchBlocks: () => Promise<AxiosResponse<BaseResponse>>;
    fetchBlockDetail: (hash: string) => Promise<AxiosResponse<BaseResponse>>;
}
