import React from 'react'
import '../styles/popup.css'

const Popup = (Props) => {
  return (
    <div className='popup-box'>
         <div className="box">
             <span className='close-icon' onClick={Props.handleClose}></span>
             {Props.content}
         </div>
    </div>
  )
}

export default Popup