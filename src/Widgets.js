import React from 'react'
import "./Widgets.css"
import InfoIcon from "@mui/icons-material/Info"
import Article from './Article'


function Widgets() {

  
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>
      <Article heading="J/AK is back" subtitle="Top news - 707 readers"/>
      <Article heading="Hot weather alert" subtitle="Top news - 499 readers"/>
      <Article heading="Tesla hits new heights" subtitle="Cars & Auto - 1499 readers"/>
      <Article heading="Is redux too good?" subtitle="Tech - 7499 readers"/>
      <Article heading="S&P 500 hits all time low" subtitle="Stocks - 2799 readers"/>
    </div>
  )
}

export default Widgets