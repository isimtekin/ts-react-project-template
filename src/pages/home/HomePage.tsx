import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export interface HomePageProps {}

const TestStyleComponent = styled.div`
    color: red;
`;

const HomePage = () => {
    const { t: translate } = useTranslation();
    return <TestStyleComponent>{translate('message')}</TestStyleComponent>;
};

export default HomePage;
