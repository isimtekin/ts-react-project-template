import { Link as RouteLink } from 'react-router-dom';
import styled from 'styled-components';
import { routesPaths } from 'common/routes/routeConfig';

const MenuStyled = styled.nav`
    display: flex;
`;

const MenuItemStyled = styled.span`
    padding: 10px;
`;

const Menu = () => {
    return (
        <MenuStyled>
            <MenuItemStyled>
                <RouteLink to={routesPaths.dashboard}>Dashboard</RouteLink>
            </MenuItemStyled>
            <MenuItemStyled>
                <RouteLink to={routesPaths.product}>Product</RouteLink>
            </MenuItemStyled>
        </MenuStyled>
    );
};

export default Menu;
