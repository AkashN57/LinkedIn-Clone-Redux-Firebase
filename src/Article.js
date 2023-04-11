import React from 'react'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import "./Article.css"

function Article({heading,subtitle}) {
  return (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon/>
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Article