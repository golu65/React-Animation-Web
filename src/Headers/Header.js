import React, { Fragment } from 'react'
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import DrawerCmpo from './DrawerCmpo';
import { Link } from 'react-router-dom';
const Header = () => {
    const theme = useTheme();
    const isMath = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Fragment>
            <AppBar position="fixed" >
                <Toolbar style={{ background: 'black' }}>
                    {
                        isMath ? (
                            <>
                                <Typography variant="h5" component="div" sx={{ flexGrow: 20 }} className="header__item--desktop">
                                    <Link to='/' style={{ color: 'white', textDecoration: 'none' }} >
                                        Star Clinch
                                    </Link>
                                </Typography>
                                <DrawerCmpo />
                            </>
                        ) : (
                            <>
                                <Typography variant="h4" component="div" sx={{ flexGrow: 20 }} className="header__item--desktop">
                                    <Link to='/' style={{ color: 'white', textDecoration: 'none' }} >
                                        Star Clinch
                                    </Link>
                                </Typography>
                                {
                                    <>
                                        <Link to='/celebrities' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header__item--desktop" >Celebrities
                                            </Typography>
                                        </Link>
                                        <Link to='/booking' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header__item--desktop" >Join Community
                                            </Typography>
                                        </Link>
                                        <Link to='/celebrities' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header__item--desktop" >About Us
                                            </Typography>
                                        </Link>


                                        <Link to='/booking' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header__item--desktop" >Book Your Celebrity
                                            </Typography>
                                        </Link>
                                    </>
                                }
                            </>
                        )
                    }

                </Toolbar>
            </AppBar>
        </Fragment>
    )
}
export default Header
