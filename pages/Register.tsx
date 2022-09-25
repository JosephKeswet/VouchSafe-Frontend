import Link from 'next/link'
import React from 'react'
import RegBg from '../Assets/img/Reg_Bg_Left.png'
import Button from '../components/Button'
import Input from '../components/registration/Input'
import LogoWhite from '../Assets/logo/VouchSafe_Logo_White.svg'
import Image from 'next/image'
import { motion } from "framer-motion"

type Props = {}

const Register = (props: Props) => {
  return (
    <div>
        <motion.div 
        initial={{x:400}}
        animate={{x:0}}
        transition={{
            duration:0.2,
            type: "spring", 
            stiffness: 100 
        }}
        className="relative bg-[url('../Assets/img/Reg_Bg_Left.png')] w-screen h-screen bg-cover">
            <Link href='/'>
                <div className='absolute flex items-center gap-[10px] top-[69px] left-[101px] w-[210px] h-[43px] z-30 cursor-pointer'>
                    <Image src={LogoWhite} alt="Vouchsafe logo white" width={43} height={43} />
                    <h1 className='text-white text-[27px] font-Anybody font-bold leading-[29px]'>vouchsafe</h1>
                </div>
            </Link>
       
                <div className="ml-[600px] pt-16 w-[925px] h-screen">
                    <main className='mx-auto w-[350px] h-[611px] pt-[20px]'>
                        <div className='w-[320px] h-[72px] mb-[30px] mx-auto'>
                            <h1 className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent text-[32px] text-center font-Poppins font-normal leading-[48px]'>Create account</h1>
                            <p className='text-center text-base text-[#292929] font-Poppins font-normal leading-[24px] '>Use vouchsafe <span className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent leading-[20px] font-Courgette'>free</span> for the next 1 month</p> 
                        </div>
                    <form action="">
                        <div className='mx-auto'>
                            <div className='flex gap-[10px] mb-[20px]'>
                                <Input width = 'w-[170px]' label='First name' type='text'/>
                                <Input width = 'w-[170px]' label='Last name' type='text'/>
                            </div>
                            <div className='space-y-5'>
                                <Input width = 'w-[350px]' label='Email address' type='email'/>
                                <Input width = 'w-[350px]' label='Password' type='password'/>
                                <Input width = 'w-[350px]' label='Confirm Password' type='password'/>
                            </div>
                            <div className='mt-[30px] mb-[30px]'>
                                <p className='text-sm text-[#292929] leading-[21px] font-Poppins font-normal'>By signing up, you agree to our <Link href='#' ><span className='text-[#1937AD] text-sm leading-[21px] font-Poppins font-normal underline underline-offset-1 cursor-pointer'>Terms of Use and Privacy Policy. </span></Link></p>
                            </div>
                            <div>
                                <Button text='Create account' width='w-[350px]' height='h-[40px]' radius='rounded-[30px]' font='font-Poppins'
                                 />
                            </div>
                            <div className='mt-[30px]'>
                                <p className='text-sm text-[#292929] leading-[21px] font-Poppins font-normal text-left'>I already have an account, <Link href='/Login' ><span className='text-[#1937AD] text-sm leading-[21px] font-Poppins font-normal underline underline-offset-1 cursor-pointer'>Sign in.</span></Link></p>
                            </div>
                        </div>
                    </form>
                    </main>
                </div>

        </motion.div>
    </div>
  )
}

export default Register