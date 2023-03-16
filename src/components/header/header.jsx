import React from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

  function Header() {
  return (
    <div className='header'>
        <div className='fbox'>
            <div className='f1box'>
            <MenuIcon />
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
                <div className='t22box'><AccountCircleIcon /></div>
            </div>
        </div>
    </div>
  )
}

export default Header

