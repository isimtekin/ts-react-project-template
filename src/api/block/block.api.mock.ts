import httpMock from 'common/http/http.mock';

httpMock
    .onGet('/blocks', { params: { format: 'json' } })
    .reply(200, [{ name: 'Ersin' }, { name: 'Isimtekin' }]);

httpMock.onGet(/\/rawblock\/\d+/).reply(() => {
    return [200, { id: '0fdbe681-0cc6-4702-a9e3-dac155fe25c5' }];
});
