import React from 'react'

interface Props{
    text:string,
    width:string,
    height:string,
    radius:string
}

const Button = ({text,width,height,radius}:Props) => {
  return (
    <div>
        <div className={`flex items-center justify-center hover:opacity-70 transition-all duration-500 bg-[#1937AD] text-white text-sm  font-Anybody font-normal 
        cursor-pointer
        ${width} ${height} ${radius}`}>
            <h1>{text}</h1>
        </div>
    </div>
  )
}

export default Button