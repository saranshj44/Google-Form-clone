import React from 'react'
import glogo from '../assets/glogo.png'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import UTurnLeftOutlinedIcon from '@mui/icons-material/UTurnLeftOutlined';
import UTurnRightOutlinedIcon from '@mui/icons-material/UTurnRightOutlined';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import proimg from '../assets/profile.jpg'
import './fomheader.css'
import Formtabs from './Formtabs';
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
import { useNavigate, useParams } from 'react-router-dom';
function FormHeader() {
  // const { id } = useParams();
    const navigate=useNavigate();
    const [{doc_name},dispatch]=useStateValue();
    function navigates(){
        navigate(`/response`)
    }
  return (
    <>
      <div className="form_head">
        <div className="form_left">
          <div className='form_logo'>
            <img src={glogo} alt="formicon" />
          </div>
          <div className='form_left_content'>
            <div>
              {/* <p contenteditable="true" value="p">Untitled Document</p> */}
              <input type="text" placeholder='Untitled Form' className='form_name' value={doc_name} onChange={(e)=>{
                              dispatch({
                                  type: actionTypes.SET_DOC_NAME,
                                  doc_name: e.target.value
                              })
              }}></input>
            </div>
            <div>
              <FolderOpenIcon />
            </div>
            <div>
              <StarBorderIcon />
            </div>
            <div>
                <span style={{fontSize:'10px' ,color:'grey'}}>Saving</span>
            </div>
          </div>
        </div>
        <div className="form_right">
          <div>
          <IconButton> <ColorLensOutlinedIcon /></IconButton> 
          </div>
          <div>
          <IconButton onClick={navigates}> <RemoveRedEyeOutlinedIcon /></IconButton> 
          </div>

          <div>
          <IconButton> <UTurnLeftOutlinedIcon /></IconButton> 
          </div>
          <div>
          <IconButton> <UTurnRightOutlinedIcon /></IconButton> 
          </div>
          <div>
            <Button variant='contained' size="medium" margin="dense">Send</Button>
          </div>

          <div>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div>
            <Avatar className='avt_img' alt="Remy Sharp" src={proimg} />
          </div>

        </div>
      </div>
      <Formtabs/>
    </>
  )
}

export default FormHeader