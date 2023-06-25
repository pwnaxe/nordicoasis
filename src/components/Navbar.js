import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/logo.png';
import { useTheme } from '@mui/system';
import { Link } from 'react-router-dom';
const pages = ['O nas', 'Nasza oferta', 'Subskrybcja', 'Kontakt',];
const settings = ['Profil', 'Konto', 'Pulpit', 'Wyloguj się'];

function Navbar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const MenuItemLink = ({ text }) => (
    <MenuItem onClick={handleCloseNavMenu}>
      <Typography textAlign="center">
        <Link to={`/${text.toLowerCase()}`} sx={{ color: 'white', }}>
          {text}
        </Link>
      </Typography>
    </MenuItem>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        placeItems: 'center',
        width: "95%",
        minHeight: "64px",
        borderRadius: "15px",
        m: 'auto'
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <img src={logo} alt="Company Logo" style={{ height: '40px', display: 'none', marginRight: '16px', [theme.breakpoints.up('md')]: { display: 'block' } }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItemLink key={page} text={page} />
              ))}
            </Menu>
          </Box>
          <img src={logo} alt="Company Logo" style={{ height: '40px', display: { xs: 'block', md: 'none' }, marginRight: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Lato',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Nordic Oasis
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page.toLowerCase()}`}
                sx={{ color: 'white' }}
              >
                <Button style={{ color: 'white' }}>{page}</Button>
              </Link>
            ))}
          </Box>
          <Tooltip title="User Settings">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-user"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              <Avatar sx={{ width: 24, height: 24 }}>H</Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            id="menu-user"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography sx={{ color: 'inherit' }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;




