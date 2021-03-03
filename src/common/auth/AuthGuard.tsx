import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

export interface AuthGuardProps {
    children?: JSX.Element;
}

export default function AuthGuard({ children }: AuthGuardProps): JSX.Element {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    const location = useLocation();
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect({
                appState: {
                    targetUrl: location.pathname,
                },
            });
        }
    }, [isLoading, isAuthenticated, loginWithRedirect]);
    return isLoading ? (
        <h1>authorizing</h1>
    ) : !isAuthenticated ? (
        <h1>redirecting</h1>
    ) : (
        <>{children}</>
    );
}
