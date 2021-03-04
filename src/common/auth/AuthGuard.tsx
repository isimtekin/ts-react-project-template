import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import useAppAuth0 from './useAppAuth0';

export interface AuthGuardProps {
    children?: JSX.Element;
}

export default function AuthGuard({ children }: AuthGuardProps): JSX.Element {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    const { targetUrl } = useAppAuth0();
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect({
                appState: {
                    targetUrl,
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
