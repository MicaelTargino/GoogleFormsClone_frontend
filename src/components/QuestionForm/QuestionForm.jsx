import React, {useState, useEffect} from 'react';

import {CropOriginal, CheckBox, ShortText, Subject, MoreVert, FilterNone, AddCircleOutline, OndemandVideo, TextFields, Close} from '@material-ui/icons';
import {Select, Switch, IconButton, AccordionSummary, AccordionDetails, Button, Radio, FormControlLabel} from '@material-ui/core';
import { BsTrash, BsFileText, FcRightUp } from 'react-icons';

import './QuestionForm.css';

const QuestionForm = () => {
    return (
        <>
        <div className="question_form">
            <br/>
            <div className="section">
                <div className="question_title_section">
                    <div className="question_form_top">
                        <input type="text" className="question_form_top_name" style={{ color: 'black' }} placeholder="Untitled document"/>
                        <input type="text" className="question_form_top_desc" placeholder="Add Form Description"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default QuestionForm