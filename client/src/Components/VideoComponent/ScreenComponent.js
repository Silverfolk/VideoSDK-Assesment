import React, { useEffect } from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import Sidebar from './Options';
import Notifications from './PopUp';
import ScreenShare from './ScreenShare';
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const ScreenComponent = () => {
  const classes = useStyles();
  
  useEffect(() => {

  },[])
  return (
    <>
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Screen SDK</Typography>
      </AppBar>
    <ScreenShare />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
    
    </>
  );
};

export default ScreenComponent;