import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useState } from 'react';
import EChakriLogo from '../../assets/EChakri.svg';
import { Rowing } from '@mui/icons-material';

const HeaderButton = ({ icon, text }) => {
  return (
    <Button
      variant='text'
      color='inherit'
      startIcon={icon}
      sx={{
        '&:hover': {
          textDecoration: 'underline',
          bgcolor: 'transparent',
        },
        textTransform: 'none',
      }}
    >
      {text}
    </Button>
  );
};

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        position='static'
        color='default'
        sx={{ bgcolor: '#ffff' }}
        elevation={false}
      >
        <Toolbar>
          <Stack
            sx={{
              flexGrow: 1,
              '& img': {
                maxWidth: { xs: '120px', md: '160px' }, // Adjust the sizes based on breakpoints
              },
            }}
          >
            <img
              src={EChakriLogo}
              alt='EChakri Logo'
              //style={{ maxWidth: '160px' }}
            />
          </Stack>
          <Stack direction={'row'} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <HeaderButton
              icon={<SearchIcon sx={{ marginRight: '-4px' }} />}
              text='Jobsuche'
            />
            <HeaderButton
              icon={<EmojiEventsOutlinedIcon sx={{ marginRight: '-4px' }} />}
              text='Karriereguide'
            />
            <HeaderButton
              icon={<HelpOutlineIcon sx={{ marginRight: '-4px' }} />}
              text='Hilfe-Center'
            />
            <Divider
              orientation='vertical'
              variant='middle'
              flexItem
              sx={{ mx: 2, borderRightWidth: 1 }}
            />
          </Stack>

          <Button
            id='headerButton'
            onClick={handleClick}
            aria-controls={open ? 'headerMenu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            variant='contained'
            size='medium'
            endIcon={
              open ? (
                <KeyboardArrowUpOutlinedIcon
                  sx={{ display: { xs: 'none', md: 'flex' } }}
                />
              ) : (
                <ExpandMoreOutlinedIcon
                  sx={{ display: { xs: 'none', md: 'flex' } }}
                />
              )
            }
            sx={{
              '&:hover': {
                bgcolor: '#263239',
              },
              textTransform: 'none',
              bgcolor: '#5A6E79',
              borderRadius: '8px',
              marginLeft: '8px',
            }}
          >
            Login
          </Button>

          <Menu
            id='headerMenu'
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{ 'aria-labelledby': 'headerButton' }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            variant='menu'
            PaperProps={{
              sx: {
                width: '228px', // Adjust width

                my: '8px',
                borderRadius: '8px',
              },
            }}
            elevation={4}
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                bgcolor: '#337EDD',
                color: '#ffffff',
                my: '12px',
                mx: '22px',
                marginTop: '8px',
                marginBottom: '12px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center', // Align content horizontally
                alignItems: 'center', // Align content vertically
                '&:hover': {
                  bgcolor: '#1565C0',
                },
              }}
            >
              Einloggen
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                bgcolor: '#5A6E79',
                color: '#ffffff',
                marginTop: '8px',
                marginBottom: '12px',
                mx: '22px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center', // Align content horizontally
                alignItems: 'center', // Align content vertically
                '&:hover': {
                  bgcolor: '#263239',
                },
              }}
            >
              Profil erstellen
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handleClose}
              sx={{
                bgcolor: 'transparent',
                color: '#5A6E79',
                marginTop: '12px',
                marginBottom: '8px',
                mx: '22px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center', // Align content horizontally
                alignItems: 'center', // Align content vertically
                '&:hover': {
                  bgcolor: '#DFE4E7',
                },
              }}
            >
              Für Arbeitgeber
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Divider sx={{ mx: { xs: 0, md: 2 }, borderRightWidth: 2 }} />
      <div>frufifnkscks</div>
    </>
  );
};

export default Header;
