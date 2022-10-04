import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Logo from '../Assets/logo/VouchSafe_Logo.svg'
import AppleLogo from '../Assets/icons/Apple Logo.svg'
import GoogleLogo from '../Assets/icons/Google.svg'
import Login_Bg from '../Assets/img/Login_Bg.png'



type Props = {}

const ForgotPassword = (props: Props) => {
  return (
    <div>
        <section className='relative h-screen'>
        <Link href='/'>
          <motion.div 
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}
          transition={{
            duration:0.9
          }}
          className='absolute flex items-center gap-[10px] top-[69px] left-[101px] w-[210px] h-[43px] z-50 cursor-pointer '>
            <Image src={Logo} alt="Vouchsafe logo white" width={43} height={43} />
            <h1 className='text-[#1937AD] text-[27px] font-Anybody font-bold leading-[29px]'>vouchsafe</h1>
          </motion.div>
        </Link>

        <motion.div 
           initial={{ x: -400 }}
           animate={{
             x: 0,
           }}
           transition={{
             duration: 0.9,
             type: "spring",
             stiffness: 30
           }}
        className="absolute z-40 pt-16 w-[925px] h-screen">
          <main className='mx-auto w-[478px] h-[500px] pt-[100px] '>
            <div className='w-[339px] h-[72px] mb-[30px] mx-auto'>
              <h1 className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent text-[32px] text-center font-Poppins font-semibold leading-[48px]'>Reset Password</h1>
              <p className='text-center text-base text-[#292929] font-Poppins font-normal leading-[24px] '>Please, input your email address</p>
            </div>

            <form action="" className='mx-auto w-[350px]'>
              <div className='space-y-5'>

                              {/* Email */}
                              <div className={`w-[350px] h-[64px]`}>
                              <label className='text-left h-[21px] text-sm font-Poppins font-medium leading-[21px] align-top pl-4 mb-[3px]'>Email address</label>
                                <input type='email' name="" id="" className={`w-[350px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]`} required/>
                              </div>
              </div>
              <div className='mt-[30px] '>
                    <button type='submit' className='flex items-center justify-center hover:opacity-70 transition-all duration-500 bg-[#1937AD] text-white text-sm  font-Poppins font-semibold cursor-pointer w-[350px] h-[40px] rounded-[30px]'>Continue</button>
              </div>
            </form>

            <div className='mt-[30px] mx-auto w-[350px]'>
              <button type='submit' className='flex items-center justify-center  border border-solid border-[#1937AD] text-[#292929] text-sm  font-Poppins font-semibold cursor-pointer w-[350px] h-[40px] rounded-[30px]'>Cancel</button>
              </div>

            {/* This should be conditionally rendered only when the user has provided the correct email and has clicked continue */}
              <div className='flex justify-center items-center w-[478px] h-[62px] rounded-[15px] mt-[30px] border border-solid border-[#E80000]'>
                    <p className='text-center text-sm text-[#292929] leading-[21px] font-Poppins font-medium'>A confirmation link has been sent to the email provided above, kindly check your email and follow the instructions</p>
              </div>
      
          </main>
        </motion.div>

              <div className='absolute bottom-[-1200px] top-0 h-screen w-screen right-0 overflow-hidden'>
                <main className='h-screen float-right'>
                <motion.div
                          initial={{ x:-400 }}
                          animate={{
                            x:0
                          }}
                          transition={{
                            duration: 0.9,
                            type: "spring",
                            stiffness: 30
                          }}
                >
                        <Image src={Login_Bg} alt="Registration background image" objectFit='contain'/>
                        </motion.div>
                        <motion.div 
                        initial={{
                          x:-300,
                          rotate:24
                        }}
                        animate={{
                          x:0,
                          rotate:-24
                        }}
                        transition={{
                          duration:0.9  
                        }}
                        className='absolute z-30  bottom-[700px] left-[990px] rounded-[10px]  w-[459px] h-[218px]  bg-gradient-to-r  from-[#1937AD] to-[#F93DE6]'/>
                        </main>
                    </div>
        </section>
    </div>
  )
}

export default ForgotPassword