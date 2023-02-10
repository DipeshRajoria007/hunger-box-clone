import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

// import {Restaurants} from '../Data/Restaurants'


const Login = () => {

  
  return (
    <div className='pt-24 flex flex-col w-full h-[490px] justify-center items-center'>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />    
    </div>
  )
}



export default Login