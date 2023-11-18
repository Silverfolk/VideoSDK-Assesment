import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

// const socket = io('http://localhost:5000');
const socket = io('https://metal-assesment-backend.onrender.com');

const ContextProvider =  ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const myVideo = useRef(null);
  const userVideo = useRef();
  const connectionRef = useRef();
 
 
  useEffect(() => {
   
    socket.on('me', (id) => setMe(id));

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
   
    const peer = new Peer({ initiator: true, trickle: false, stream });
    // console.log(peer.streams);
    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });
    
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };


 

  

  const getUserMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({video: true,audio:true});
      
       
      setStream(stream);
        myVideo.current.srcObject =stream;
    
       
    } catch (err) {
      console.log(err);
    }
  };

  const getUserScreen= async () =>{
    try {
      var displayMediaOptions = {
        video: {
            cursor: "always"
        },
        audio: false
    };
      const stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      setStream(stream);
      myVideo.current.srcObject =stream;
       
    } catch (err) {
      console.log(err);
    }
  }

  

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
      getUserMedia,
      getUserScreen
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };