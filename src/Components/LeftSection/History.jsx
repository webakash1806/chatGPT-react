import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

const History = () => {
    return (
        <div className='p-[1rem_0] text-white  w-full h-full overflow-y-scroll overflow-x-hidden'>
            <p className='pb-2 text-[0.85rem] text-[#b3b2b2] font-semibold tracking-wide'> <span><FontAwesomeIcon icon={faClockRotateLeft} /></span> History</p>
            <p className='w-[17rem]  p-[6px_10px] text-[0.92rem] rounded-md bg-[#2c2c37] font-semibold'>what is chat gpt</p>
        </div>
    )
}

export default History