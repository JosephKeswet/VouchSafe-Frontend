import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


type Props = {}

const BusinessInfo = (props: Props) => {
    const newLocal = 'text-left h-[21px] text-sm font-Poppins font-medium leading-[21px] align-top pl-4 mb-[3px]'
    const newLocal_1 = ' w-[284px] h-[40px] py-[9.5px] absolute z-20 cursor-pointer text-center  text-[#797979] text-sm leading-[21px] font-Poppins font-medium hover:bg-clip-text hover:bg-gradient-to-r  hover:from-[#1937AD] hover:to-[#F93DE6] hover:text-transparent'
  return (
    <div className='flex justify-center items-center bg-[#797979] h-screen'>
        <section className='w-[978px] h-[650px] bg-white shadow-lg rounded-[15px] mt-[94px] '>
            
            {/* Top section */}
            <div className='flex justify-center items-center mx-auto mt-[30px] ml-[35px] mr-[184px]'>
                <div className='w-[40px] h-[40px] flex justify-center items-center mr-[109px] rounded-full border border-solid  border-[#E1E1E1] cursor-pointer'><FontAwesomeIcon icon={faArrowLeft} className='w-[19.99px] h-[20.02px]
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
                    <div className='flex gap-[10px]'>
                        <div className='business-border-gradient relative cursor-pointer flex justify-center items-center w-[284px] h-[40px] rounded-[50px] border border-solid border-[#E1E1E1]
                       '>
                        <p className={newLocal_1}>Physical commerce</p> </div>

                        <div className='business-border-gradient relative cursor-pointer flex justify-center items-center w-[284px] h-[40px]  rounded-[50px] border border-solid border-[#E1E1E1]
                       '>
                        <p className=' w-[284px] h-[40px] py-[9.5px]  absolute z-20 cursor-pointer text-center  text-[#797979] text-sm leading-[21px] font-Poppins font-medium hover:bg-clip-text hover:bg-gradient-to-r  hover:from-[#1937AD] hover:to-[#F93DE6] hover:text-transparent'>E-commerce (online)</p> </div>
                        
                    </div>
                 </div>
                              
            </div>
        </section>
    </div>
  )
}

export default BusinessInfo