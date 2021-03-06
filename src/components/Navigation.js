import React, { Fragment, useState } from 'react'

//@material-uo
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
//Assets
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.svg';

//internal
import clsx from 'clsx';
import routes from '../routes'
import { useStyles } from '../styles';
import MenuItem from './MenuItem';

const Navigation = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(true)

    const toggleNavigation = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Drawer 
                classes={{
                    paper: clsx(classes.navigationDrawer, 
                    !open && classes.navigationDrawerCollapse 
                ), 
            }}
                variant='permanent' 
                open={open}
            >
                <div className={clsx(classes.navigationToolbar, !open && classes.navigationToolbarCollapse)}>
                    <IconButton onClick={toggleNavigation}>
                        {open ? <ChevronLeftIcon/> : <MenuIcon />}
                        
                    </IconButton>
                </div>
                <div 
                    className={classes.navigationLogoContainer}>
                    <img 
                        className={classes.navigationLogo} 
                        src={open ? Logo1 : Logo2} 
                        alt="Quality Logo"/>
                </div>
                <List className={classes.navigationList}>
                    {routes.map((route, index) => {
                        return(
                            <Fragment>
                                {route.path === "/sign-out" && (<div className={classes.navigationSpacer}></div>)}
                                <MenuItem 
                                    label={route.label} 
                                    icon={route.icon} 
                                    activeIcon={route.activeIcon} 
                                    path={route.path}
                                />
                            </Fragment>
                         
                        );
                    })}
                    
                </List>
            </Drawer>
        </div>
    )
}

export default Navigation
