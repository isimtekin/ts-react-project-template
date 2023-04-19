import { memo } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import styled from 'styled-components';
import { routesPaths } from 'common/routes/routeConfig';
import { getThemeColor } from 'common/theme/colors';
import { AppTheme } from 'common/theme/Theme';

const MenuStyled = styled.nav`
    display: flex;
`;

const MenuItemStyled = styled.span`
    padding: 10px;
    a {
        color: ${(props: AppTheme) => getThemeColor(props).headerMenuItem};
    }
`;

const Menu = () => {
    return (
        <MenuStyled>
            <MenuItemStyled>
                <RouteLink to={routesPaths.dashboard}>Dashboard</RouteLink>
            </MenuItemStyled>
            <MenuItemStyled>
                <RouteLink to={routesPaths.product}>Productt</RouteLink>
            </MenuItemStyled>
        </MenuStyled>
    );
};

export default memo(Menu);
