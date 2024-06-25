import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import './SlideTabs.scss'




export default function ScrollableTabsButtonForce () {
  const [ value, setValue ] = React.useState(0);
  
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Box className="tabBox"
         sx={{
           // flexGrow: 1,
           width: '100%',
         }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        centered
        className="tabBoxInner"
      >
        <Tab label={<h5>시장동향</h5>}/>
        <Tab label={<h5>주식</h5>}/>
        <Tab label={<h5>외환</h5>}/>
        <Tab label={<h5>암호화폐</h5>}/>
        <Tab label={<h5>ETF</h5>}/>
        <Tab label={<h5>마켓</h5>}/>
        <Tab label={<h5>시장동향</h5>}/>
        <Tab label={<h5>시장동향</h5>}/>
        <Tab label={<h5>ETF</h5>}/>
        <Tab label={<h5>주식</h5>}/>
      </Tabs>
    </Box>
  );
}
