import React from 'react'

interface Props  {
    //Change all amounts to type of number & productaddition
    title:string,
    primaryAmount?:string,
    secondaryAmount?:string,
    timeDate?:string,
    productExp?:string,
    productNumber?:number,
    productAddition?:string,
    productAddTime?:string,
    visitNumber?:number,
    wide?:boolean


}

const Card = ({title,primaryAmount,secondaryAmount,timeDate,productAddTime,productAddition,productExp,productNumber,wide,visitNumber}: Props) => {
  return (
    <div>
        <div className='w-[230.25px] h-[195px]  summary-border-gradient'>
            <main className='mx-[20px] my-[20px]'>
                <div>
                    <h4 className='text-base text-[#797979] font-Poppins font-normal leading-[24px]'>{title}</h4>
                    <h1 className={`text-2xl text-[#1937AD] font-Poppins font-medium leading-[36px] mt-[15px] ${timeDate && 'mb-[27px]'} ${productNumber && 'mb-[14.5px]'} ${visitNumber && 'mb-[37px]'} truncate`}>{primaryAmount}{visitNumber}</h1>

                    <div className='flex items-center gap-[5px]'>
                        <h1 className='text-base text-[#292929] font-Poppins font-medium leading-[24px]'>{productNumber}</h1>
                        <h1 className='text-sm text-[#797979] leading-[21px] font-Poppins font-normal'>{productExp}</h1>
                    </div>
                </div>

                <div>
                    <p className='text-sm text-[#797979] font-Poppins font-normal leading-[21px]'>{timeDate}</p>

                    {secondaryAmount ? <div className='flex items-center justify-center w-[93px] h-[27px] rounded-[30px] bg-[#D8E0FF] mt-[5px]'>
                        <h1 className='text-sm text-[#1937AD] font-Poppins font-medium leading-[21px]'>₦{secondaryAmount}</h1>
                    </div> :   <div className='flex items-center gap-[5px] mt-[14.5px]'>
                                <div className={`flex justify-center items-center ${!wide ? 'w-[49px]' : 'w-[80px]'} h-[27px] rounded-[30px] ${!wide ? 'bg-[#EAFDEA]' : 
                                'bg-[#FEECED]'}`}>
                                    <h3 className={`text-sm ${!wide ? 'text-[#2A9F27]' : 'text-[#E80000]'} leading-[21px] font-Poppins font-normal`}>{productAddition}</h3>
                                </div>
                                <h3 className='text-sm text-[#797979] font-Poppins font-normal leading-[21px]'>in 7 days</h3>
                    </div>}

                  
                </div>
            </main>
        </div>
    </div>
  )
}

export default Card