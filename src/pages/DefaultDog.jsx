import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Dog from '../Components/Dog/Dog';
import axios from 'axios';


const DefaultDog = () => {
  const {type} = useParams();
  const {subtype} = useParams();

  console.log(type);
  console.log(subtype);

  const [data,setData] = useState([]);

  // useEffect(()=>{
  //   axios.get(`jgsdhjshjfgds/?category=${type}&subcategory=${subtype}`);

  // });
  return (
    <>
      <div  className='my-12'>
          {type === 'food' && <Dog />}
          {type === 'food' && <div> { subtype === 'dryfood' && <Dog {...data}  />}</div>}
      </div>  
    </>
  )
}

export default DefaultDog