import React from 'react'
import Checkout from '../Components/Account/Checkout'

const AuthPage = () => {
  return (
    <>
        <div className='py-8'>
            <div className='flex justify-center items-center w-full'>
                <Checkout />
            </div>
        </div>
    </>
  )
}

export default AuthPage