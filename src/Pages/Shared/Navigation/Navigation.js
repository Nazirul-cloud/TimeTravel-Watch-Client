import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import useAuth from '../../../hooks/useAuth';
let style = {

    backgroundColor: 'gray'
};


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={style} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} style={{height: '50px'}}/>
                    <Typography  
                        variant="h2" 
                        component="div" 
                        sx={{ flexGrow: 1, color: 'text.secondary' }}
                        >
                        <span style={{color:'goldenrod'}}>Time</span>Travel
                     </Typography>
                    <Box sx={{ flexGrow: 1}} />
                     <Box sx={{ display: { xs: 'flex', md: 'flex' }, flexWrap: 'wrap' }}>
                     <Link style={{ textDecoration: 'none', color: 'white'}}  to="/home"><Button color="inherit">Home</Button></Link>
                     <Link style={{ textDecoration: 'none', color: 'white'}}  to="/explore"><Button color="inherit">Explore</Button></Link>
                   
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                  
                     <Typography  variant="h8" component="div" >
                     <a href="#login" style={{textDecoration: 'none'}}> <img style={{width:"15%", borderRadius: "50%" }} className="rounded-circle mx-2" src={user.photoURL} alt="" /> {user?.displayName}</a>
                    </Typography>
                   
                    </Box>
              
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;