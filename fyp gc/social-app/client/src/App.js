import 'react-tippy/dist/tippy.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import EditProfile from './pages/profile/editprofile';
import LiveVideos from './pages/livevideos/livevideos';
import Follow from './pages/follow/follow';
import Activity from './pages/activity/activity';
import Explore from './pages/artwork/explore';
import Create from './pages/artwork/create';
import Saved from './pages/artwork/saved';
import ProtectedRoute from './protectedroute';
import ProtectedAuth from './protectedauth';

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

// import { useEffect } from 'react';
// import $ from 'jquery';

function App() {

  // useEffect(() => {
  //   if (localStorage.getItem('light')) {
  //     $("#change-link").attr("href", "../assets/css/style.css");
  //   } else {
  //     $("#change-link").attr("href", "../assets/css/dark.css");
  //   }
  //   return () => {
  //     localStorage.removeItem("light")
  //   }
  // }, [])

  return (
    <>
      <Router>
        <ProtectedRoute exact path='/' component={Home} />
        <ProtectedRoute path='/profile/:id' component={Profile} />
        <ProtectedRoute path='/edit-profile/:id' component={EditProfile} />
        <ProtectedRoute path='/follows/:id' component={Follow} />
        <ProtectedRoute path='/live-videos/:id' component={LiveVideos} />
        <ProtectedRoute path='/activity/:id' component={Activity} />
        <ProtectedRoute path='/explore/:id' component={Explore} />
        <ProtectedRoute path='/create/:id' component={Create} />
        <ProtectedRoute path='/saved/:id' component={Saved} />
        <ProtectedAuth path='/login' component={Login} />
        <ProtectedAuth path='/register' component={SignUp} />
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme={"dark"}
      />
    </>
  );
}

export default App;
