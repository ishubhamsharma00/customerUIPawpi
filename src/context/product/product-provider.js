import { createContext, useContext, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState();
  const [banners, setBanners] = useState('');

  const getAllProducts = async (props) => {
    try {
      const productResponse = await axios.get(`http://localhost:4000/product/url/${props}`);
      // const bannerResponse = await axios.get(`http://localhost:4000/banners/${props}`);
      if(productResponse.status === 200){
        setProducts(productResponse.data.productData);
      }
      // if(bannerResponse.status === 200){
      //   console.log(bannerResponse.data);
      //   setBanners(bannerResponse.data);
      // }
    } catch (error) {
      console.log(error)
    }
  };

  return(
    <ProductContext.Provider value={{products,banners, setProducts, getAllProducts}}>
      {children}
    </ProductContext.Provider>
  )
};

export const useProductContext = () => useContext(ProductContext);
