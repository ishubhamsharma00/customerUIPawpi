import React, { useState } from 'react'
import Dog from '../Components/Dog/Dog'
import { useParams } from 'react-router-dom'
const DefaultCat = () => {
  const {type} = useParams();
  const {subtype} = useParams();
  return (
    <>
      <div  className='my-12'>
          {type === 'food' && <Dog />}
          {type === 'food' && <div> { subtype === 'dryfood' && <Dog />}</div>}
      </div>  
    </>
  )
}

export default DefaultCat