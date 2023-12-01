import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faQuestion } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    return (
        <div className=' h-full flex flex-col items-center justify-end gap-[13rem]'>
            <p className='flex items-center gap-1 text-[17.5px] font-semibold p-2'><FontAwesomeIcon className='text-[25px] text-[#6392f1] p-2' icon={faRocket} bounce />How can i help you today <FontAwesomeIcon className='text-[#ff2323] text-[25px]' icon={faQuestion} beatFade /></p>
            <div className=''>
                <a href=''>Try Image Generator!</a>
                <a href="">Try with Voice!</a>
            </div>
        </div>
    )
}

export default Main
