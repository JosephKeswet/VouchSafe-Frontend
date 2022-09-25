import Image from 'next/image'
import React from 'react'
import LogoWhite from '../Assets/logo/VouchSafe_Logo_White.png'
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';


type Props = {}

const Footer = (props: Props) => {
  return (
    <div>

        <footer className='h-[220px] bg-[#1937AD]'>
            <main className='flex justify-between pt-[24px] pb-[63.px] mx-auto w-[1340px] h-[132px]'>
                <div className='flex items-center gap-[10px] w-[152px] h-[31px]'>
                    <Image src={LogoWhite} alt="Vouchsafe logo white" width={31} height={31} />
                    <h1 className='text-white text-xl font-Anybody font-bold leading-[21px]'>vouchsafe</h1>
                </div>

                <section className='flex justify-between w-[550px] text-white'>
                    <ul className='text-base leading-[32px] font-Anybody font-normal'>
                        <li className='cursor-pointer'>Support</li>
                        <li className='cursor-pointer'>Learn</li>
                        <li className='cursor-pointer'>Privacy</li>
                        <li className='cursor-pointer'>Terms</li>
                    </ul>

                    <ul className='text-base leading-[32px] font-Anybody font-normal'>
                        <li className='cursor-pointer'>
                        <Link   smooth={true} spy={true} duration={500} offset={5} to="works">
                            How it works
                        </Link>    
                        </li>
                        <li className='cursor-pointer'>
                        <Link   smooth={true} spy={true} duration={500} offset={5} to="use">
                            What we do
                        </Link>    
                        </li>
                        <li className='cursor-pointer'>
                        <Link   smooth={true} spy={true} duration={500} offset={5} to="pricing">
                            Pricing
                        </Link>    
                        </li>
                        <li className='cursor-pointer'>Developer</li>
                    </ul>

                    <div className='text-base leading-[32px] font-Anybody font-normal'>
                        <h1>support@vouchsafe.com</h1>
                        <ul className='flex justify-end gap-[10px]'>
                            <li className='cursor-pointer'><FaFacebookSquare className='w-6 h-6 text-white'/></li>
                            <li className='cursor-pointer'><FaInstagramSquare className='w-6 h-6 text-white'/></li>
                            <li className='cursor-pointer'><FaTwitter className='w-6 h-6 text-white'/></li>
                        </ul>
                    </div>
                </section>
            </main>
        </footer>
    </div>
  )
}

export default Footer