import React, { useEffect, useState } from 'react'
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
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import './MainBody.css'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import glogo from '../assets/glogo.png'
function MainBody() {
    const [age,setAge]=useState(0);
    const [files, setFiles] = React.useState([]);
    var navigate = useNavigate()
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    async function filenames(){
        var request = await axios.get("https://misty-fawn-shirt.cyclic.app/get_all_filenames");
        let filenames=request.data;
        setFiles(filenames);
        // alert(filenames)
    }
    useEffect(()=>{
        filenames();
    },[])
    function navigateform(id){
        console.log(id)
        navigate(`/form/${id}`)
    }
    // filenames();
  return (
    <>
          <div className="main_body">
              <div className="body_header">
                  <div className="body_label">
                      <p>Recent Forms</p>
                  </div>
                  <div className="body_icon">
                      <Button id="selectbox" variant='text' margin="dense" style={{ color: "#424242", textTransform: "capitalize",fontSize:"12px" }}>
                          <FormControl size="small">
                              <Select
                                  className='selectbutton'  
                                //   value={age}
                                  onChange={handleChange}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                              >
                            <MenuItem className='selectbutton' value="">
                                      <em>Owned by anyone</em>
                                  </MenuItem>
                                  <MenuItem className='selectbutton' value="">
                                      <em>Owned by anyone</em>
                                  </MenuItem>
                                  <MenuItem className='selectbutton' value="">
                                      <em>Owned by anyone</em>
                                  </MenuItem>
                              </Select>
                              {/* <FormHelperText>Without label</FormHelperText> */}
                          </FormControl>
                      </Button>
                      <div className="body_ic">
                          <IconButton>
                              <ViewListOutlinedIcon />
                          </IconButton>
                          <IconButton>
                              <SortByAlphaIcon />
                          </IconButton>
                          <IconButton>
                              <FolderOpenIcon />
                          </IconButton>
                      </div>
                  </div>
              </div>
              <div className="body_content">
                {files.map((ele)=>(
                    <>
                    {/* <h1>{ele.id}</h1> */}
                        <div className="body_card" onClick={()=>{navigateform(ele.id)}} style={{cursor:"pointer"}}>
                            <div className='img_card'>
                                <img src={t1} />
                            </div>
                            <div className="img_content">
                                <p>{ele.name}</p>
                                <div className="img_info">
                                    <div className='img_info_div'>
                                        <div className='img_info_img'>
                                            <ListOutlinedIcon className='ic' />
                                        </div>
                                        <div className='img_info_p'>
                                            <p>Opened 10:46 AM</p>
                                        </div>
                                    </div>
                                    <div className="img_info_icon">
                                        <IconButton>
                                            <MoreVertIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    
                ))}
                  {/* <div className="body_card">
                      <div className='img_card'>
                          <img src={t1} />
                      </div>
                      <div className="img_content">
                        <p>Contact Information</p>
                        <div className="img_info">
                            <div className='img_info_div'>
                                <div className='img_info_img'>
                                      <ListOutlinedIcon className='ic'/>
                                </div>
                                  <div className='img_info_p'>
                                    <p>Opened 10:46 AM</p>
                                </div>
                            </div>
                            <div className="img_info_icon">
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                            </div>
                        </div>
                      </div>
                  </div> */}
              </div>
          </div>
    </>
  )
}

export default MainBody