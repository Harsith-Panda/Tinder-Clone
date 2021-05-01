import React from 'react';
import "./Header.css";
import AccountIcon from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';
import AppIcon from '@material-ui/icons/EmojiEmotions';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header">
            <IconButton>
                <AccountIcon fontSize="large" className="header-f-icon"/>
            </IconButton>
            <AppIcon fontSize="large" className='App-Logo'/>
            <IconButton>
                <ForumIcon />
            </IconButton>
        </div>
    )
}

export default Header;
