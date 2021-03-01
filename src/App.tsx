import React from 'react';
import styled from 'styled-components';
import ThemeProvider from './common/theme/Theme';

const TestStyleComponent = styled.div`
    color: red;
`;

function App() {
    return (
        <ThemeProvider>
            <TestStyleComponent>asd</TestStyleComponent>
        </ThemeProvider>
    );
}

export default App;
