import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CollectionComponent } from '../../Components';
import { useProductContext } from '../../context';

const Collection = () => {
  const { producttype } = useParams();

  console.log(producttype);
  
  const { getAllProducts, products } = useProductContext();

  useEffect(()=>{
    getAllProducts(producttype);
  }, [producttype]);

  console.log("products", products);

  return (
    <div>
      <CollectionComponent {...products} />
    </div>
  )
}

export default Collection;