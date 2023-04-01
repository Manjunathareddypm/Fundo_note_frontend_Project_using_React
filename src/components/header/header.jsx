import React from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { Link, redirect } from "react-router-dom";
import Grid from '@mui/material/Grid';


  function Header(props) {
    const icons = () => {
        props.listenToHeader()
    }

    function deleteToken() {
        localStorage.removeItem("token");
        return redirect("/");

        // return <Navigate to="/" />;
      }
  return (
    
    <div className='header'>
        <div className='fbox'>
            <div className='f1box'>
            <MenuIcon  onClick={icons}/>
            </div>
            <div className='f2box'>
                <div className='f21box'>
                <img
            class="keep_logo"
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            alt="error"
          />
                </div>
                <div className='f22box'>Keep</div>
            </div>
        </div>
        <div className='sbox'>
            <div className='s1box'><SearchIcon /></div>
            <div className='serbox'><input className='serbox1' type="text" placeholder="search" /></div>
            {/* <div className='s2box'><a>&#9932;</a></div> */}
        </div>
        <div className='tbox'>
            <div className='t1box'>
                <div className='t11box'><RefreshIcon /></div>
                <div className='t12box'><ViewStreamIcon /></div>
                <div className='t13box'><SettingsIcon/></div>
            </div>
            <div className='t2box'>
            <div className='t21box'><AppsIcon /></div>
                <div className='t22box'>
                <Link variant="outlined" onClick={deleteToken} href='/'>
                <AccountCircleIcon /></Link>
                </div>
            </div>
        </div>
         </div>
  )
}

export default Header

