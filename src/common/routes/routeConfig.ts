import GuessLayout from '../../layout/GuessLayout';
import HomePage from '../../pages/home/HomePage';
import { IRoute } from './Routes';

export const routesPaths = {
    root: '/',
};

export const routesConfig: IRoute[] = [
    {
        exact: true,
        path: routesPaths.root,
        layout: GuessLayout,
        component: HomePage,
    },
];
