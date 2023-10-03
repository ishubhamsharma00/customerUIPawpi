import React from 'react'
import { useParams } from 'react-router-dom';
import Dog from '../Components/Dog/Dog';


const DefaultDog = () => {
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

export default DefaultDog