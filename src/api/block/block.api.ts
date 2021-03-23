import { useRef } from 'react';

import httpService from 'common/http/http.service';
import { BlockApiCalls } from './block.model';
import './block.api.mock';

const useBlockApi = (): BlockApiCalls => {
    const generateApiCalls = () => {
        return {
            fetchBlocks: () =>
                httpService.client.get(`blocks`, {
                    params: { format: 'json' },
                }),
            fetchBlockDetail: (hash: string) =>
                httpService.mock.get(`/rawblock/${hash}`),
        };
    };
    const blockCallsRef = useRef<BlockApiCalls>(generateApiCalls());

    return blockCallsRef.current;
};

export default useBlockApi;
