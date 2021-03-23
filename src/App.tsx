import React from 'react';
import Routes from './common/routes/Routes';
import ThemeProvider from './common/theme/Theme';
import { Helmet } from 'react-helmet';
import { useGlobalState } from './common/global-state/GlobalState';
import { logger } from 'common/logger/logger.service';
import { LogType } from 'common/logger/logger.constant';

function App() {
    const [store] = useGlobalState();
    logger.log(LogType.Info, 'Application initalized!');
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
