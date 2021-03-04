import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import config from 'config';

interface Auth0ProviderWithHistoryProps {
    children: React.ReactNode;
}
const Auth0ProviderWithHistory = ({
    children,
}: Auth0ProviderWithHistoryProps) => {
    const history = useHistory();

    const onRedirectCallback = (appState: AppState) => {
        history.push(appState?.targetUrl || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={config.auth0.domain}
            clientId={config.auth0.clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;
