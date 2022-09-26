import Image from 'next/image'
import React from 'react'
import DashboardBig from '../../Assets/img/Dashboard.png'
import DashboardSmall from '../../Assets/img/Dashboard 3.png'
import Logo from '../../Assets/logo/VouchSafe_Logo.svg'
import Button from '../Button'
import Link from 'next/link'
// import { Link } from 'react-scroll'


type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=''>
        <section>
                  <main className='h-[298px] '>
                    <h1 className=' font-Courgette font-semibold text-transparent text-[74px] text-center  align-top leading-[70px] bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] 
                    ml-[323px] mr-[324px] mt-[55px]
                    '>Understand your business 
                    <span className='font-Anybody font-semibold text-[64px]'> without being an expert</span>
                    </h1>


                      <div className='w-[284px] h-[36px] mx-auto mt-[61px]'>
                            <div className='px-[24px]'>
                              <Link href="/Register">
                                <a>
                                  <Button text='Try Vouchsafe free' width='w-[213px]' height='h-[44px]' radius='rounded-[30px]' font='font-Anybody'/>
                                  </a>
                              </Link>
                            </div>
                            <p className='pt-[20px] text-[14px] text-[#797979] font-Anybody italic  text-center'>“No credit card required, cancel any time”</p>
                      </div>


                    </main>

                    <div className='relative flex justify-center h-[428px] mt-[70px] '>
                          <div className='absolute left-[185px] top-20'>
                          <Image src={DashboardSmall} alt="Dashboard Image"/>
                          </div>
                          <div className='absolute z-10'>
                          <Image src={DashboardBig} alt="Dashboard Image"/>
                          </div>
                          <div className='absolute right-[180px] top-20'>
                          <Image src={DashboardSmall} alt="Dashboard Image"/>
                          </div>
                    </div>

                    <div className='relative w-[716px] h-[144px] mt-[150px] mx-auto  '>
                      

                        <div className='flex justify-center items-center '>
                          <div className=''>
                           <h1 className='w-[224px] text-[#797979] text-[48px] leading-[50px] font-Anybody font-normal cursor-pointer hover:bg-clip-text hover:bg-gradient-to-r  hover:from-[#1937AD] hover:to-[#F93DE6] hover:text-transparent hover:font-Courgette hover:text-[60px]'>Features</h1>
                           </div>
                            <div className='border-gradient flex justify-center items-center cursor-pointer  
                            w-[212px] h-[61px] mx-auto
                            '>
                            <Image src={Logo} alt="Vouchsafe logo" width={31} height={31} />
                            <h2 className='text-[#1937AD] text-xl leading-[21px]  font-Anybody font-bold pl-[10px] h-[15px]'>vouchsafe</h2>
                            </div>
                            
                        {/* <Link  smooth={true} spy={true} duration={500} offset={5} to="pricing"> */}
                            <h1 className='w-[190px] h-[51px] text-[#797979] text-[48px] leading-[50px] font-Anybody font-normal cursor-pointer hover:bg-clip-text hover:bg-gradient-to-r  hover:from-[#1937AD] hover:to-[#F93DE6] hover:text-transparent hover:font-Courgette hover:text-[60px] hover:h-[60px]'>Pricing</h1>
                        {/* </Link> */}
                        </div>
                        
                        <h1 className='absolute top-24 left-[260px] w-[270px] text-[#797979] text-[48px] leading-[50px] font-Anybody font-normal cursor-pointer hover:bg-clip-text hover:bg-gradient-to-r  hover:from-[#1937AD] hover:to-[#F93DE6] hover:text-transparent hover:font-Courgette hover:text-[60px]'>Developer</h1>

                    </div>

        </section>
    </div>
  )
}

export default Hero