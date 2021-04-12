import Header from 'components/header/Header';
import 'styled-components/macro';
export interface PrivateLayoutProps {
    children: JSX.Element;
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default PrivateLayout;
