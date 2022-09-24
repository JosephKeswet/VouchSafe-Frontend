import Image from 'next/image'
import React from 'react'
import Logo from '../Assets/logo/VouchSafe_Logo.svg'
import Button from './Button'



type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className='fixed bg-white   right-0 left-0 bottom-0 top-0 z-40 flex px-[50px] justify-between items-center h-[90px] '>
        <div className='flex  items-center w-[152.48px] h-[31px] cursor-pointer'>
        <Image src={Logo} alt="Vouchsafe logo"  />
        <h2 className='text-[#1937AD] text-xl leading-[21px]  font-Anybody font-bold pl-[10px] h-[15px]'>vouchsafe</h2>
        </div>
        
        <ul className='flex items-center justify-between px-[5px] w-[647px] h-[44px] border border-solid border-[#E1E1E1] rounded-[30px] '>
          <li className='flex items-center justify-center rounded-[30px] text-sm text-white leading-[14px] font-normal
          font-Anybody bg-[#1937AD] w-[56px] h-[34px] cursor-pointer'>Info</li>
          <li className='text-sm text-[#797979] leading-[14px] font-Anybody font-normal w-[119px] cursor-pointer'>How it works</li>
          <li className='text-sm text-[#797979] leading-[14px] font-Anybody font-normal w-[110px] cursor-pointer'>What we do</li>
          <li className='text-sm text-[#797979] leading-[14px] font-Anybody font-normal w-[78px] cursor-pointer'>Pricing</li>
          <li className='text-sm text-[#797979] leading-[14px] font-Anybody font-normal w-[100px] cursor-pointer'>Developer</li>
          <li className='text-sm text-[#797979] leading-[14px] font-Anybody font-normal w-[60px] 
          cursor-pointer'>Sign in</li>
        </ul>

        <Button text='Try it free' width='w-[151px]' height='h-[44px]' radius='rounded-[30px]'/>
      </nav>
    </div>
  )
}

export default Navbar