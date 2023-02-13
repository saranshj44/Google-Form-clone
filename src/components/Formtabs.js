import { Paper } from '@mui/material';
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Formtabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <Paper>
      <Tabs value={value} onChange={handleChange} centered textColor="7248b9" indicatorColor="secondary">
              <Tab label="Question" />
              <Tab label="Responses" />
              <Tab label="Setting" />
          </Tabs>
    </Paper>
  )
}

export default Formtabs