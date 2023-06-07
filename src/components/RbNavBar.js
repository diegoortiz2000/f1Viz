import {
    AppBar, MenuItem, Box, Container, IconButton, Menu, Toolbar, Typography, Button,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import React from "react";

const pages = [
    { name: 'Menu', path: '/' },
    { name: 'Analyzer', path: '/fastest-lap' },
    { name: 'Predictions', path: '/predictions' },
];

const RbNavBar = ({children}) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (<AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box
                    noWrap
                    component="img"
                    href="/"
                    sx={{
                        mr: 2, display: {xs: 'none', md: 'flex'}, height: 50,
                    }}
                    alt="Red Bull Logo."
                    src="images/logo.png"
                />
                <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom', horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top', horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: {xs: 'block', md: 'none'},
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                                <Typography textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box sx={{display: {xs: 'none', md: 'flex'}, mr: 5}}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                component={Link}
                                to={page.path}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box
                        component="img"
                        href="/"
                        sx={{
                            mr: 2, display: {xs: 'flex', md: 'none'}, flexGrow: 1, objectFit: "contain", maxHeight: 50
                        }}
                        alt="Red Bull Logo."
                        src="images/logo.png"
                    />
                    <Box sx={{
                        mr: 2, display: {xs: 'flex', md: 'none'}, flexGrow: 1, objectFit: "contain", width:'30vw'
                    }}></Box>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>);
}

export default RbNavBar;
