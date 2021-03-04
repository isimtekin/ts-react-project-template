import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import config from 'config';
import useAppAuth0 from './useAppAuth0';

interface Auth0ProviderWithHistoryProps {
    children: React.ReactNode;
}
const Auth0ProviderWithHistory = ({
    children,
}: Auth0ProviderWithHistoryProps) => {
    const { onRedirectCallback } = useAppAuth0();

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
