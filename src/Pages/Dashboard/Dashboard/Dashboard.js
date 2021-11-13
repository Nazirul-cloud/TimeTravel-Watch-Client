import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {

  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin, user, logout} = useAuth();
  let { path, url } = useRouteMatch();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
     <Box sx={{ display: 'flex', flexDirection: 'column', borderBottom: 2 }}>
     <Link style={{ textDecoration: 'none'}} to='/myorders'><Button color="inherit">My Orders</Button></Link>
     <Link style={{ textDecoration: 'none'}} to='/payment'><Button color="inherit">Payment</Button></Link>
     <Link style={{ textDecoration: 'none'}} to='/addReview'><Button color="inherit">Add Review</Button></Link>
      <Link style={{ textDecoration: 'none'}} to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
    </Box>
     { admin &&  <Box>

       
        <Link style={{ textDecoration: 'none'}} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
        <Link style={{ textDecoration: 'none'}} to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
        <Link style={{ textDecoration: 'none'}} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
        <Link style={{ textDecoration: 'none'}} to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link>
        
        </Box>
      }
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
           <Button onClick={logout} sx={{mx: 'auto', border:1}} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin/>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct/>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders/>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts/>
          </AdminRoute>
        </Switch>
    
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
