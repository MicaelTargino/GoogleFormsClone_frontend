import React, {useState} from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const TemporaryDrawer = () => {
    const [state, setState] = useState({left: false});

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open })
    };
    return (
        <>
            <IconButton onClick={toggleDrawer('left', true)}>
                <MenuIcon />
            </IconButton> 
            <Drawer open={state['left']} onClose={toggleDrawer("left", false)} anchor={"left"}>

            </Drawer>
        </>
    )
}

export default TemporaryDrawer