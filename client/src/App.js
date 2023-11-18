import './App.css';
import Header from './Components/Layout/Header';
import Landing from './Components/Layout/Landing';
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register';
import PrivateRoute from './Components/Routes/PrivateRoutes';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import VideoComponent from './Components/VideoComponent/VideoComponent'
import ScreenComponent from './Components/VideoComponent/ScreenComponent';
import { loadUser } from './actions/auth';
import { Fragment, useEffect } from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
 
  useEffect(()=>{
    //store is present here so we don't need to use connect() here 
    store.dispatch(loadUser());
    },[]);
    return (
      <Provider store={store}>
      <Router >
        {/* Wrap your routes with the Router component */}
       <>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Landing/>} />
        </Routes>
          <div className="container">
            {/* <Alert/> */}
          <Routes>
          <Route path="/login" element={<Login/>} /> 
           <Route path="/register" element={<Register/>}/>
        
          <Route element={<PrivateRoute/>}>
          <Route path="/video" element={<VideoComponent/>} />
          <Route path="/screen" element={<ScreenComponent/>} />
          </Route> 
         
          </Routes>
          </div>
          </>
        </Router>
        </Provider>
    );
  }
  
  export default App;
