import { useAuth0 } from '@auth0/auth0-react';
import { Dropdown } from '@ei-ui-lib/components';
import { Grid } from '@ei-ui-lib/components/grid/Grid';
import { getThemeColor } from 'common/theme/colors';
import { AppTheme, ThemeType, useTheme } from 'common/theme/Theme';
import Menu from 'components/menu/Menu';
import Profile from 'components/profile/Profile';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    display: flex;
    height: 50px;
    background: ${(props: AppTheme) => getThemeColor(props).headerBg};
    border-bottom: 1px solid
        ${(props: AppTheme) => getThemeColor(props).headerBorder};
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
            <Grid fluid between>
                <Grid item desktop={6}>
                    <Menu />
                </Grid>
                <Grid item align="right" desktop={1}>
                    <Dropdown
                        onSelect={handleChangeTheme}
                        options={[
                            { label: 'Dark', key: 'dark' },
                            { label: 'Light', key: 'light' },
                        ]}
                    >
                        <span>Select Theme</span>
                    </Dropdown>
                </Grid>
                <Grid item desktop={'hidden'}>
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
