import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../Assets/logo/VouchSafe_Logo.svg'
import NotificationBell from '../../Assets/icons/NotificationBell.svg'


type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
        <section className='flex justify-between items-center h-[101px]'>
                <div>
                    <Link href='/'>
                    <div className='flex  items-center w-[152.48px] h-[31px] cursor-pointer'>
                    <Image src={Logo} alt="Vouchsafe logo"  />
                    <h2 className='text-[#1937AD] text-xl leading-[21px]  font-Anybody font-bold pl-[10px] h-[15px]'>vouchsafe</h2>
                    </div>
                </Link>
                </div>
            <div className='flex items-center gap-[43.85px]'>
                <ul className='flex items-center  space-x-8 px-1 w-[369px] h-[43px] rounded-[30px] border-gradient'>
                    <li className='flex items-center justify-center w-[100px] h-[33px] rounded-[30px] bg-[#1937AD] text-white text-[14px] font-Poppins font-mediumd leading-[21px]'>Summary</li>
                    <li className='flex items-center justify-center  h-[33px] rounded-[30px] text-[#292929] text-[14px] font-Poppins font-medium leading-[21px] '>Data</li>
                    <li className='flex items-center justify-center  h-[33px] rounded-[30px] text-[#292929] text-[14px] font-Poppins font-mediumd leading-[21px]'>Inventory</li>
                    <li className='flex items-center justify-center h-[33px] rounded-[30px] text-[#292929] text-[14px] font-Poppins font-medium leading-[21px]'>Tools</li>
                </ul>

                <div className='relative'>
                    <input type="text" placeholder='Search' className='w-[320px] h-[43px] pl-[20px] 
                    py-[11px] border border-solid border-[#E1E1E] text-[14px] rounded-[30px] placeholder:text-[#797979] placeholder:text-[14px] outline-none'/>
                    <div className='flex items-center justify-center w-[33px] h-[33px] bg-[#1937AD] rounded-[22px] absolute top-[6px] bottom-0 left-auto right-[5px]'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white'/>
                    </div>
                </div>
            </div>

                <div className='flex'>
                    <div className='w-[142px] mr-[30px]'>
                        <h2 className='text-[#292929] text-[16px] font-Poppins font-medium leading-[24px]'>Onigbinde Stores</h2>
                        <h3 className='text-[12px] text-[#797979] leading-[18px] font-Poppins font-normal'>Supermarket</h3>
                    </div>
                    <div className=' border-1 border border-solid border-[#797979]'/>
                    <div className='flex items-center gap-[17px] ml-[27px]'>
                        <Image src={NotificationBell} alt='Notification icon' />
                        <div className='flex items-center justify-center w-[33px] h-[19px] rounded-[30px] bg-[#1937AD]'>
                            <h1 className='text-white text-[12px] leading-[18px] font-Poppins font-semibold'>10+</h1>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Navbar