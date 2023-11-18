
import React, { useContext, useState ,useEffect} from 'react';
import { Grid, Typography, Paper, IconButton, Button, makeStyles } from '@material-ui/core';
import { Mic, MicOff, Videocam, VideocamOff,  } from '@material-ui/icons';

import { SocketContext } from '../../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    margin: '5px',
    cursor: 'pointer',
  },
}));

const ScreenShare = () => {
  const { name, callAccepted, myVideo, userVideo, call,callEnded,getUserScreen} = useContext(SocketContext);
  const classes = useStyles();

  const [isMicMuted, setIsMicMuted] = useState(true);
  const [isVideoOff, setIsVideoOff] = useState(true);

 
  const toggleMic = () => {
    if (myVideo.current.srcObject) {
      myVideo.current.srcObject.getAudioTracks().forEach((track) => {
        track.enabled = !isMicMuted;
      });
      setIsMicMuted(!isMicMuted);
    }
    console.log(myVideo);
  };
  
 

  const toggleVideo = () => {
    if (myVideo.current.srcObject) {
      myVideo.current.srcObject.getVideoTracks().forEach((track) => {
        track.enabled = !isVideoOff;
      });

      setIsVideoOff(!isVideoOff);
    }
  };
 
  

  useEffect(() => {
    // getUserMedia ();
    getUserScreen();
  },[]);

  return (
    <Grid container className={classes.gridContainer}>
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
        <video playsInline  ref={ myVideo} autoPlay className={classes.video} />
        <div className={classes.iconContainer}>
          <IconButton className={classes.icon} onClick={toggleMic}>
            {isMicMuted ? <MicOff /> : <Mic />}
          </IconButton>
          <IconButton className={classes.icon} onClick={toggleVideo}>
            {isVideoOff ? <VideocamOff /> : <Videocam />}
          </IconButton>
        </div>
      </Paper>
       
      {/* <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>ScreenShare</Typography>
        {console.log(userScreen)}
     {screenShare && <video playsInline ref={screenShare} autoPlay className={classes.video} />  } 
        <Button
          variant="contained"
          color="primary"
          className={classes.screenShareButton}
          onClick={isScreenSharing ? handleStopScreenShare : handleScreenShare }
        >
          {isScreenSharing ? 'Stop Screen Share' : 'Start Screen Share'}
        </Button>
      </Paper> */}

      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
          {console.log(userVideo)}
          <video playsInline ref={userVideo} autoPlay className={classes.video} />
        </Paper>
      )}
    </Grid>
  );
};

export default ScreenShare;