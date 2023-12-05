import React from 'react'

const Head = ({ headMain }) => {
    return (
        <p className='fixed top-0 left-0 bg-[#272831] z-10 w-full text-center text-[1.2rem] border-b-[1px] font-semibold border-gray-600 p-[12px]'>
            spaceAI <span className='text-[0.9rem] font-semibold bg-transparent p-[0_5px] rounded-md shadow-sm shadow-[#47ffc5] border border-slate-600'>{headMain}</span>
        </p>
    )
}

export default Head
