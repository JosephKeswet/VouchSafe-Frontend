import React from 'react'

interface Props{
    label:string,
    width:string,
    type:string
}

const Input = ({label,width,type}: Props) => {
  return (
    <div>
        <div className={`${width} h-[64px]`}>
            <h1 className='text-left h-[21px] text-sm font-Poppins font-normal leading-[21px] align-top pl-4 mb-[3px]'>{label}</h1>
            <input type={type} name="" id="" className={`${width} h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]`} />
        </div>
    </div>
  )
}

export default Input