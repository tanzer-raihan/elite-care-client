import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from './../../Hooks/Auth/useAuth';
import Navigation from './../Shared/Navigation/Navigation';
import ProgressBar from './../Authentication/Progress/ProgressBar';
import { Link, NavLink, Outlet } from 'react-router-dom';

import './DashBoard.css'


const drawerWidth = 240;

function DashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { isLoading, logOut,isAdmin } = useAuth();

    const handleLogOut = () => {
        logOut();
    }
   

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List className="ms-4">
                <p><NavLink className="navLink" to='myappointment'>My Appointment</NavLink></p>
               { isAdmin && <p><NavLink className="navLink" to='makeadmin'>Make Admin</NavLink></p>}
              { isAdmin &&  <p><NavLink className="navLink" to='adddoctor'>Add Doctor</NavLink></p>}

            </List>
            <Divider />
            <List className='ms-4'>
                <p><Link className="navLink" to='/'>Home</Link></p>
                <p><Link className="navLink" to='/appointment'>Book AppointMent</Link></p>
                <button onClick={handleLogOut} className='signOutBtn'>Sign-Out</button>
            </List>
        </div>
    );



    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div >

            {!isLoading && <Box sx={{ display: 'flex' }}>
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
                            EliteCare
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
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
                    <Outlet></Outlet>

                </Box>
            </Box>}

            <div className='signInContainer d-flex justify-content-center align-items-center'>
                <div>
                    {isLoading && <ProgressBar></ProgressBar>}

                </div>
            </div>

        </div>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
