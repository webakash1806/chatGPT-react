import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const SearchCont = ({ onKeyDown, value, onChange, onClick }) => {
    return (
        <>
            <textarea onKeyDown={onKeyDown} value={value} onChange={onChange}
                className='text-white bg-[#222229] w-[95vw] sm:w-[90vw] md:min-w-[48rem] md:max-w-[48rem] lg:min-w-[46rem] lg:max-w-[46rem] rounded-lg resize-none border border-slate-600  shadow-sm shadow-[#6365f1e4] outline-none p-[5px_10px]'
                name="" id="" rows="2"
                placeholder='Search Something...'></textarea>
            <FontAwesomeIcon className='absolute text-white bg-[#6366F1] right-3 bottom-4 text-[17px] border border-[#6366F1] shadow-sm shadow-[#ffffff] p-2 rounded-md cursor-pointer' icon={faPaperPlane} onClick={onClick} />
        </>
    )
}

export default SearchCont
