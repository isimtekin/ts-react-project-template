import { useAuth0 } from '@auth0/auth0-react';
import { Grid } from 'components/grid/Grid';
import Menu from 'components/menu/Menu';
import Profile from 'components/profile/Profile';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    display: flex;
    height: 50px;
    background: #dadada;
`;

export interface HeaderProps {}

const Header = () => {
    const { logout, isAuthenticated, user } = useAuth0();

    return (
        <HeaderStyled>
            <Grid container justify="space-between">
                <Grid item>
                    <Menu />
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Profile name={user?.name} />
                        </Grid>
                        <Grid item>
                            {isAuthenticated && (
                                <button onClick={() => logout()}>Logout</button>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </HeaderStyled>
    );
};

export default Header;
