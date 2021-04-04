import { useAuth0 } from '@auth0/auth0-react';
import { Dropdown } from '@ei-ui-lib/components';
import { Grid } from '@ei-ui-lib/components/grid/Grid';
import { ThemeType, useTheme } from 'common/theme/Theme';
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
    const { changeTheme } = useTheme();

    const handleChangeTheme = (theme: ThemeType) => {
        changeTheme(theme);
    };

    return (
        <HeaderStyled>
            <Grid fluid>
                <Grid item desktop={11}>
                    <Menu />
                </Grid>
                <Grid item>
                    <Dropdown
                        onSelect={handleChangeTheme}
                        options={[
                            { label: 'Default', key: 'default' },
                            { label: 'Dark', key: 'dark' },
                            { label: 'Light', key: 'light' },
                        ]}
                    >
                        <span>Select Theme</span>
                    </Dropdown>
                </Grid>
                <Grid item desktop={1}>
                    <Grid row>
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
