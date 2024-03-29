import useBlockApi from 'api/block/block.api';
import { useCompMount } from '@ei-ui-lib/hooks';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export interface HomePageProps {}

const TestStyleComponent = styled.div`
    color: red;
`;

const HomePage = () => {
    const { fetchBlocks, fetchBlockDetail } = useBlockApi();

    useCompMount(async () => {
        fetchBlocks();
        fetchBlockDetail(
            '0000000000000000000136268a3201a6f2720abfd2cb669c86a36e8e10ad2303'
        );
    });
    const { t: translate } = useTranslation();
    return <TestStyleComponent>{translate('message')}</TestStyleComponent>;
};

export default HomePage;
