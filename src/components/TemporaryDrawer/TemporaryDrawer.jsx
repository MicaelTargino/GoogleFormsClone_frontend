import React, {useState} from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import GoogleLogo from '../../assets/google-logo.png';
import GoogleDocsLogo from '../../assets/google-docs.png';
import GoogleDriveLogo from '../../assets/google-drive.png';
import GoogleSheetsLogo from '../../assets/google-sheets.png';
import GoogleSlidesLogo from '../../assets/google-Slides.png';
const TemporaryDrawer = () => {
    const [state, setState] = useState({left: false});

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open })
    };

    const list = (anchor) => {
        return (
            <div>
                <List>
                    <ListItem>
                        sidebar
                    </ListItem>
                </List>
            </div>
        )
    }
    return (
        <>
            <IconButton onClick={toggleDrawer('left', true)}>
                <MenuIcon />
            </IconButton> 
            <Drawer open={state['left']} onClose={toggleDrawer("left", false)} anchor={"left"}>
                {list('left')}
            </Drawer>
        </>
    )
}

export default TemporaryDrawer