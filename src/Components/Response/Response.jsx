import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons'

const Response = ({ text, isAI }) => {
    return (
        <div className={`${isAI ? 'bg-transparent' : 'bg-[#4a4a4a63] mb-5 border border-gray-700 border-b-[3px] pt-3 pb-5 rounded-md'} max-w-[50rem] p-[8px] mr-2`}>
            <p className='pb-1 flex items-center gap-[6px] text-[17px] font-bold tracking-wide '><FontAwesomeIcon className={`${isAI ? 'bg-[#6366f9]' : 'bg-[#00b66a]'} w-[13.5px] h-[13.5px] p-[6.5px] rounded-[30%] `}
                icon={isAI ? faUser : faCommentDots} />{isAI ? 'You' : 'spaceAI'}</p>
            <p className={`${isAI ? 'font-semibold' : 'tracking-[0.2px] text-[16px]'} pl-[2.1rem]   text-[#e5e5ed] text-[15px]`}>{text}</p>
        </div>
    )
}

export default Response
