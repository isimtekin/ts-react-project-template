import React from 'react';
import Routes from './common/routes/Routes';
import ThemeProvider from './common/theme/Theme';
import './common/global-state/GlobalState';

function App() {
    return (
        <ThemeProvider>
            <Routes />
        </ThemeProvider>
    );
}

export default App;
