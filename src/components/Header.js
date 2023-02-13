import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import glogo from '../assets/glogo.png'
import SearchIcon from '@mui/icons-material/Search';
import './header.css'
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import proimg from '../assets/profile.jpg'
import SideBar from './SideBar';
function Header() {
    const [left, setleft] = React.useState(false);
  return (
    <>
        <div className="header">
            <div className="header-icons">
                <IconButton>
                    <MenuIcon onClick={()=>{setleft(true)}}/>
                    {left==true && <SideBar left={left} funcsetleft={setleft}/>}
                </IconButton>
                <img src={glogo} alt="formicon"/>
                <p style={{color:"GrayText",fontSize:"22px"}}>Forms</p>
            </div>
            <div className="header-search">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input type="search" placeholder='Search'/>
            </div>
             
            <div className="header-avt">
                <IconButton>
                      <AppsIcon />
                </IconButton>
                <Avatar className='avt_img' alt="Remy Sharp" src={proimg} />
            </div>
        </div>
    </>
  )
}

export default Header