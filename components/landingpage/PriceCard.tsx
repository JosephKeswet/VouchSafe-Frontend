import React from 'react'


interface IServices{
    id:number,
    service:string
}

interface Props {
    price:string,
    annualPay:string,
    services:Array<IServices>
}

const PriceCard = ({services,price,annualPay}: Props) => {
  return (
    <div>
        <div className='card-border-gradient w-[413px] h-[396px] rounded-[25px] '>
                        <main className='ml-[30px] mt-[30px]'>
                            <div className=' h-[76px]'>
                                <h1 className='text-[48px] leading-[50px] bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent  font-Anybody font-normal mb-[5px]'>{price} <span className='text-xl text-[#292929] leading-[21px] font-Anybody font-normal'>per month</span></h1>  
                                <p className='text-[#797979] text-xl font-Anybody font-normal leading-[21px]'>{annualPay}</p> 
                            </div>
                            <div className='mt-[40px]'>
                            {services.map(service =>( 

                                <div className='flex items-center gap-[10px] mb-[15px]' key={service.id}>
                                    <div className='flex items-center justify-center bg-[#797979] rounded-[30px] w-[25px] h-[25px]'>
                                        <h1 className='text-white text-base leading-[17px] font-Anybody font-normal'>{service.id}</h1>
                                    </div>

                                    <h3 className='text-[#292929] text-[16px] font-Anybody font-normal leading-[17px]'>{service.service}</h3>
                            
                                </div>
                                        ))
                                    }
                            </div>
                           
                        </main>
                    </div>
    </div>
  )
}

export default PriceCard