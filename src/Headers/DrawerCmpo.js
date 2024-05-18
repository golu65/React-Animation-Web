import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import React, { Fragment, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

const DrawerCmpo = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <Fragment>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List style={{background:'black'}}>


                    <ListItemButton >
                        <ListItemIcon >
                            <>
                                <Link to='/celebrities' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                    <ListItemText sx={{ fontSize: '2rem', marginTop: '2rem', cursor:'pointer'  }}>Celebrities</ListItemText>
                                </Link>



                            </>

                        </ListItemIcon>
                    </ListItemButton>



                </List>
                <List style={{background:'black'}}>


                    <ListItemButton >
                        <ListItemIcon style={{ color: 'black' }}>
                            <>


                                <Link to='/booking' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                    <ListItemText sx={{ fontSize: '2rem', marginTop: '2rem', cursor:'pointer'  }}>Join Community</ListItemText>
                                </Link>



                            </>

                        </ListItemIcon>
                    </ListItemButton>




                </List>

                <List style={{background:'black'}}>


                    <ListItemButton >
                        <ListItemIcon style={{ color: 'black' }}>
                            <>



                                <Link to='/celebrities' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                    <ListItemText sx={{ fontSize: '2rem', marginTop: '2rem', cursor:'pointer' }}>About Us</ListItemText>
                                </Link>



                            </>

                        </ListItemIcon>
                    </ListItemButton>




                </List>

                <List style={{background:'black'}}>


                    <ListItemButton >
                        <ListItemIcon style={{ color: 'black' }}>
                            <>





                                <Link to='/booking' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                    <ListItemText sx={{ fontSize: '2rem', marginTop: '2rem', cursor:'pointer' }}>Book Your Celebrity</ListItemText>
                                </Link>

                            </>

                        </ListItemIcon>
                    </ListItemButton>



                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>
        </Fragment>
    )
}

export default DrawerCmpo
