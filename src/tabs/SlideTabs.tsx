import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import './SlideTabs.scss'




export default function ScrollableTabsButtonForce () {
  const [ value, setValue ] = React.useState(0);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{width: '100%', bgcolor: 'background.paper'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Item 1"/>
        <Tab label="Item 2"/>
        <Tab label="Item 3"/>
        <Tab label="Item 4"/>
        <Tab label="Item 5"/>
        <Tab label="Item 6"/>
        <Tab label="Item 7"/>
        <Tab label="Item 8"/>
        <Tab label="Item 9"/>
        <Tab label="Item 10"/>
        <Tab label="Item 11"/>
        <Tab label="Item 12"/>
        <Tab label="Item 13"/>
      </Tabs>
    </Box>
  );
}
