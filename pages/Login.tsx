import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../Assets/logo/VouchSafe_Logo.svg'
import Button from '../components/Button'
import Input from '../components/registration/Input'
import { motion } from "framer-motion"
// import Bg_Right from '../Assets/img/Reg_Bg_Right.svg'


type Props = {}

const Login = (props: Props) => {
  return (
    <div>
      <motion.div
         initial={{x:-400}}
         animate={{x:0}}
         transition={{
          duration:0.2,
          type: "spring", 
          stiffness: 100 
          }}
         
      className="relative bg-[url('../Assets/img/Reg_Bg_Right.png')] w-screen h-screen bg-cover">
            <Link href='/'>
                <div className='absolute flex items-center gap-[10px] top-[69px] left-[101px] w-[210px] h-[43px] z-30 cursor-pointer '>
                    <Image src={Logo} alt="Vouchsafe logo white" width={43} height={43} />
                    <h1 className='text-[#1937AD] text-[27px] font-Anybody font-bold leading-[29px]'>vouchsafe</h1>
                </div>
            </Link>
       
                <div className="mr-[600px]  pt-16 w-[925px] h-screen">
                    <main className='mx-auto w-[350px] h-[395px] pt-[100px]'>
                    <div className='w-[339px] h-[72px] mb-[30px] mx-auto'>
                            <h1 className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent text-[32px] text-center font-Poppins font-normal leading-[48px]'>Sign in</h1>
                            <p className='text-center text-base text-[#292929] font-Poppins font-normal leading-[24px] '>Weclome back, continue where you left off</p>
                        </div>

                      <form action="">
                        <div className='space-y-5'>
                                <Input width = 'w-[350px]' label='Email address' type='email'/>
                                <Input width = 'w-[350px]' label='Password' type='password'/>
                        </div>
                        <div>
                            <Link href='#' ><p className='text-[#1937AD] text-right text-sm pt-2 leading-[21px] font-Poppins font-normal underline underline-offset-1 cursor-pointer'>Forgot password</p></Link>
                        </div>
                          <div className='mt-[30px]'>
                            <Button text='Sign in' width='w-[350px]' height='h-[40px]' radius='rounded-[30px]' font='font-Poppins'
                            />
                          </div>
                      </form>
                      <div className='mt-[30px]'>
                                <p className='text-sm text-[#292929] leading-[21px] font-Poppins font-normal text-left'>I do not have an account, <Link href='/Register' ><span className='text-[#1937AD] text-sm leading-[21px] font-Poppins font-normal underline underline-offset-1 cursor-pointer'>Create account.</span></Link></p>
                      </div>
                    </main>

                </div>
      </motion.div>
    </div>
  )
}

export default Login