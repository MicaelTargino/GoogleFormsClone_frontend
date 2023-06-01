import React, {useState, useEffect, useContext} from 'react';
import {CropOriginal, CheckBox, ShortText, Subject, MoreVert, Add ,FilterNone, AddCircleOutline, OndemandVideo, TextFields, Close, PlaylistAdd} from '@material-ui/icons';
import {Select, Switch,Typography,IconButton,Accordion, AccordionSummary, AccordionDetails, Button, Radio, FormControlLabel, MenuItem, Tooltip} from '@material-ui/core';
import { BsTrash, BsFileText, FcRightUp } from 'react-icons';
import DeleteIcon from '@material-ui/icons/Delete';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import {v4 as uuid} from 'uuid';
import './QuestionForm.css';

const QuestionForm = ({editingMode}) => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            questionText: '',
            questionType: 'text',
            options: [
                // {optionText: 'Teste'}
            ],
            open: true,
            required: true
        }
    ]);
    const deleteQuestion = (id) => {
        let newQuestions = [];
        questions.map((question, idx) => {
            question.id !== id && newQuestions.push(question)
        });
        setQuestions(newQuestions);
    };
    const createEmptyQuestion = () => {
        const uniqueIdentifier = uuid();
        let newQuestions = [...questions, {
            id: uniqueIdentifier,
            questionText: '',
            questionType: '',
            options: [
                
            ],
            open: true,
            required: true
        }];
        setQuestions(newQuestions);
    }
    const addEmptyOption = (idx) => {
        let newQuestions = [...questions];
        newQuestions[idx].options.push({optionText: ''});
        setQuestions(newQuestions);
    }
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
               

            {editingMode ? questions.map((ques, i) => (
            <Accordion key={i} expanded={ques.open} className={ques.open && 'add_bolder'}>

                <div className="question_boxes">
                    <AccordionDetails className="add_question">
                            <div className="add_question_top">
                            {/* onFocus={ques.questionText !== '' ? ((e) => e.target.value = ques.questionText) : () =>{}} */}
                                <input type="text" className="question" placeholder={ques.questionText == '' ? "Type a Question": ques.questionText} onChange={(e) => {ques.questionText = e.target.value}} defaultValue={ques.questionText}></input>
                                <CropOriginal style={{ color:'#5f6368' }} />
                                <div>
                                <Select className="select" defaultValue={ques.questionType} onChange={e =>{
                                     ques.questionType = e.target.value;
                                     const questionsAfterTypeChange = [...questions];
                                     questions[i].questionType = e.target.value;
                                     setQuestions(questionsAfterTypeChange);
                                     }} style={{ color:'#5f6368', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <MenuItem id="text" value="text"><Subject style={{ marginRight: '10px' }}/> Paragraph</MenuItem>
                                    <MenuItem id="checkbox" value="checkbox"><CheckBox style={{ marginRight: '10px', color: '#70757a' }} checked></CheckBox> Checkbox</MenuItem>
                                    <MenuItem id="radio" value="radio"><Radio style={{ margin: '0px', color: '#70757a' }} /> Multiple Choice</MenuItem>
                                </Select>
                                </div>
                                {/* <IconButton>
                                <Add />
                                </IconButton> */}
                            </div>
                            {ques.options.map((op, j) => {
                                return (
                                    <div key={j} className="add_question_body">
                                        {
                                            (ques.questionType != 'text') ? 
                                            <input type={ques.questionType} name={`question-${i}`} style={{ marginRight: '10px' }}/> :
                                            <ShortText style={{ marginRight: '10px' }} />
                                        }
                                        <div>
                                            <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} defaultvalue={ques.options[j].optionText} onChange={(e) => {
                                                ques.options[j].optionText = e.target.value;
                                                const questionsAfterOptionChange = [...questions];
                                                questions[i].options[j].optionText = e.target.value;
                                                setQuestions(questionsAfterOptionChange);
                                                }}></input>
                                        </div>

                                        <CropOriginal style={{ color: '#5f6368' }} />

                                        <IconButton aria-label="delete" onClick={() => {
                                            const index = j
                                            let newquestions = [...questions];
                                            newquestions[i].options.splice(index,1);
                                            setQuestions(newquestions);
                                        }}>
                                            <Close />
                                        </IconButton>

                                    </div>
                                )
                            })}
                            <div className="add_footer">
                                {ques.questionType !== 'text' ?
                                <div className="add_question_bottom_left" style={{ paddingTop: '17px' }}>
                                    <Button size="small" style={{ textTransform: "none", color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
                                        <QuestionAnswerIcon />
                                         Answer Key
                                    </Button>
                                    <Tooltip title={`New ${ques.questionType} option`} arrow>
                                        <IconButton onClick={() => addEmptyOption(i)}>
                                            <Add /> 
                                        </IconButton>
                                    </Tooltip>
                                </div>
                                :
                                <div>
                                </div>
                                }
                                <div className="add_question_bottom" style={{borderTop: ques.options.length != 0 ? '1px solid #ccc' : ''}}>
                                        <span style={{ color: '#5f6368', fontSize: '13px', fontFamily: 'Open Sans, Arial, sans-serif' }}>Required</span>
                                        <FormControlLabel style={{margin: '0px'}} label="" control={<Switch color="primary" defaultChecked={ques.required} />} onChange={() => {ques.required = !ques.required }}/>
                                        <Tooltip title="Delete question" arrow>
                                            <IconButton onClick={() => deleteQuestion(ques.id)} aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>    
                                        <Tooltip title="Add new question" arrow>
                                            <IconButton onClick={() => { createEmptyQuestion() }}>
                                                <PlaylistAdd />
                                            </IconButton>
                                        </Tooltip>
                                </div>
                            </div>
                    </AccordionDetails>
                </div>
            </Accordion>
        )) : questions.map((ques, i) => (
            <Accordion sx={{background: 'white'}}  key={i} expanded={ques.open} className={ques.open && 'add_bolder'}>
                 <AccordionSummary sx={{background: 'white'}} aria-controls="panella-content" id="panella-header" elevation={1} style={{width: '100%'}}>
                {ques.open && (
                    <div className="saved_questions">
                        <Typography style={{ fontSize:'15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px',paddingBottom: '8px' }}>
                            {i+1}. {ques.questionText} {ques.required && <span style={{ color: 'red' }}>*</span>}
                        </Typography>

                        {ques.questionType == 'text' && (<input style={{border: '1px solid #ccc', borderRadius: '5px', boxShadow: '5px 5px 5px rgba(5,5,5,.1)'}} className="text_input" type="text" name={`responseInputOfQuestion${i + 1}`} /> )}

                        {ques.options.map((option, j) =>(
                            <div key={j}>
                                <div style={{display: 'flex'}}>
                                    <FormControlLabel style={{ marginLeft: '2px', marginBottom: '5px', marginRight: '0' }} control={<input type={ques.questionType} name={`question-${i}`}></input>} color="primary" required={ques.required}>
                                    </FormControlLabel>
                                        <Typography style={{ marginLeft: '2px' ,fontFamily: 'Roboto, Arial, sans-serif', fontSize: '13px', fontWeight: '400', letterSpacing: '.2px', lineHeight: '20px', color:'#202124' }}>
                                            {option.optionText}
                                        </Typography>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                )}
                </AccordionSummary>
            </Accordion>
            ))}

            </div>
        </div>
        </>
    )
}

export default QuestionForm