import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Logo from '../Assets/logo/VouchSafe_Logo.svg'
import Button from './Button'
import Link from 'next/link'
import {Link as ScrollLink} from 'react-scroll'





const Navbar = () => {
  const router = useRouter()
  const [color,setColor] = useState(false)

  



  const handleClick = () =>{
      if (color) {
        setColor(true)
      }else{
        setColor(false)
      }
  }


  
  return (
    <div>
      <nav className='fixed bg-white   right-0 left-0 bottom-0 top-0 z-50 flex px-[50px] justify-between items-center h-[90px] '>

      <Link href='/'>
        <div className='flex  items-center w-[152.48px] h-[31px] cursor-pointer'>
          <Image src={Logo} alt="Vouchsafe logo"  />
          <h2 className='text-[#1937AD] text-xl leading-[21px]  font-Anybody font-bold pl-[10px] h-[15px]'>vouchsafe</h2>
        </div>
      </Link>
    
        
        <ul className='flex items-center justify-between px-[5px] w-[647px] h-[44px] border border-solid border-[#E1E1E1] rounded-[30px] '>
        <ScrollLink smooth={true} spy={true} activeClass="active" duration={500} offset={5} to="hero">
          <li className='flex items-center justify-center rounded-[30px] text-sm text-white leading-[14px] font-normal
          font-Anybody  w-[56px] h-[34px] cursor-pointer bg-[#1937AD]'>Info</li>
        </ScrollLink>

        <ScrollLink smooth={true} spy={true} activeClass="active" duration={500} offset={5} to="works">

          <li className= {!color ? 'text-sm text-[#797979] leading-[14px] font-Anybody font-normal w-[119px] cursor-pointer' : 'bg-black text-yellow-500'}
          onClick={handleClick}
          >
            How it works</li>
        </ScrollLink>

        <ScrollLink smooth={true} spy={true} duration={500} activeClass="active" offset={5} to="use">
          <li className='text-sm text-[#797979] leading-[14px] font-Anybody font-normal w-[110px] cursor-pointer'
          >What we do</li>
          </ScrollLink>
          
          <ScrollLink smooth={true} spy={true} duration={500} activeClass="active" offset={5} to="pricing">
          <li className='text-sm text-[#797979] leading-[14px] font-Anybody font-normal w-[78px] cursor-pointer'>Pricing</li>
          </ScrollLink>

 
          <li className='text-sm text-[#797979] leading-[14px] font-Anybody font-normal w-[100px] cursor-pointer'>Developer</li>
    
        <Link href='/SignIn'>
          <a>
          <li className='text-sm text-[#797979] leading-[14px] font-Anybody font-normal w-[60px] 
          cursor-pointer'>Sign in</li>
          </a>
        </Link>
        </ul>

        <Link href="/Register">
          <a>
          <Button text='Try it free' width='w-[151px]' height='h-[44px]' radius='rounded-[30px]' font='font-Anybody'/>
          </a>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar