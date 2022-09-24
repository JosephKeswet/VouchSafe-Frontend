import Image from 'next/image'
import React from 'react'
import QuestionsIcon from '../../Assets/img/Questions.png'
import QuestionCard from './QuestionCard'


type Props = {}

const Questions = (props: Props) => {
  return (
    <div>
        <section className='mt-[200px] mb-[150px]'>
                <div className='w-[433px] h-[93px] mx-auto'>
                        <div className='flex justify-center mb-[10px]'>
                            <Image src={QuestionsIcon} objectFit='cover' alt="Frequently asked questions icon"/>
                        </div>
                        <div className='flex justify-center '>
                            <h1 className='text-[#797979] text-[32px] font-Anybody font-normal leading-[33px] text-center '>Frequently asked questions</h1>
                        </div>
                </div>

                <div className='flex justify-center items-center w-[1340px] h-[539px] bg-[#E1E1E1] rounded-[25px] mx-auto mt-[50px]'>
                    <div className='flex flex-wrap gap-[50px] w-[1240px] h-[439px]'>
                        <QuestionCard head='Do I need to enter my credit card details to sign up?' 
                        text={`No. You won’t need to enter in any credit card to sign up. Just create your account and get started for free`}
                        />
                        <QuestionCard head='What is a "Manager Account"?' text='A manager account can create and edit data. A manager account can also add or remove users.'/>
                        <QuestionCard head='Can I cancel at any time?' text='Yes. You can cancel at any time without penalty or hassle.'
                        />
                        <QuestionCard head='Do you provide support?' text='Yes. We provide fast and helpful support via email, phone, and even WhatsApp.'
                        />
                        <QuestionCard head='What if I have more questions?' text={`We’d be happy to answer them.`}
                        />
                    </div>
                </div>

        </section>
    </div>
  )
}

export default Questions