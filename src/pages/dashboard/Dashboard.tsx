import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export interface DashboardProps {}

const TestStyleComponent = styled.div`
    color: red;
`;

const Dashboard = () => {
    const { t: translate } = useTranslation();
    return <TestStyleComponent>{translate('message')}</TestStyleComponent>;
};

export default Dashboard;
