export interface ProductDashboardProps {
    children: JSX.Element;
}

const ProductDashboard = ({ children }: ProductDashboardProps) => {
    return (
        <div>
            <div>ProductDashboard</div>
            <div>{children}</div>
        </div>
    );
};

export default ProductDashboard;
