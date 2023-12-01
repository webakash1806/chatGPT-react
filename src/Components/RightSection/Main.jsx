import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    return (
        <div className=' h-full flex flex-col items-center justify-end gap-[13rem]'>
            <p className='flex items-center gap-2 text-[17.5px] font-semibold p-2'><FontAwesomeIcon className='text-[25px] text-[#63f199]' icon={faRocket} spinPulse />How can i help you today?</p>
            <div className=''>
                <a href=''>Try Image Generator!</a>
                <a href="">Try with Voice!</a>
            </div>
        </div>
    )
}

export default Main
