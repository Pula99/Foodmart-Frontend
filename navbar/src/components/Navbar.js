import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { navigateToUrl } from "single-spa";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = ['Home', 'Shop', 'About us'];
const settings = ['Profile', 'Cart'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavClick = (page) => {
    handleCloseNavMenu();
    switch (page) {
      case 'Home':
        navigateToUrl('/');
        break;
      case 'Shop':
        navigateToUrl('/shop');
        break;
      case 'About us':
        navigateToUrl('/aboutUs');
        break;
      default:
        break;
    }
  };

  const handleProfileNavClick = (settings) => {
    handleCloseUserMenu();
    switch (settings) {
      case 'Profile':
        navigateToUrl('/profile');
        break;
      case 'Cart':
        navigateToUrl('/cart');
        break;
      default:
        break;
    }
  };


  const handleLogin = () => {
    navigateToUrl('/login');
  };

  const handleLogout = () => {

    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userCartId');
    setIsLoggedIn(false);
    navigateToUrl('/');
    window.location.reload();
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#45523e" }}>
      <Container maxWidth="false">
        <Toolbar disableGutters>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'left' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavClick(page)}
                sx={{ my: 2, color: 'white', display: 'block', mx: 2 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 65,
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              fontFamily: 'serif',
              fontWeight: 700,
              letterSpacing: '1rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            FOODMART
          </Typography>

          {/* Mobile version */}


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                ml: 3,
                my:1,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                justifyContent: 'center',
                fontFamily: 'serif',
                fontWeight: 500,
                fontSize:"1.4rem",
                letterSpacing: '.4rem',
                color: 'inherit',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              FOODMART
            </Typography>

          </Box>

          {/* User Account */}

          {isLoggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
                  <AccountCircleIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleProfileNavClick(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Button onClick={handleLogin} color="inherit">
                Login
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
