import AuthGuard from 'common/auth/AuthGuard';
import GlobalErrorLayout from 'layout/GlobalErrorLayout';
import PrivateLayout from 'layout/PrivateLayout';
import PublicLayout from 'layout/PublicLayout';
import NotFoundPage from 'pages/error/NotFoundPage';
import ProductDashboard from 'pages/product/ProductDashboard';
import ProductDetail from 'pages/product/ProductDetail';
import ProductList from 'pages/product/ProductList';
import HomePage from '../../pages/home/HomePage';
import { IRoute } from './Routes';

export const routesPaths = {
    root: '/',
    dashboard: '/dashbord',
    product: '/product',
    productList: '/product/list',
    productDetail: '/product/detail/:id',
};

export const routesConfig: IRoute[] = [
    {
        exact: true,
        path: routesPaths.root,
        layout: PublicLayout,
        component: HomePage,
    },
    {
        exact: true,
        path: routesPaths.dashboard,
        layout: PrivateLayout,
        component: HomePage,
    },
    {
        path: routesPaths.product,
        guard: AuthGuard,
        layout: PrivateLayout,
        component: ProductDashboard,
        routes: [
            {
                exact: true,
                path: `(${routesPaths.product}|${routesPaths.productList})`,
                component: ProductList,
            },
            {
                exact: true,
                path: routesPaths.productDetail,
                component: ProductDetail,
            },
        ],
    },
    {
        exact: false,
        path: '*',
        layout: GlobalErrorLayout,
        component: NotFoundPage,
    },
];
