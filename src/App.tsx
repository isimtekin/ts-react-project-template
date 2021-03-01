import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ThemeProvider from './common/theme/Theme';

const TestStyleComponent = styled.div`
    color: red;
`;

function App() {
    const { t: translate } = useTranslation();
    return (
        <ThemeProvider>
            <TestStyleComponent>{translate('message')}</TestStyleComponent>
        </ThemeProvider>
    );
}

export default App;
