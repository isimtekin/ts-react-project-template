import { AppState } from '@auth0/auth0-react';
import { useHistory, useLocation } from 'react-router';

export default function useAppAuth0() {
    const history = useHistory();
    const location = useLocation();
    const onRedirectCallback = (appState: AppState) => {
        history.push(appState?.targetUrl || window.location.pathname);
    };
    return { onRedirectCallback, targetUrl: location.pathname };
}
