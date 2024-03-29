// import React, { useState, useEffect } from 'react'
// import CropOriginalIcon from '@mui/icons-material/CropOriginal';
// import Select from '@mui/material/Select';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import ShortTextIcon from '@mui/icons-material/ShortText';
// import SubjectIcon from '@mui/icons-material/Subject';
// import { BsTrash } from "react-icons/bs";
// import IconButton from '@mui/material/IconButton';
// import FilterNoneIcon from '@mui/icons-material/FilterNone';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import TextFieldsIcon from '@mui/icons-material/TextFields';
// import { BsFileText } from "react-icons/bs"
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Button from '@mui/material/Button';
// import { FcRightUp } from 'react-icons/fc';
// import CloseIcon from '@mui/icons-material/Close';
// import Radio from '@mui/material/Radio';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Typography from '@mui/material/Typography';
// import MenuItem from '@mui/material/MenuItem';
// import Switch from '@mui/material/Switch';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import './Questions.css'
// function Questions() {
//     const [questions, setQuestions] = useState(
//         [{
//             questionText: "Which is the capital of karnataka ?",
//             questionType: "radio",
//             options: [
//                 { optionText: "Bangluru" },
//                 { optionText: "lorem" },
//                 { optionText: "lorem" },
//                 { optionText: "lorem" }
//             ],
//             answer: false,
//             answerKey: "",
//             points: 0,
//             open: true,
//             required: false
//         }])
//     function setOptionAnswer(ans, qno) {
//         var Questions = [...questions];
//         Questions[qno].answerKey = ans;
//         setQuestions(Questions);
//         console.log(qno + " " + ans);
//     }

//     function setOptionsPoints(points, qno) {
//         var Questions = [...questions];
//         Questions[qno].points = points;
//         setQuestions(Questions);
//         console.log(qno + " " + points);
//     }
//     function doneAnswer(i) {
//         var answerOfQuestion = [...questions];
//         answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
//         setQuestions(answerOfQuestion);
//     }
//     function addAnswer(i) {
//         var answerOfQuestion = [...questions];
//         answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
//         setQuestions(answerOfQuestion);
//     }
//     function changeQuestion(text, i) {
//         var newQuestion = [...questions];
//         newQuestion[i].questionText = text;
//         setQuestions(newQuestion);
//         console.log(newQuestion);
//     }
//     function changeOptionValue(text, i, j) {
//         var optionsQuestion = [...questions]
//         optionsQuestion[i].options[j].optionText = text;
//         setQuestions(optionsQuestion);
//         console.log(optionsQuestion)
//     }
//     function addQuestionType(i, type) {
//         let qs = [...questions];
//         console.log(type);
//         qs[i].questionType = type;
//         setQuestions(qs);
//     }
//     function removeOption(i, j) {
//         var RemoveOptionQuestion = [...questions];
//         if (RemoveOptionQuestion[i].options.length > 1) {
//             RemoveOptionQuestion[i].options.splice(j, 1);
//             setQuestions(RemoveOptionQuestion);
//             console.log(i + "__" + j);
//         }
//     }
//     function addOption(i) {
//         var optionOfQuestion = [...questions];
//         if (optionOfQuestion[i].options.length < 5) {
//             optionOfQuestion[i].options.push({ optionText: "Option" + (optionOfQuestion[i].options.length + 1) })
//         }
//         else {
//             console.log("max 5 options");
//         }
//         setQuestions(optionOfQuestion);
//     }
//     function copyQuestion(i) {
//         expandCloseAll();
//         let qs = [...questions]
//         var newQuestion = { ...qs[i] };
//         setQuestions([...questions, newQuestion])
//     }

//     function deleteQuestion(i) {
//         let qs = [...questions];
//         if (questions.length > 1) {
//             qs.splice(i, 1);
//         }
//         setQuestions(qs)
//     }
//     function requiredQuestion(i) {
//         var reqQuestion = [...questions];
//         reqQuestion[i].required = !reqQuestion[i].required;
//         console.log(reqQuestion[i].required + " " + i);
//         setQuestions(reqQuestion);
//     }
//     function addMoreQuestionField() {
//         expandCloseAll();
//         setQuestions([...questions,
//         { questionText: "Question", questionType: "radio", options: [{ optionText: "Option 1" }], open: true, required: false }]
//         )
//     }
//     function onDragEnd(result) {
//         if (!result.destination) {
//             return;
//         }
//         var itemgg = [...questions];
//         const itemF = reorder(
//             itemgg,
//             result.source.index,
//             result.destination.index
//         );
//         setQuestions(itemF)
//     }
//     const reorder = (list, startIndex, endIndex) => {
//         const result = Array.from(list);
//         const [removed] = result.splice(startIndex, 1);
//         result.splice(endIndex, 0, removed);
//         return result;
//     };
//     function expandCloseAll() {
//         let qs = [...questions];
//         for (let j = 0; j < qs.length; j++) {
//             qs[j].open = false;
//         }
//         setQuestions(qs);
//     }
//     function handleExpand(i) {
//         let qs = [...questions];
//         for (let j = 0; j < qs.length; j++) {
//             if (i === j) {
//                 qs[i].open = true;
//             }
//             else {
//                 qs[j].open = false;
//             }
//         }
//         setQuestions(qs);
//     }
//     function questionsUI() {
//         return questions.map((ques, i) => (
//             <Draggable key={i} draggableId={i + 'id'} index={i}>
//                 {/* <h1>{i}</h1> */}
//                 {(provided, snapshot) => (
//                     <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}>
//                         <div>
//                             {/* <h1>{i}</h1> */}
//                             <div style={{ marginBottom: "0px" }}>
//                                 <div style={{ width: "100%", marginBottom: "0px" }}>
//                                     <DragIndicatorIcon style={{ transform: "rotate(-90deg)", color: "#DAE0E2", position: "relative", left: "0px" }} fontSize="small" />
//                                 </div>
//                                 <div>
//                                     <Accordion onChange={() => { handleExpand(i) }} expanded={questions[i].open} className={questions[i].open ? "add_border" : ""}>
//                                         <AccordionSummary aria-controls='panel1a-content' id="panel1a-header" elevation={1} style={{ width: '100%' }}>
//                                             {questions[i].open ? (
//                                                 <div className="saved_questions">
//                                                     <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: ".1px", lineHeight: "24px", paddingBottom: "8px" }}>
//                                                         {i + 1}. {questions[i].questionText}
//                                                     </Typography>
//                                                     {ques.options.map((op, j) => (
//                                                         <div key={j}>
//                                                             <div style={{ display: "flex" }}>
//                                                                 <FormControlLabel style={{ marginLeft: "5px", marginBottom: "5px" }} disabled
//                                                                     control={<input type={ques.questionType} color="primary" style={{ marginRight: "3px" }} required={ques.type} />}
//                                                                     label={<Typography style={{ fontSize: '13px', fontWeight: '400', letterSpacing: '.2px', lineHeight: '20px', color: '#202124' }} >
//                                                                         {ques.options[j].optionText}
//                                                                     </Typography>}
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             ) : ""}
//                                         </AccordionSummary>

//                                         <div className="question_boxes">
//                                             {!questions[i].answer ? (
                                                
//                                             )}
//                                             <AccordionDetails className="add_question">
//                                                 <div className="add_question_top">
//                                                     <input type="text" className="question" placeholder='Question' value={ques.questionText} onChange={(e) => { changeQuestion(e.target.value, i) }}></input>
//                                                     <CropOriginalIcon style={{ color: '#5f6368' }} />
//                                                     <Select className='select' style={{ color: "#5f6368", fontSize: "13px" }}>
//                                                         <MenuItem id="text" value="Text" onClick={() => { addQuestionType(i, "text") }}><SubjectIcon style={{ marginRight: "10px" }} />Paragraph</MenuItem>
//                                                         <MenuItem id="checkbox" value="checkbox" onClick={() => { addQuestionType(i, "checkbox") }} ><CheckBoxIcon style={{ marginRight: "10px", color: "#70757a" }} checked />Check Box</MenuItem>
//                                                         <MenuItem id="radio" value="Radio" onClick={() => { addQuestionType(i, "radio") }}><Radio style={{ marginRight: "10px", color: "#70757a" }} checked />Multiple Choice</MenuItem>
//                                                     </Select>
//                                                 </div>
//                                                 {ques.options.map((op, j) => (
//                                                     <div className="add_question_body" key={j}>
//                                                         <div>
//                                                             {
//                                                                 (ques.questionType != "text") ?
//                                                                     <input type={ques.questionType} style={{ marginRight: "10px" }} /> :
//                                                                     <ShortTextIcon style={{ marginRight: "10px" }} />
//                                                             }

//                                                             <input type="text" className="text_input" placeholder='option' value={ques.options[j].optionText} onChange={(e) => { changeOptionValue(e.target.value, i, j) }} />
//                                                         </div>
//                                                         <div>
//                                                             <IconButton>
//                                                                 <CropOriginalIcon style={{ color: "#5f6368" }} />
//                                                             </IconButton>
//                                                             <IconButton aria-label='delete'>
//                                                                 <CloseIcon onClick={() => { removeOption(i, j) }} />
//                                                             </IconButton>
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                                 {ques.options.length < 5 ? (
//                                                     <div className="add_question_body">
//                                                         <FormControlLabel disabled control={
//                                                             (ques.questionType != "text") ?
//                                                                 <input type={ques.questionType} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}
//                                                                     style={{ marginLeft: "10px", marginRight: "10px" }} disabled /> :
//                                                                 <ShortTextIcon style={{ marginRight: "10px" }} />
//                                                         } label={
//                                                             <div>
//                                                                 <input type="text" className="text_input" style={{ fontSize: "13px", width: "60px" }} placeholder="Add other" />
//                                                                 <Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }} onClick={() => { addOption(i) }}>Add Option</Button>
//                                                             </div>
//                                                         }
//                                                         />
//                                                     </div>
//                                                 ) : ""}
//                                                 <div className="add_footer">
//                                                     <div className="add_question_bottom_left">
//                                                         <Button size="small" style={{ textTransform: "none", color: "#4285f4", fontSize: "13px", fontWeight: "600" }}>
//                                                             <FcRightUp style={{ border: "2px solid #4285f4", padding: "2px", marginRight: "8px" }} /> Answer Key
//                                                         </Button>
//                                                     </div>
//                                                     <div className="add_question_bottom">
//                                                         <IconButton aria-label='copy' onClick={() => { copyQuestion(i) }}>
//                                                             <FilterNoneIcon />
//                                                         </IconButton>
//                                                         <IconButton aria-label='delete' onClick={() => { deleteQuestion(i) }}>
//                                                             <BsTrash />
//                                                         </IconButton>
//                                                         <span style={{ color: "#5f6368", fontSize: "13px" }} checked={true} onClick={() => { requiredQuestion(i) }}>Required</span>
//                                                         <Switch name="checkedA" color="primary"></Switch>
//                                                         <IconButton>
//                                                             <MoreVertIcon />
//                                                         </IconButton>
//                                                     </div>
//                                                 </div>
//                                             </AccordionDetails>
//                                             <div className="question_edit">
//                                                 <AddCircleOutlineIcon className="edit" onClick={addMoreQuestionField} />
//                                                 <OndemandVideoIcon className="edit" />
//                                                 <CropOriginalIcon className="edit" />
//                                                 <TextFieldsIcon className="edit" />
//                                             </div>
//                                         </div>

//                                     </Accordion>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </Draggable>
//         ))
//     }
//     return (
//         <div>
//             <div className="question_form">
//                 <br></br>
//                 <div className="section">
//                     <div className="question_title_Section">
//                         <div className="question_form_top">
//                             <input type="text" className="question_form_top_name" style={{ colot: "black" }} placeholder="Untitled Document" />
//                             <input type="text" className="question_form_top_desc" placeholder="Form Description" />
//                         </div>
//                     </div>
//                     <DragDropContext onDragEnd={onDragEnd}>
//                         <Droppable droppableId="0id">
//                             {(provided, snapshot) => (
//                                 <div
//                                     {...provided.droppableProps}
//                                     ref={provided.innerRef}
//                                 >
//                                     {questionsUI()}
//                                     {provided.placeholder}
//                                 </div>
//                             )}
//                         </Droppable>
//                     </DragDropContext>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Questions