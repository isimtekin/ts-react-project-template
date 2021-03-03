import { useAuth0 } from '@auth0/auth0-react';
import { routesPaths } from 'common/routes/routeConfig';
import { Link } from 'react-router-dom';

export interface PublicLayoutProps {
    children: JSX.Element;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
    const { isAuthenticated } = useAuth0();
    return (
        <div>
            <div>
                {isAuthenticated && (
                    <Link to={routesPaths.dashboard}>Go To Dashboard</Link>
                )}
            </div>
            <div>{children}</div>
        </div>
    );
};

export default PublicLayout;
