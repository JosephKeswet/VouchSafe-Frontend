import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Router from 'next/router'
import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../components/registration/Login'
import { logout } from '../slices/userSlice'
import { RootState } from '../store'


type Props = {}

const BusinessInfo = (props: Props) => {
    const isLoggedIn = useSelector((state:RootState) => state.user.isLoggedIn)
    const dispatch = useDispatch();

    console.log(isLoggedIn)

    const newLocal = 'text-left h-[21px] text-sm font-Poppins font-medium leading-[21px] align-top pl-4 mb-[3px]'


    const [color1,setColor1] = useState(false)
    const [color2,setColor2] = useState(false)

    const handleLogout =()=>{
        localStorage.clear();
        dispatch(logout())
    }


    const handleColor1 = () =>{
        setColor1(true)
        console.log(color1)
        Router.push('/')
    }


    const handleColor2 = () =>{
        setColor2(true)
        console.log(color2)
        Router.push('/')
    }

    // const showToken = () =>{}


   

    
  return (
    <div>
        {isLoggedIn ? (<div className='flex justify-center items-center bg-[#797979] h-screen'>
        <section className='w-[978px] h-[650px] bg-white shadow-lg rounded-[15px] mt-[94px] '>
            
        {/* Top section */}
        <div className='flex justify-center items-center mx-auto mt-[30px] ml-[35px] mr-[184px]'>
            <div className='w-[40px] h-[40px] flex justify-center items-center mr-[109px] rounded-full border border-solid  border-[#E1E1E1] cursor-pointer'><FontAwesomeIcon icon={faArrowLeft} className='w-[19.99px] h-[20.02px] text-[#797979]
            ' /></div>
            <div className='w-[609px] h-[72px] '>
                <h1 className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent text-[32px] text-center leading-[48px] font-Poppins font-semibold'>Business information</h1>
                <p className='text-[#292929] text-base text-center leading-6 font-Poppins font-medium '>Fill out your business information so that we can create a dashboard for you</p>
            </div>
        </div>

        {/* Bottom section */}
        <div className='w-[578px] mx-auto mt-[100px]'>
            <div className={`w-[578px] h-[60px]`}>
                <label className='text-left h-[21px] text-sm font-Poppins font-medium leading-[21px] align-top pl-4 mb-[3px]'>Business name</label>
             <input type='email' name="" id=""
           className={`w-[578px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]`} required/>
            </div>

            <div className={`w-[578px] h-[60px] mt-[30px] mb-[30px]`}>
              <label className={newLocal}>Contact/Phone number</label>
              <input type='email' name="" id=""
              className={`w-[578px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]`} required/>
             </div>

             <div>
                <h1 className=' pl-4 text-[#292929] text-sm text-left pb-1 font-Poppins font-medium leading-[21px]'>What is the nature of your business?</h1>
                <div className='flex justify-between'>
                    <button className={!color1? 
                    'business-border-gradient relative w-[284px] h-[40px] border border-solid border-[#E1E1E1] bg-white rounded-[50px] text-[#797979] text-sm font-Poppins font-medium leading-[21px]  ' 
                    : 'w-[284px] h-[40px] border border-solid border-[#E1E1E1] rounded-[50px] text-white bg-[#1937AD] text-sm font-Poppins font-medium leading-[21px]'
                    }
                    onClick={handleColor1}
                    ><span className={!color1? 'absolute z-30 left-0 right-0 top-2 bottom-0 hover:bg-clip-text hover:bg-gradient-to-r  hover:from-[#1937AD] hover:to-[#F93DE6] hover:text-transparent' 
                    : 'text-white'    
                }>Physical Commerce</span></button>

                    <button className={!color2? 
                    'business-border-gradient relative w-[284px] h-[40px] border border-solid border-[#E1E1E1] bg-white rounded-[50px] text-[#797979] text-sm font-Poppins font-medium leading-[21px]  ' 
                    : 'w-[284px] h-[40px] border border-solid border-[#E1E1E1] rounded-[50px] text-white bg-[#1937AD] text-sm font-Poppins font-medium leading-[21px]'
                    }
                    onClick={handleColor2}
                    ><span className={!color2? 'absolute z-30 left-0 right-0 top-2 bottom-0 hover:bg-clip-text hover:bg-gradient-to-r  hover:from-[#1937AD] hover:to-[#F93DE6] hover:text-transparent' 
                    : 'text-white'    
                }>E-Commerce</span></button>
                </div>
             </div>
                          
        </div>
    </section>
    </div>
    ) 
    : <Login/>}

    {isLoggedIn && <button className='w-52 h-52 bg-black text-white' onClick={handleLogout}>LOgout</button>}
 
    </div>
  )
}

export default BusinessInfo