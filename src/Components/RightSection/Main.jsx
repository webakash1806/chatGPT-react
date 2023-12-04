import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className='mb-1 h-full flex flex-col items-center justify-end gap-[12rem]'>
            <p className='flex items-center gap-1 text-[17.5px] font-semibold p-2'><FontAwesomeIcon className='text-[25px] text-[#6392f1] p-2' icon={faRocket} bounce />How can i help you today <FontAwesomeIcon className='text-[#ff2323] text-[25px]' icon={faQuestion} beatFade /></p>
            <div className='flex flex-col sm:flex-row items-center gap-5 text-[17.5px]'>
                <Link className='border border-slate-700 shadow-sm shadow-slate-600 bg-[#313131] w-[17rem] text-center rounded-md p-[12px_20px]' to="chatGPT-react/image">Try Image Generator!</Link>
                <Link className='border border-slate-700 shadow-sm shadow-slate-600 bg-[#313131] w-[17rem] text-center rounded-md p-[12px_20px]' to="">Try text!</Link>
            </div>
        </div>
    )
}

export default Main
