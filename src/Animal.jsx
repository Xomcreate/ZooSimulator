import React from 'react'
import Ba from './Ba'

function Animal({ type, health, status, }) {
  
  return (
    <div className=' flex flex-col items-center p-4 border rounded shadow-md m-2 w-48'>
      <h3 className='  font-bold mb-[10px] text-[2rem]'>{type}</h3>
      <div className=' w-full bg-gray-900 h-6 rounded'>
       <Ba health={health}/>
      </div>
      <p className=' mt-2 text-[14px] text-[green]'> {health}%health</p>
      <p className={'text-sm $ {status === "alive" ? "text-green-600" : "text-red-400"}' }>{status}</p>
      
    </div>
  )
}

export default Animal