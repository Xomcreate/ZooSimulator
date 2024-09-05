import React from 'react'


function Ba({health}) {
   
  return (
    <div className=' h-6 bg-[yellow] rounded ' style={{width:health+"%",transition:"1s"}}></div>
  )
}

export default Ba