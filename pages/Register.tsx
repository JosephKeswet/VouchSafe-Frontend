import Link from 'next/link'
import React, { useState } from 'react'
import Register_Bg from '../Assets/img/Register_Bg.png'
import Button from '../components/Button'
import Input from '../components/registration/Input'
import LogoWhite from '../Assets/logo/VouchSafe_Logo_White.svg'
import Image from 'next/image'
import { motion } from "framer-motion"

type Props = {}

const Register = (props: Props) => {

  const baseUrl = 'https://vouchsafe-backend-api.herokuapp.com'
  const [email,setEmail] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [password,setPassword] = useState('')
  
  async function signUp() {
    let data = {email,firstName,lastName}
    console.warn(data)

    let result = fetch(`${baseUrl}/api/v1/vouchsafe/auth/signup/`,{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })

    result = (await result).json()
    console.warn("result",result)
  }





  return (
    <div>
        <section className="relative overflow-hidden h-screen  ">
                    <div className='relative overflow-hidden'>
                        <motion.div
                                 initial={{ x:800 }}
                                 animate={{
                                   x:0
                                 }}
                                 transition={{
                                   duration: 0.3,
                                //    type: "spring",
                                //    stiffness: 100
                                 }}
                        
                        >
                        <Image src={Register_Bg} alt="Registration background image" objectFit='contain'/>
                        </motion.div>
                        <motion.div 
                        initial={{
                            x:300,
                            rotate:0
                          }}
                          animate={{
                            x:0,
                            rotate:24
                          }}
                          transition={{
                            duration:0.3
                          }}
                        className='absolute z-30 bottom-[800px] left-[55px] rounded-[10px]  w-[459px] h-[218px]  bg-gradient-to-r  from-[#1937AD] to-[#F93DE6]'/>
                    </div>
         


            <Link href='/'>
                <div className='absolute flex items-center gap-[10px] top-[69px] left-[101px] w-[210px] h-[43px] z-30 cursor-pointer'>
                    <Image src={LogoWhite} alt="Vouchsafe logo white" width={43} height={43} />
                    <h1 className='text-white text-[27px] font-Anybody font-bold leading-[29px]'>vouchsafe</h1>
                </div>
            </Link>
       
                <motion.div 
                         initial={{ x: 400 }}
                         animate={{
                           x: 0,
                         }}
                         transition={{
                           duration: 0.9,
                           type: "spring",
                           stiffness: 100
                         }}
                className="pt-16 w-[925px] absolute bottom-0 left-[500px] z-50 right-0  h-screen">
                    <main className='mx-auto w-[350px] h-[611px] pt-[20px]'>
                        <div className='w-[320px] h-[72px] mb-[30px] mx-auto'>
                            <h1 className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent text-[32px] text-center font-Poppins font-normal leading-[48px]'>Create account</h1>
                            <p className='text-center text-base text-[#292929] font-Poppins font-normal leading-[24px] '>Use vouchsafe <span className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent leading-[20px] font-Courgette'>free</span> for the next 1 month</p> 
                        </div>
                    <form action="">
                        <div className='mx-auto'>
                            <div className='flex gap-[10px] mb-[20px]'>

                            {/* Firstname */}
                            <div className={`w-[170px] h-[64px]`}>
                              <label className='text-left h-[21px] text-sm font-Poppins font-normal leading-[21px] align-top pl-4 mb-[3px]'>First name</label>
                                <input type='text' onChange={(e) =>{
                                  setFirstName(e.target.value)
                                }} name="" value={firstName} id="" className={`w-[170px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]`} />
                              </div>

                              {/* Lastname */}
                              <div className={`w-[170px] h-[64px]`}>
                              <label className='text-left h-[21px] text-sm font-Poppins font-normal leading-[21px] align-top pl-4 mb-[3px]'>Last name</label>
                                <input type='text' name="" value={lastName} onChange={(e) =>{
                                  setLastName(e.target.value)
                                }} id="" className={`w-[170px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]`} />
                              </div>

                              
                            </div>

                            <div className='space-y-5'>

                              {/* Email */}
                            <div className={`w-[350px] h-[64px]`}>
                              <label className='text-left h-[21px] text-sm font-Poppins font-normal leading-[21px] align-top pl-4 mb-[3px]'>Email address</label>
                                <input type='email' name="" id="" value={email} onChange={(e) =>{
                                  setEmail(e.target.value)
                                }} className={`w-[350px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]`} />
                              </div>

                              {/* Password */}
                              <div className={`w-[350px] h-[64px]`}>
                              <label className='text-left h-[21px] text-sm font-Poppins font-normal leading-[21px] align-top pl-4 mb-[3px]'>Password</label>
                                <input type='password' name="" value={password} onChange={(e) =>{
                                  setPassword(e.target.value)
                                }} id="" className={`w-[350px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]`} />
                              </div>

                            </div>
                            <div className='mt-[30px] mb-[30px]'>
                                <p className='text-sm text-[#292929] leading-[21px] font-Poppins font-normal'>By signing up, you agree to our <Link href='#' ><span className='text-[#1937AD] text-sm leading-[21px] font-Poppins font-normal underline underline-offset-1 cursor-pointer'>Terms of Use and Privacy Policy. </span></Link></p>
                            </div>
                            <div>
                                <div className={`flex items-center justify-center hover:opacity-70 transition-all duration-500 bg-[#1937AD] text-white text-sm  font-Poppins font-normal 
                                cursor-pointer
                                w-[350px] h-[40px] rounded-[30px]`}>
                                    <button onClick={signUp}>Create account</button>
                                </div>
                            </div>
                            <div className='mt-[30px]'>
                                <p className='text-sm text-[#292929] leading-[21px] font-Poppins font-normal text-left'>I already have an account, <Link href='/Login' ><span className='text-[#1937AD] text-sm leading-[21px] font-Poppins font-normal underline underline-offset-1 cursor-pointer'>Sign in.</span></Link></p>
                            </div>
                        </div>
                    </form>
                    </main>
                </motion.div>

        </section>
    </div>
  )
}

export default Register