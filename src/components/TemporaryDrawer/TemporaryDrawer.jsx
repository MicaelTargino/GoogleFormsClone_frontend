import React, {useState} from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import GoogleLogo from '../../assets/google-logo.png';
import GoogleDocsLogo from '../../assets/google-docs.png';
import GoogleDriveLogo from '../../assets/google-drive.png';
import GoogleSheetsLogo from '../../assets/google-sheets.png';
import GoogleSlidesLogo from '../../assets/google-slides.png';
import GoogleFormsLogo from '../../assets/logo.png';
import Divider from '@material-ui/core/Divider';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './TemporaryDrawer.css';
const TemporaryDrawer = () => {
    const [state, setState] = useState({left: false});

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open })
    };

    const list = (anchor) => {
        return (
            <div style={{width: '250px'}} role="presentation">
                <List>
                    <ListItem>
                        <img src={GoogleFormsLogo} alt="google-logo" width={50}/>
                    </ListItem>
                </List>
                    <Divider />
                <List style={{marginLeft: '8px', marginRight: '8px', marginTop: '15px'}}>
                    <ListItem className="list_item">
                        <img src={GoogleDocsLogo} alt="google-docs-logo" width={20} height={20} />
                        <div style={{marginLeft: '5px', fontSize: '18px', fontFamily: "'OpenSans', Arial, sans-sefif",fontWeight: '500', color: 'grey'}}>
                            Docs
                        </div>
                    </ListItem>
                    <ListItem className="list_item">
                        <img src={GoogleSheetsLogo} alt="google-sheets-logo" width={20} height={20} />
                        <div style={{marginLeft: '5px', fontSize: '18px', fontFamily: "'OpenSans', Arial, sans-sefif",fontWeight: '500', color: 'grey'}}>
                            Sheets
                        </div>
                    </ListItem>
                    <ListItem className="list_item">
                        <img src={GoogleSlidesLogo} alt="google-slides-logo" width={20} height={20} />
                        <div style={{marginLeft: '5px', fontSize: '18px', fontFamily: "'OpenSans', Arial, sans-sefif",fontWeight: '500', color: 'grey'}}>
                            Slides
                        </div>
                    </ListItem>
                    <ListItem className="list_item">
                        <img src={GoogleDriveLogo} alt="google-drive-logo" width={20} height={20} />
                        <div style={{marginLeft: '5px', fontSize: '18px', fontFamily: "'OpenSans', Arial, sans-sefif",fontWeight: '500', color: 'grey'}}>
                            Drive
                        </div>
                    </ListItem>
                </List>    
                <Divider />
                <List>
                    <ListItem className="list_item">
                        < SettingsSharpIcon style={{ fontSize: '18px', marginLeft: '8px', color: '#444449' }}/>
                        <div style={{marginLeft: '5px', fontSize: '18px', fontFamily: "'OpenSans', Arial, sans-sefif",fontWeight: '500', color: 'grey'}}>
                            Settings
                        </div>
                    </ListItem>
                    <ListItem className="list_item">
                        < HelpOutlineIcon style={{ fontSize: '20px', marginLeft: '8px', color: '#444444' }}/>
                        <div style={{marginLeft: '5px', fontSize: '18px', fontFamily: "'OpenSans', Arial, sans-sefif",fontWeight: '500', color: 'grey'}}>
                            Help & feedback
                        </div>
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