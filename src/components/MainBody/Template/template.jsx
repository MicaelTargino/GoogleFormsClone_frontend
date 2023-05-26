import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton} from '@material-ui/core';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import './template.css';
import Blank from '../../../assets/blank.png';
import {v4 as uuid} from 'uuid';
import { useNavigate } from 'react-router-dom';
const Template = () => {
    const Nav = useNavigate();
    const createForm = () => {
        const id = uuid();
        Nav(`form/${id}`)
    }
    return (
        <div className="template_section">
            <div className="template_top">
                <div className="template-left">
                <span style={{fontSize: '16px', color: '#202124', fontFamily: "'OpenSans', Arial, sans-sefif",fontWeight: '500', color: '#444'}}>Start New Form</span>
                </div>
                <div className="template-right">
                    <div className="gallery_button" style={{ fontFamily: "'OpenSans', Arial, sans-sefif",fontWeight: '500', color: '#444'}}>
                        Template Gallery <UnfoldMoreIcon />
                    </div>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="template_body">
               <div className="template-item">
                <img src={Blank} style={{ width: 'auto' }} onClick={() => createForm()} />
                <span style={{  fontFamily: "'OpenSans', Arial, sans-sefif",fontWeight: '500', color: '#444' }}>Blank Project</span>
               </div>
            </div>
        </div>
    )
}

export default Template