import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../Assets/logo/VouchSafe_Logo.svg'
import Button from '../components/Button'
import Input from '../components/registration/Input'
import { motion } from "framer-motion"
import Login_Bg from '../Assets/img/Login_Bg.png'



type Props = {}

const Login = (props: Props) => {
  return (
    <div className=''>
      <section className="relative  h-screen ">
        <Link href='/'>
          <div className='absolute flex items-center gap-[10px] top-[69px] left-[101px] w-[210px] h-[43px] z-30 cursor-pointer '>
            <Image src={Logo} alt="Vouchsafe logo white" width={43} height={43} />
            <h1 className='text-[#1937AD] text-[27px] font-Anybody font-bold leading-[29px]'>vouchsafe</h1>
          </div>
        </Link>

        <motion.div 
           initial={{ x: -400 }}
           animate={{
             x: 0,
           }}
           transition={{
             duration: 0.9,
             type: "spring",
             stiffness: 100
           }}
        className="absolute z-50 pt-16 w-[925px] h-screen">
          <main className='mx-auto w-[350px] h-[395px] pt-[100px]'>
            <div className='w-[339px] h-[72px] mb-[30px] mx-auto'>
              <h1 className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent text-[32px] text-center font-Poppins font-normal leading-[48px]'>Sign in</h1>
              <p className='text-center text-base text-[#292929] font-Poppins font-normal leading-[24px] '>Weclome back, continue where you left off</p>
            </div>

            <form action="">
              <div className='space-y-5'>
                <Input width='w-[350px]' label='Email address' type='email' />
                <Input width='w-[350px]' label='Password' type='password' />
              </div>
              <div>
                <Link href='#'><p className='text-[#1937AD] text-right text-sm pt-2 leading-[21px] font-Poppins font-normal underline underline-offset-1 cursor-pointer'>Forgot password</p></Link>
              </div>
              <div className='mt-[30px]'>
                <Button text='Sign in' width='w-[350px]' height='h-[40px]' radius='rounded-[30px]' font='font-Poppins' />
              </div>
            </form>
            <div className='mt-[30px]'>
              <p className='text-sm text-[#292929] leading-[21px] font-Poppins font-normal text-left'>I do not have an account, <Link href='/Register'><span className='text-[#1937AD] text-sm leading-[21px] font-Poppins font-normal underline underline-offset-1 cursor-pointer'>Create account.</span></Link></p>
            </div>
          </main>
        </motion.div>

              <div className='absolute bottom-[-1200px] top-0 h-screen w-screen right-0 overflow-hidden'>
                <main className='h-screen float-right'>
                <motion.div
                          initial={{ x:-800 }}
                          animate={{
                            x:0
                          }}
                          transition={{
                            duration: 0.3,
                            // type: "spring",
                            // stiffness: 100
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
                          duration:0.3  
                        }}
                        className='absolute z-30 bottom-[700px] left-[990px] rounded-[10px]  w-[459px] h-[218px]  bg-gradient-to-r  from-[#1937AD] to-[#F93DE6]'/>
                        </main>
                    </div>

      </section>
    </div>
  )
}

export default Login

// initial={{ x: -400 }}
// animate={{
//   x: 0,
//   rotateY: 180,
//   rotateX: 180,
//   rotateZ:180
// }}
// transition={{
//   duration: 0.9,
//   type: "spring",
//   stiffness: 100
// }}