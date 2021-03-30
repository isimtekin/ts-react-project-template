import Auth0ProviderWithHistory from 'common/auth/Auth0ProviderWithHistory';
import { HomePageProps } from 'pages/home/HomePage';
import React, { Fragment, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { routesConfig } from './routeConfig';

export interface IRoute {
    exact?: boolean;
    path: string;
    component?: any;
    layout?: any;
    guard?: any;
    routes?: IRoute[];
}

type PageTypes = HomePageProps;

const renderRoutes = (routes: IRoute[]) =>
    routes ? (
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                {routes.map((route) => {
                    const Guard = route.guard || Fragment;
                    const Layout = route.layout || Fragment;
                    const Component = route.component || Fragment;

                    const renderContent = (props: PageTypes) => {
                        return route.routes ? (
                            <Component {...props}>
                                {renderRoutes(route.routes)}
                            </Component>
                        ) : (
                            <Component {...props} />
                        );
                    };

                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            render={(props: PageTypes) => (
                                <Guard>
                                    <Layout>{renderContent(props)}</Layout>
                                </Guard>
                            )}
                        />
                    );
                })}
            </Switch>
        </Suspense>
    ) : null;

function Routes() {
    return (
        <Router>
            <Auth0ProviderWithHistory>
                {renderRoutes(routesConfig)}
            </Auth0ProviderWithHistory>
        </Router>
    );
}

export default Routes;
