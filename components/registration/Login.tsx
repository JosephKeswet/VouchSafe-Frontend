import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../../Assets/logo/VouchSafe_Logo.svg'
import { motion } from "framer-motion"
import Login_Bg from '../../Assets/img/Login_Bg.png'
import AppleLogo from '../../Assets/icons/Apple Logo.svg'
import GoogleLogo from '../../Assets/icons/Google.svg'
import { useRouter } from 'next/router'
import Axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { login } from '../../slices/userSlice'





const Login = () => {

  const dispatch = useDispatch();
  const router = useRouter()

  // States
  const [error, setError] = useState(null)
  const [successMessage,setSuccessMessage] = useState('')
  const [loading,setLoading] = useState(false)
  const [user, setUser] = useState('')
  const [auth,setAuth] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const url = 'https://vouchsafe-backend-api.herokuapp.com/api/v1/vouchsafe/auth/signin'

  const signIn = async (e:React.SyntheticEvent) =>{

    e.preventDefault()
    setLoading(true)
    const data = {email,password}
    try{
    const response = await fetch(url,{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json",
      },
    })
      const content = await response.json()
      setUser(content)
      
      if (!response.ok) {
        setLoading(false)
        console.log(content.message)
      }
 
        setAuth(content.message)


        setAuth(content.message)
        console.log(content.message);

      if (response.ok) {
        localStorage.setItem('user', content)
        dispatch(login())
        router.push('/BusinessRoutes/BusinessInfo')

        if (user) {
          dispatch(login())
          router.push('/BusinessRoutes/BusinessInfo')
        }
        setLoading(false)
        setError(null)
        setSuccessMessage(content.message)
        console.log(content);
  
      }
    }catch(err){
      setLoading(false)
      console.log(err);
    }
   

    

    

    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      dispatch(login());
      setUser(foundUser);
    }
  }, []);


  return (
    <div className=''>
      {loading ? (<div>Loading</div>): (
      <section className="relative  h-screen ">
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
          <main className='mx-auto w-[350px] h-[395px] pt-[100px]'>
            <div className='w-[339px] h-[72px] mb-[30px] mx-auto'>
              <h1 className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent text-[32px] text-center font-Poppins font-semibold leading-[48px]'>Sign in</h1>
              <p className='text-center text-base text-[#292929] font-Poppins font-normal leading-[24px] '>Welcome back, continue where you left off</p>
            </div>

            <form onSubmit={signIn}>
              <div className='space-y-5'>

                              {/* Email */}
                              <div className={`w-[350px] h-[64px]`}>
                              <label className='text-left h-[21px] text-sm font-Poppins font-medium leading-[21px] align-top pl-4 mb-[3px]'>Email address</label>
                                <input type='email' name="" id=""
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value)
                                  setAuth('')
                                }}
                                className={`w-[350px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]`} required/>
                              </div>

                              {/* Password */}
                              <div className={`w-[350px] h-[64px]`}>
                              <label className='text-left h-[21px] text-sm font-Poppins font-medium leading-[21px] align-top pl-4 mb-[3px]'>Password</label>
                                <input type='password' name=""  id="" 
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value)
                                  setAuth('')
                                }}
                                className={`w-[350px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]`} required/>
                              </div>
          
              </div>
              <div>
                <Link href='/ForgotPassword'><p className='text-[#1937AD] text-right text-sm pt-2 leading-[21px] font-Poppins font-normal underline underline-offset-1 cursor-pointer'>Forgot password</p></Link>
              </div>
              <div className='mt-[30px]'>
                    <button type='submit' className='flex items-center justify-center hover:opacity-70 transition-all duration-500 bg-[#1937AD] text-white text-sm  font-Poppins font-semibold cursor-pointer w-[350px] h-[40px] rounded-[30px]'
                    >Sign in</button>
              </div>
              {auth ? <div>{auth}</div> : <div></div> }
            </form>
            <div className='mt-[30px]'>
            <p className='text-center text-[#292929] text-sm leading-[21px] mb-[20px] mt-[30px] font-Poppins font-medium'>Or sign in using</p>

            <div className='flex justify-center items-center gap-[20px] mb-[30px] h-[43px]'>
                <div className='icon-border-gradient rounded-full  w-[43px] h-[43px] flex items-center justify-center'>
                    <Image src={GoogleLogo} alt="Google icon" className='cursor-pointer'/>
              </div>
              <div className='icon-border-gradient rounded-full  w-[43px] h-[43px] flex items-center justify-center'>
                  <Image src={AppleLogo} alt="Apple icon" className='cursor-pointer '/>
              </div>
            </div>

              <p className='text-sm text-[#292929] leading-[21px] font-Poppins font-normal text-center'>I do not have an account, <Link href='/Register'><span className='text-[#1937AD] text-sm leading-[21px] font-Poppins font-normal underline underline-offset-1 cursor-pointer'>Create account.</span></Link></p>
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
      )}
    </div>
  )
}

export default Login