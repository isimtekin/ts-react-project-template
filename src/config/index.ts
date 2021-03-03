export interface AppCofig {
    appPrefix: string;
    appName: string;
    auth0: {
        domain: string;
        clientId: string;
        audience: string;
    };
}

const config: AppCofig = {
    appPrefix: process.env.REACT_APP_PREFIX || 'ei-project',
    appName: process.env.REACT_APP_NAME || 'ei-ts-react-template',
    auth0: {
        domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
        clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
        audience: process.env.REACT_APP_AUTH0_AUDIENCE || '',
    },
};

export default config;
