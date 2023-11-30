import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons'

const Response = ({ text, isAI }) => {
    return (
        <div className='max-w-[50rem] p-4 mb-6'>
            <p className='pb-1 flex items-center gap-1 text-[17px] font-bold tracking-wide '><FontAwesomeIcon className='bg-[#6366f9] w-[11.5px] h-[11.5px] p-[7.5px] rounded-[50%] '
                icon={isAI ? faUser : faCommentDots} />You</p>
            <p className='pl-[2.1rem] font-semibold text-[#e5e5ed] text-[15px]'>{text}</p>
        </div>
    )
}

export default Response
