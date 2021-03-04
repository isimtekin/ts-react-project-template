import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
export interface ProductDetailProps {
    children: JSX.Element;
}

const ProductDetail = () => {
    const param: { id: string } = useParams();

    const fetchProductDetail = useCallback(async (id) => {
        console.log(id);
    }, []);

    useEffect(() => {
        fetchProductDetail(param.id);
    }, [param]);
    return (
        <div>
            <div>ProductDetail</div>
        </div>
    );
};

export default ProductDetail;
