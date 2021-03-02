import { createBrowserHistory } from 'history';
import React, { Fragment, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { HomePageProps } from '../../pages/home/HomePage';
import { routesConfig } from './routeConfig';

export const history = createBrowserHistory();

export interface IRoute {
    exact?: boolean;
    path: string;
    component: any;
    layout?: any;
    guard?: any;
    guardOptions?: any;
    routes?: IRoute[];
}

type PageTypes = HomePageProps;

const renderRoutes = (routes: IRoute[]) =>
    routes ? (
        <Switch>
            {routes.map((route, i) => {
                const Guard = route.guard || Fragment;
                const Layout = route.layout || Fragment;
                const Component = route.component;
                const guardOptions: any = {};

                if (route?.guard) {
                    guardOptions.options = route.guardOptions;
                }

                const renderContent = (props: PageTypes) => {
                    return route.routes ? (
                        renderRoutes(route.routes)
                    ) : (
                        <Component {...props} />
                    );
                };

                return (
                    <Suspense fallback={<div>loading...</div>}>
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            render={(props: PageTypes) => (
                                <Guard {...guardOptions}>
                                    <Layout>{renderContent(props)}</Layout>
                                </Guard>
                            )}
                        />
                    </Suspense>
                );
            })}
        </Switch>
    ) : null;

function Routes() {
    return <Router history={history}>{renderRoutes(routesConfig)}</Router>;
}

export default Routes;
