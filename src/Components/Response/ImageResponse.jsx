import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons'

const ImageResponse = ({ url, text, isAI }) => {
    return (
        <div>
            <div className={`${isAI ? 'bg-transparent' : 'bg-[#4a4a4a63] mb-6 border border-gray-700 border-b-[3px] pt-3 pb-4 rounded-md'} w-[92vw] sm:w-[88.5vw] md:min-w-[47rem] md:max-w-[47rem] lg:min-w-[45rem] lg:max-w-[45rem] p-[7px] mr-2`}>
                <p className='pb-1 flex items-center gap-[6px] text-[17px] font-bold tracking-wide '><FontAwesomeIcon className={`${isAI ? 'bg-[#6366f9]' : 'bg-[#00b66a]'} w-[13.5px] h-[13.5px] p-[6.5px] rounded-[30%] `}
                    icon={isAI ? faUser : faCommentDots} />{isAI ? 'You' : 'spaceAI'}</p>
                <p className={`${isAI ? 'font-semibold' : 'tracking-[0.2px] text-[16px]'} pl-[2.1rem]   text-[#e5e5ed] text-[15px]`}>{text}</p>
                {isAI ? "" : <div className='flex flex-col gap-4 w-full items-center justify-center mt-3'><img src={url} alt="image"
                    className='w-[80vw] rounded-lg border-[1px] border-black shadow-md shadow-[#47ffc5] ' />
                    <p className='font-semibold text-[#faa4a4]'>*Sometime generation takes long time*</p>
                </div>}

            </div>
        </div>
    )
}

export default ImageResponse
