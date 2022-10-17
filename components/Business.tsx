import { faArrowLeft,faArrowDown, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import useButton from '../hooks/useButton'
import Button_Info from './Button_Info'

interface Props{
    typeOfBusiness?:string[],
    country?:string,
    State?:string,
    zipCode?:string,
    LGA?:string,
    street?:string,
    businessSector?:string,
    route1?:string,
    route2?:string
}




const BoutiqueComponent = () => (<div>
    <h1 className=' pl-4 text-[#292929] text-sm text-left pb-1 font-Poppins font-medium leading-[21px]'>
<span className='text-[#E80000]'>*</span> Boutique</h1>
<div className='flex justify-center gap-[10px] items-center flex-wrap mb-[30px]'>
<Button_Info text='Trift' width='w-[186px]' route='' />
<Button_Info text='Tailor' width='w-[186px]' route=''/>
<Button_Info text='New wears' width='w-[186px]' route=''/>
</div>
<hr />   
</div>)

const PhoneComponent = () =>{
    return (
    <div>
        <h1 className=' pl-4 text-[#292929] text-sm text-left pb-1 font-Poppins font-medium leading-[21px]'>
               <span className='text-[#E80000]'>*</span> Phone/Laptop store</h1>
            <div className='flex justify-center gap-[10px] items-center flex-wrap mb-[30px]'>
               <Button_Info text='Phone' width='w-[186px]' route='' />
               <Button_Info text='Laptop' width='w-[186px]' route=''/>
               <Button_Info text='Accessoriess' width='w-[186px]' route=''/>
            </div>
            <hr />   
    </div>
)}

const SupermarketComponent = () => (
    <div>
            <h1 className=' pl-4 text-[#292929] text-sm text-left pb-1 font-Poppins font-medium leading-[21px]'>
               <span className='text-[#E80000]'>*</span> Supermarket</h1>
            <div className='flex justify-center gap-[10px] items-center flex-wrap mb-[30px]'>
               <Button_Info text='Provisions' width='w-[284px]' route='' />
               <Button_Info text='Non-provisions' width='w-[284px]' route=''/>
            </div>
            <hr />   
    </div>
)



const Business = ({typeOfBusiness,country,State,zipCode,LGA,street,businessSector,route1,route2}: Props) => {

    const [Component, setComponent] = useState(() => BoutiqueComponent);
    const [height,setHeight] = useState(false)
    const getId = (e:React.SyntheticEvent) =>{
        console.log(e.currentTarget.id);
    }

    const heightHandler = () =>{
        if (height) {
            setHeight(false)
        }else{
            setHeight(true)
        }
    }

    // var emptyArray:string[] = [];
    // const [active,setActive] = useState(false);
   


    // const buttonCheck = (e:React.SyntheticEvent) =>{
    //     const checkedId = emptyArray.includes(e.currentTarget.id);
    //     emptyArray.push(e.currentTarget.id)
    //     console.log(emptyArray)

    //     // const arrayLength = emptyArray.length;
    //     // if (checkedId && emptyArray.length == 1) {
    //     //   setHeight(false);
    //     //   setActive(false);
    //     //   console.log(emptyArray);
    //     //   let newArray:string[] = emptyArray.filter((id) =>{
    //     //     return id == e.currentTarget.id
    //     //   })

         
    //     //   console.log(newArray)
    //     //   // emptyArray.pop(e.currentTarget.id)
    //     //   console.log(e.currentTarget.id);
    //     // }else if (!checkedId) {
    //     //   emptyArray.push(e.currentTarget.id)
    //     //   setHeight(true);
    //     //   setActive(true);
    //     // }else if (arrayLength <= 0) {
    //     //   setHeight(false);
    //     //   setActive(false);
    //     // }else if (arrayLength >= 1) {
    //     //   setHeight(true);
    //     // }
    // }




  return (
        <div className='flex justify-center items-center bg-[#797979] h-screen'>
        <section className={(height)? 'w-[978px] h-[730px] bg-white shadow-lg rounded-[15px] mt-[100px] mb-[100px] transition-all duration-300 ease-in-out ' 
        : 'w-[978px] h-[700px] bg-white shadow-lg rounded-[15px] transition-all duration-300 ease-in-out  ' }>
            
        {/* Top section */}
        <div className='flex justify-center items-center mx-auto mt-[30px] ml-[35px] mr-[184px]'>
            <div className='w-[40px] h-[40px] flex justify-center items-center mr-[109px] rounded-full border border-solid  border-[#E1E1E1] cursor-pointer'><FontAwesomeIcon icon={faArrowLeft} className='w-[19.99px] h-[20.02px] text-[#797979]
            ' /></div>
            <div className='w-[609px] h-[72px] '>
                <h1 className='bg-clip-text bg-gradient-to-r  from-[#1937AD] to-[#F93DE6] text-transparent text-[32px] text-center leading-[48px] font-Poppins font-semibold'>Business information</h1>
                <p className='text-[#292929] text-base text-center leading-6 font-Poppins font-medium '>Fill out your business information so that we can create a dashboard for you</p>
            <h1 className='text-center text-[#292929] text-xl font-Poppins font-semibold leading-[30px] mt-[20px]'>E-commerce</h1>
            </div>
        </div>

        {/* Middle section */}
    
  
        <div className='mt-[60px] w-[568px] mx-auto'>
                <h1 className=' pl-4 text-[#292929] text-sm text-left pb-1 font-Poppins font-medium leading-[21px]'>
                   <span className='text-[#E80000]'>*</span> Is your business a wholesale or a retail business?</h1>
                <div className='flex justify-center gap-[10px] items-center'>
                   <Button_Info text='Wholesale' width='w-[284px]' route=''/>
                   <Button_Info text='Retail' width='w-[284px]' route=''/>
                </div>
             </div>   



            <div className='mt-[60px]  w-[578px] mx-auto'>
                <h1 className=' pl-4 text-[#292929] text-sm text-left pb-1 font-Poppins font-medium leading-[21px]'>
                   <span className='text-[#E80000]'>*</span> What type of business are you</h1>
                <div className='flex justify-center gap-[10px] items-center flex-wrap mb-[30px]'>
                    <div onClick={(e) => {
                        setComponent(() => BoutiqueComponent)
                        heightHandler()
                        // buttonCheck(e)
                        getId(e)
                    }}
                    id='Boutique'
                    >
                        <Button_Info text='Boutique' width='w-[186px]' route='' />
                    </div>
                   <Button_Info text='Electronic store' width='w-[186px]' route=''/>
                   <div onClick={(e) => {
                    setComponent(() => PhoneComponent)
                        // buttonCheck(e)
                        heightHandler()
              
                    getId(e)
                }}
                id='Phone'
                >
                   <Button_Info text='Phone/Laptop store' width='w-[186px]' route=''/>
                   </div>
                   <div onClick={(e) => {
                    setComponent(() => SupermarketComponent)
                    heightHandler()
                    // buttonCheck(e)
                    getId(e)
                }}
                id='Supermarket'
                >
                   <Button_Info text='Supermarket' width='w-[284px]' route=''/>
                   </div>
                   <Button_Info text='Provision sttore' width='w-[284px]' route=''/>
                </div>
                {/* Conditional rendered content */}
                {(!height) && <hr />}   
                    <div>
                        {height  ? <Component/> : <div></div>}
                    </div>
                {/* End of conditional rendered content */}

                <main className='flex flex-wrap gap-[10px] mt-[30px] mb-[20px]'>
                    <div >
                        <h1 className=' pl-4 text-[#292929] text-sm text-left pb-1 font-Poppins font-medium leading-[21px]'>
                        <span className='text-[#E80000]'>*</span> Country</h1>
                        <div className='w-[219px] flex items-center '>
                            <input type="text" name="" id="" className='w-[219px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]' />
                            <span className='absolute z-10 ml-[190px] flex items-center cursor-pointer '>
                                <FontAwesomeIcon icon={faArrowDown}  className="text-[#797979]  text-sm"/> 
                                </span>
                        </div>
                    </div>

                    <div>
                        <h1 className=' pl-4 text-[#292929] text-sm text-left pb-1 font-Poppins font-medium leading-[21px]'>
                        <span className='text-[#E80000]'>*</span> State</h1>
                        <div className='w-[219px] flex items-center '>
                            <input type="text" name="" id="" className='w-[219px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]' />
                            <span className='absolute z-10 ml-[190px] flex items-center cursor-pointer '>
                                <FontAwesomeIcon icon={faArrowDown}  className="text-[#797979]  text-sm"/> 
                                </span>
                        </div>
                    </div>


                    <div>
                        <h1 className=' pl-4 text-[#292929] text-sm text-left pb-1 font-Poppins font-medium leading-[21px]'>
                        ZIP code</h1>
                        <div className='w-[120px] flex items-center '>
                            <input type="text" name="" id="" className='w-[120px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]' />
                        </div>
                    </div>


                    <div>
                        <h1 className=' pl-4 text-[#292929] text-sm text-left pb-1 font-Poppins font-medium leading-[21px]'>
                        <span className='text-[#E80000]'>*</span> Local Government Area</h1>
                        <div className='w-[284px] flex items-center '>
                            <input type="text" name="" id="" className='w-[284px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]' />
                            <span className='absolute z-10 ml-[255px] flex items-center cursor-pointer '>
                                <FontAwesomeIcon icon={faArrowDown}  className="text-[#797979]  text-sm"/> 
                                </span>
                        </div>
                    </div>


                    <div>
                        <h1 className=' pl-4 text-[#292929] text-sm text-left pb-1 font-Poppins font-medium leading-[21px]'>
                        <span className='text-[#E80000]'>*</span> Street</h1>
                        <div className='w-[284px] flex items-center '>
                            <input type="text" name="" id="" className='w-[284px] h-[40px] pl-4 outline-none border border-solid border-[#E1E1E1] rounded-[50px]' />
                            <span className='absolute z-10 ml-[255px] flex items-center cursor-pointer '>
                                <FontAwesomeIcon icon={faArrowDown}  className="text-[#797979]  text-sm"/> 
                                </span>
                        </div>
                    </div>
                </main>
             </div>
            
            <div className= 'absolute bottom-[110px] transition-all duration-300 ease-in-out flex items-center ml-[35px] cursor-pointer   gap-[5px] text-[#1937AD]'>
                <FontAwesomeIcon icon={faArrowLeft} className='text-xs '/>
                <h1 className='text-sm leading-[21px] font-Poppins font-medium'>Previous</h1>
            </div>

            <div className='absolute bottom-[100px] transition-all duration-300 ease-in-out flex items-center ml-[850px] cursor-pointer '>
                <button  className='w-[100px] h-[40px] bg-[#1937AD] rounded-[50px] text-center text-white leading-[21px] font-Poppins font-semibold'>Finish <FontAwesomeIcon icon={faArrowRight} className='pl-[5px]'/></button>
            </div>

    </section>
    </div>
  )
}

export default Business