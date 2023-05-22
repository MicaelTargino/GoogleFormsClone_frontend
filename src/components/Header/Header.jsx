import React from 'react';
import './Header.css';
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import FormLogo from '../../assets/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import avatarImage from '../../assets/avatar.jpeg';

const Header = () => {
    return (
        <div className="header">
            <div className="header_info">
                <IconButton>
                    <MenuIcon />
                </IconButton> 
                <img src={FormLogo} alt="logo" width="40" className="form_img" />
                <div className="info">
                    Forms
                </div>
            </div>
            <div className="header_search">
                <IconButton>
                <SearchIcon />
                </IconButton>
                <input type="text" name="search" placeholder="search..." />
            </div>        
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src={avatarImage}/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header;