import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Dropdown = (props: Props) => {
  const options: { label: string }[] = [
    { label: 'Per day'},
    { label: 'Per week'},
    { label: 'Per month'},
    { label: 'Per year'},

  ];

  const [showOptions,setShowOptions] = useState(false)

  return (
    <div>
        <button onClick={() => setShowOptions(false)} className='flex items-center justify-center gap-[10px] w-[130px] h-[33px] bg-[#1937AD] rounded-[30px] text-white text-[12px] leading-[18px] font-Poppins font-normal'>Per week <FontAwesomeIcon icon={faCaretDown} className='text-[18px]'/></button>
        {showOptions && <div>{options.map(option =>(
          <div key={option.label}>
            {option.label}
          </div>
        ))}
        </div>}
    </div>
  )
}

export default Dropdown