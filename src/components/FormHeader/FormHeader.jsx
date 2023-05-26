import React, {useState} from 'react';
import form_image  from '../../assets/logo.png';
import { FiStar, FiSettings } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { IconButton } from '@material-ui/core';
import avatarimage from '../../assets/avatar.jpeg';
import { IoMdFolderOpen } from 'react-icons/io';

import ColorLensIcon from '@material-ui/icons/ColorLens';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import './FormHeader.css';
const FormHeader = () => {
    const [doc_name, setDoc_name] = useState('');
    const handleChange = (e) => {
        setDoc_name(e.target.value);
    }
    return (
        <>
        <div className="form_header">
            <div className="form_header_left">
                <img src={form_image} style={{ height: '45px', width: '40px' }}/>
                <input type="text" placeholder="Untitled form" className="form_name" onChange={handleChange} value={doc_name}/>
                <IoMdFolderOpen className="form_header_icon" style={{ marginRight: '10px' }} />
                <FiStar className="form_header_icon" style={{ marginRight: '10px' }} />
                <span style={{ fontSize: '13px', fontWeight: '600' }}>All changes saved on drive</span>
            </div>
            <div className="form_header_right">
                <IconButton>
                    <ColorLensIcon size="small"  className="form_header_icon"/>
                </IconButton>
                <IconButton>
                    <AiOutlineEye className="form_header_icon"/>
                </IconButton>
                <IconButton>
                    <FiSettings className="form_header_icon"/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon className="form_
                    header_icon"/>
                </IconButton>
                <IconButton>
                    <Avatar style={{ width: '30px', height: '30px' }} src={avatarimage} />
                </IconButton>
            </div>
        </div>
        </>
    )
}


export default FormHeader