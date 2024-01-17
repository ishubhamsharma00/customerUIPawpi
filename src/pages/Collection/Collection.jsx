import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Dog } from '../../Components';

const Collection = () => {
  const { producttype } = useParams();
  console.log(producttype);

  const [products, setProducts] = useState('');
  const [banners, setBanners] = useState('');

  const getProductsData = async() => {
    try {
      const productResponse = await axios.get(`http://localhost:4000/collections/${producttype}`);
      const bannerResponse = await axios.get(`http://localhost:4000/banners/${producttype}`);
      if(productResponse.status === 200){
        console.log(productResponse.data);
        setProducts(productResponse.data);
      }
      if(bannerResponse.status === 200){
        console.log(bannerResponse.data);
        setBanners(bannerResponse.data);
      }
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(()=>{
    getProductsData();
  }, [producttype]);

  return (
    <div>
      <Dog />
    </div>
  )
}

export default Collection;