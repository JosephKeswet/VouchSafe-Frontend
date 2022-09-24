import React from 'react'

interface Props {
    head:string,
    text:string
}

const QuestionCard = ({head,text}: Props) => {
  return (
    <div>
        <div className='w-[595px] h-auto bg-white rounded-[15px] '>
            <div className='p-5'>
                <div className='flex items-center gap-[10px] mb-[20px]'>
                    <div className='w-[20px] h-[20px] question-border-gradient '/>
                    <h1 className='text-[#292929] text-xl font-Anybody font-normal leading-[21px]'>{head}</h1>
                </div>
                <p className='break-words text-[#797979] text-base font-Anybody font-normal leading-[24px]' >{text}</p>
            </div>
        </div>
    </div>
  )
}

export default QuestionCard