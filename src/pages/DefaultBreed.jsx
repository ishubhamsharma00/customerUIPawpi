import React from 'react'
import Dog from '../Components/Dog/Dog'
import { useParams } from 'react-router-dom';
const DefaultBreed = () => {
  const {type} = useParams();
  const {subtype} = useParams();
  return (
    <>
      <div  className='my-12'>
          {type === 'dog' && <Dog />}
          {type === 'dog' && <div> { subtype === 'pug' && <Dog />}</div>}
      </div>  
    </>
  )
}

export default DefaultBreed