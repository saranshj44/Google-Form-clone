import React from 'react'
import './Temporary.css'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import t1 from '../assets/t1.png';
import t0 from '../assets/t0.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import t4 from '../assets/t4.png';
import t5 from '../assets/t5.png';
import uuid from 'react-uuid';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Temporary() {
  const navigate = useNavigate();
  const createform=()=>{
    var create_form_id=uuid();
    console.log(create_form_id);
    var questions_list=[{questionText:"Question",questionType:"radio",options:[{optionText:"Option 1"}],open:true,required:false}]
      axios.post(`http://localhost:8000/add_questions/${create_form_id}`,{
        "document_name":"ultitled_form",
        "doc_desc":"Add Description",
        "questions":questions_list,
      })
      navigate("/form/"+create_form_id)
  }  
  return (
    <>
        <div className="main_temporary">
            <div className="temporary_header">
                <div className="temp_label">
                    <p>Start a new form</p>
                </div>
                <div className="temp_icon">
                      <Button variant='text' margin="dense" style={{ color:"#424242",textTransform:"capitalize"}}>
                            Template Gallery&nbsp;
                            <UnfoldMoreIcon style={{fontSize:"18px"}} />
                    </Button>                        
                    <div className="temp_ic">
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className="temporary_content">
                <div className="temp_card">
                    <div onClick={createform}>
                        <img src={t0}/>
                    </div>
                    <p>Blank</p>
                </div>
                <div className="temp_card">
                      <div>
                          <img src={t1} />
                      </div>
                    <p>lorem</p>
                </div>
                <div className="temp_card">
                      <div>
                          <img src={t2} />
                      </div>
                      <p>lorem</p>
                </div>
                <div className="temp_card">
                      <div>
                          <img src={t3} />
                      </div>
                      <p>lorem</p>
                </div>
                <div className="temp_card">
                      <div>
                          <img src={t4} />
                      </div>
                      <p>lorem</p>
                </div>
                <div className="temp_card">
                      <div>
                          <img src={t5} />
                      </div>
                      <p>lorem</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Temporary