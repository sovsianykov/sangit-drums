import React, { Component } from 'react';
import './Layout.scss';
import { Box, List, Divider, ListItem, ListItemIcon, ListItemText, Hidden, Drawer, Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
// import Help from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
    ContactsRoute,
    MusicRoute,
    PhotoRoute,
    WhoIsRoute,
    EducationProgramRoute,
    HomeRoute,
    AboutMeRoute
} from '../Routing';
import { Link } from "react-router-dom";
import {
    DescriptionOutlined,
    Create,
    DirectionsWalk,
    PhotoAlbum,
    ContactMail, AudiotrackOutlined,
} from "@material-ui/icons";
// import { audio1 } from "../Pages/Projects/Projects";
const drawerWidth = 250;
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fefefe',
        },
        secondary: {
            main: "rgba(23, 37, 42, 1)",
        },
    },
});
const styles = theme => ({
    root: {
        display: 'flex',
    },
    phone : {
        color: 'white',
        textDecoration : 'none',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgba(23, 37, 42, 1)",
        color: "#fefefe",
        border: "none",
    },
    content: {
        flexGrow: 1,
        minHeight: "100vh",
    },
    icon: {
        color: "#fefefe",
    },
    toolbar: theme.mixins.toolbar,
});
class Layout extends Component {
    state = {
        mobileOpen: false,
    };
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
    menuButton = {
        display: "block"
    };

    // handleSoundOff=()=>{
    //     audio1.pause()
    //     console.log('pause')
    // }
    render() {
        const { classes } = this.props;
        const { mobileOpen } = this.state;
        const drawer = (
            <div id="drawer-container">
                 <List>
                     <ListItem   component={Link} to={ HomeRoute }
                           onClick={mobileOpen ? this.handleDrawerToggle : null} className="logo-drawer" >

                     </ListItem>
                 </List>
                <List>
                    {/*<ListItem button component={Link} to={HomeRoute}*/}
                    {/*          onClick={mobileOpen ? this.handleDrawerToggle : null}>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        <HomeOutlined className={classes.icon} />*/}
                    {/*    </ListItemIcon>*/}
                    {/*    <ListItemText primary="Главная" />*/}
                    {/*</ListItem>*/}
                    <Divider />
                    <ListItem
                    button component={Link} to={ WhoIsRoute }
                    onClick={mobileOpen ? this.handleDrawerToggle : null}>
                    <ListItemIcon>
                        <MenuIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="О проекте" />
                </ListItem>
                    <ListItem
                        button component={Link} to={ AboutMeRoute }
                        onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            <PersonIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Обо мне" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link} to={ EducationProgramRoute }
                        onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            <Create className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Программы" />
                    </ListItem>
                    <ListItem
                        button
                        // component={Link} to={VideoRoute}
                        onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            < DirectionsWalk  className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary=" Видеоуроки" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link} to={ MusicRoute }
                        onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            <AudiotrackOutlined className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Музыка" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link} to={ PhotoRoute }
                        onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            < PhotoAlbum  className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Фото" />
                    </ListItem>
                    <ListItem
                        button component={Link} to='/main-articles'
                        onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            <DescriptionOutlined className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary="Статьи" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link} to={ ContactsRoute }
                        onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            < ContactMail  className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Контакты" />
                    </ListItem>
                    <ListItem style={{ marginTop : 10}}
                        button component={Link} to='/new'
                        onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            {/*<NewReleasesOutlined className={classes.icon}  />*/}
                        </ListItemIcon>
                        <ListItemText secondary="post"   />
                    </ListItem>
                    {/*<ListItem style={{ marginTop : 10, cursor : 'pointer'}}*/}

                    {/*          onClick={this.handleSoundOff}>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        < VolumeOff className={classes.icon}  />*/}
                    {/*    </ListItemIcon>*/}
                    {/*    <ListItemText  primary="sound-off"   />*/}
                    {/*</ListItem>*/}
                </List>
            </div>
        );
        return (
            <div>
                <div id="main-background" />
                <div id="main-layout">
                    <MuiThemeProvider theme={theme}>
                        <div className={classes.root} >
                            <Hidden mdUp implementation="css">
                                <AppBar position="fixed" color="secondary">
                                    <Toolbar>
                                        <IconButton
                                            color="inherit"
                                            aria-label="Open drawer"
                                            onClick={this.handleDrawerToggle}
                                            className={classes.menuButton}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Typography variant="h6" color="inherit" className={classes.title}>
                                            <a href="tel:+380669658925" className={classes.phone} > +38-066-9658925</a>
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </Hidden>
                            <nav className={classes.drawer}>
                                <Hidden mdUp implementation="css">
                                    <Drawer
                                        color="primary"
                                        className={classes.drawer}
                                        variant="temporary"
                                        open={mobileOpen}
                                        onClose={this.handleDrawerToggle}
                                        classes={{
                                            paper: classes.drawerPaper,
                                        }}
                                        anchor="left"
                                    >
                                        {drawer}
                                    </Drawer>
                                </Hidden>
                                <Hidden smDown implementation="css">
                                    <Drawer
                                        classes={{
                                            paper: classes.drawerPaper,
                                        }}
                                        variant="permanent"
                                        open
                                    >
                                        {drawer}
                                    </Drawer>
                                </Hidden>
                            </nav>
                            <main className={classes.content}>
                                <Hidden mdUp implementation="css"><div className={classes.toolbar} /></Hidden>
                                <Box width="100%" className="mainContent">{this.props.children}</Box>
                            </main>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(Layout)
