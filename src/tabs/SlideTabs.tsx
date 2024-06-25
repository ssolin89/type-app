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
    <Box className="tabBox"
         sx={{
           flexGrow: 1,
           width: '100%',
         }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        centered
      >
        <Tab label="시장동향"/>
        <Tab label="주식"/>
        <Tab label="외환"/>
        <Tab label="암호화폐"/>
        <Tab label="ETF"/>
        <Tab label="마켓"/>
        <Tab label="시장동향"/>
        <Tab label=""/>
        <Tab label="Item 9"/>
        <Tab label="Item 10"/>
      </Tabs>
    </Box>
  );
}
