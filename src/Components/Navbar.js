import { Button } from '@mantine/core';
import React, {useState , useEffect} from 'react'
import { Link , useLocation } from'react-router-dom'
import NavCart  from "./NavCart.js";
import Logo from '../Assets/new-logo-white.svg'
import axios from 'axios';
import { BsFillGearFill } from "react-icons/bs"
import { CgLogOut } from "react-icons/cg"
import { IoMdHelp } from "react-icons/io"


import { googleLogout ,useGoogleLogin } from '@react-oauth/google';


// home about product blog contactus

const Navbar = () => {

    const [ user, setUser ] = useState();
    const [ profile, setProfile ] = useState();
    const [ dropdown, setDropdown ] = useState(false);
    const route = useLocation() ;
    
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      localStorage.setItem('user', JSON.stringify(tokenResponse))
      setUser(tokenResponse)
    },
  });

  const logOut = () => {
        googleLogout();
        setProfile(null);
        localStorage.removeItem('user')
        setDropdown(false)
    };
    let oldUser = undefined

    if(localStorage.getItem('user')) 
      oldUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {

        if(oldUser){
              axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${oldUser.access_token}`, {
                headers: {
                    Authorization: `Bearer ${oldUser.access_token}`,
                    Accept: 'application/json'
                }
            })
            .then((res) => {
                setProfile(res.data);
            })
            .catch((err) => console.log(err));
          } 
        
        else if (user) {
                        axios
                            .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                                headers: {
                                    Authorization: `Bearer ${user.access_token}`,
                                    Accept: 'application/json'
                                }
                            })
                            .then((res) => {
                                setProfile(res.data);
                            })
                            .catch((err) => console.log(err));
                    }
  },[user])
   

  const pathName = useLocation().pathname;

  return (
    <div className='flex bg-primary w-full p-4 justify-around items-center  ' >
      <div className='w-48' >
        <Link to="" >
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <div className='flex flex-row gap-6 font-semibold ' >
        <Link to="/" className={`${pathName==='/' ? 'text-white' : 'text-gray-400' }`}  >Home </Link>
        <Link to="https://hungerbox.com/about-us.html" className={`${pathName==='/about' ? 'text-white' : 'text-gray-400' }`} > About </Link>
        <Link to="https://blog.hungerbox.com/" className={`${pathName==='/blog' ? 'text-white' : 'text-gray-400' }`} > Blog </Link>
        <Link to="https://hungerbox.com/contact-us.html" className={`${pathName==='/contactus' ? 'text-white' : 'text-gray-400' }`} > ContactUs </Link>
        <Link to="/shop" className={`${pathName==='/shop' ? 'text-white' : 'text-red-600' }`} >Shop❕ </Link>
     
        </div >
            <div className="flex flex-row gap-6 items-center relative "  >
              {route.pathname.startsWith("/shop") ? <NavCart /> : <span></span> }
                {!profile ? <Button  onClick={login} className={`${pathName==='/login' ? 'hidden' : 'block' }  text-white font-semibold bg-secondary rounded px-4 py-2`} >Login / Sign Up</Button> : 
                <div >
                  <img onClick={()=> setDropdown(!dropdown)} src={profile.picture} alt="profile " className="w-10 rounded-full" />
                  {dropdown && <div className='p-3  bg-secondary rounded-md absolute top-12 right-0 flex flex-col gap-2 ' id='dialog-target' >
                      <div className='flex flex-row gap-2 w-36 ' >
                        <img src={profile.picture} alt="profile " className="w-8 rounded-full"/>
                        <div className='text-left text-[0.5rem]' >
                          <p className='text-white font-semibold'>{profile.name}</p>
                          <p className='text-white font-semibold '>{profile.email}</p>
                        </div>
                      </div>
                      <Link to="/account" className='text-white flex flex-row items-center cursor-pointer gap-4'>
                        <BsFillGearFill/> <span> Account </span>  
                      </Link>
                      <Link to="https://hungerbox.com/why-us.html" className='text-white flex flex-row items-center cursor-pointer gap-4'>
                        <IoMdHelp/> <span> Help </span>  
                      </Link>
                      <div className='text-white flex flex-row items-center cursor-pointer gap-4' onClick={logOut}> 
                        <CgLogOut/> <span> Logout </span>  
                      </div>
                  </div>}
                  </div>
                  
                }
            </div>
        </div> 
      
  )
  }
export default Navbar;