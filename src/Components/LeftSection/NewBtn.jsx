import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const NewBtn = () => {
    return (
        <div className='flex items-center justify-center w-full p-2 gap-3 rounded-[5px] bg-[#6366F1] text-white font-medium tracking-wide'>
            <FontAwesomeIcon icon={faPlus} />
            <p>New Chat</p>
        </div>
    )
}

export default NewBtn
