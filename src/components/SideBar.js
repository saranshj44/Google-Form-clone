import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function SideBar(props) {
   

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        props.funcsetleft(false);
    };

    const list = (anchor) => (
        <Box
            sx={{ width:250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{position:"relative",height:"100%"}}
        >
            <List style={{padding:"20px 10px"}}>
                <ListItem>
                    <span style={{ fontSize:"20px", fontWeight:"400", color: "blue" }}>G</span>
                    <span style={{ fontSize:"20px", fontWeight:"400", color: "red" }}>o</span>
                    <span style={{ fontSize:"20px", fontWeight:"400", color: "yellow" }}>o</span>
                    <span style={{ fontSize:"20px", fontWeight:"400", color: "blue" }}>g</span>
                    <span style={{ fontSize:"20px", fontWeight:"400", color: "green" }}>l</span>
                    <span style={{ fontSize:"20px", fontWeight:"400", color: "red" }}>e</span>&nbsp;
                    <span style={{ fontSize:"20px", fontWeight:"400", color: "GrayText" }}>Form</span>
                </ListItem>
            </List>
            <Divider/>
            <List>
                {['Docs', 'Sheet', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['Docs'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <p style={{ fontSize: "10px", color: "GrayText", position: "absolute", bottom: "30px", textAlign: "center",left:"20%" }}>
                Privacy Policy <span> Terms of Service</span>
            </p>``
        </Box>
    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <Drawer
                    anchor="left"
                    open={props.left}
                    onClose={toggleDrawer("left",false)}
                >
                    {list("left")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
