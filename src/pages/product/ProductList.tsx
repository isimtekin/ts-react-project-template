import { routesPaths } from 'common/routes/routeConfig';
import { Link } from 'react-router-dom';

export interface ProductListProps {
    children: JSX.Element;
}

const ProductList = () => {
    return (
        <div>
            <Link
                to={routesPaths.productDetail.replace(
                    ':id',
                    '8410a3fd-0080-43e9-8a9d-b0a7c04aeed3'
                )}
            >
                Product Detail
            </Link>
        </div>
    );
};

export default ProductList;
