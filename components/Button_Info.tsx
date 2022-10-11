import { useRouter } from 'next/router'
import React, { useState } from 'react'

interface Props {
    text:string,
    route:string,
    width:string,
    mybool?:boolean
   
}

const Button_Info = ({text,route,width,mybool}: Props) => {
    const [color,setColor] = useState(false)
    const router = useRouter()


    const handleColor1 = () =>{
        if (!color) {
            setColor(true)
        }else{
            setColor(false)
        }
        console.log(color)
        router.push(route)
    }
  return (
    <div>
            <button  className={!color? 
                    `business-border-gradient relative ${width} h-[40px] border border-solid border-[#E1E1E1] bg-white rounded-[50px] text-[#797979] text-sm font-Poppins font-medium leading-[21px] `
                    : `${width} h-[40px] border border-solid border-[#E1E1E1] rounded-[50px] text-white bg-[#1937AD] text-sm font-Poppins font-medium leading-[21px]`
                    }
                    onClick={handleColor1}
                    ><span className={!color? 'absolute z-30 left-0 right-0 top-2 bottom-0 hover:bg-clip-text hover:bg-gradient-to-r  hover:from-[#1937AD] hover:to-[#F93DE6] hover:text-transparent' 
                    : 'text-white'    
            }
            >{text}</span></button>
    </div>
  )
}

export default Button_Info