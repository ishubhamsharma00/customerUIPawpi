import React from 'react'
import Dog from '../Components/Dog/Dog';
import { useParams } from 'react-router-dom';

const DefaultBrands = () => {
  const {type} = useParams();
  const {subtype} = useParams();
  return (
    <>
      <div  className='my-12'>
          {type === 'a' && <Dog />}
          {type === 'a' && <div> { subtype === 'all4pet' && <Dog />}</div>}
      </div>  
    </>
  )
}

export default DefaultBrands;