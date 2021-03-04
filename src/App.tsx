import React from 'react';
import Routes from './common/routes/Routes';
import ThemeProvider from './common/theme/Theme';
import { Helmet } from 'react-helmet';
import { useGlobalState } from './common/global-state/GlobalState';

function App() {
    const [store] = useGlobalState();

    return (
        <>
            <Helmet>
                <title>{store.pageTitle}</title>
            </Helmet>
            <ThemeProvider>
                <Routes />
            </ThemeProvider>
        </>
    );
}

export default App;
