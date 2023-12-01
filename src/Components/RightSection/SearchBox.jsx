import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { sendMsg } from '../../Hooks/response'
import Main from './Main'
import Response from '../Response/Response'

const SearchBox = () => {
    const [que, setQue] = useState()
    const [answer, setAnswer] = useState([])

    console.log(answer)

    const handleSend = async () => {
        const res = await sendMsg(que)
        setAnswer([...answer, { text: que, isAI: true, fill: true }, { text: res, isAI: false, fill: true }])
        console.log(res)
    }

    return (
        <div className='relative'>
            <div className=' max-h-[70vh] overflow-y-scroll scrollbar-thumb-[#000000] scrollbar-track-grey-800 scrollbar-thin scrollbar'>
                {answer.length === 0 ? <Main /> : <>{
                    answer.map((response, i) => {
                        return <Response key={i + 1} text={response.text} isAI={response.isAI} />
                    })
                }</>}
            </div>
            <textarea onChange={(e) => setQue(e.target.value)}
                className='text-white bg-[#222229] mt-6 min-w-[50rem] rounded-lg resize-none border border-slate-600  shadow-sm shadow-[#6365f1e4] outline-none p-[5px_10px]'
                name="" id="" cols="50" rows="2"
                placeholder='Search Something...'></textarea>
            <FontAwesomeIcon className='absolute text-white bg-[#6366F1] right-3 bottom-4 text-[17px] border border-[#6366F1] shadow-sm shadow-[#ffffff] p-2 rounded-md cursor-pointer' icon={faPaperPlane} onClick={handleSend} />
        </div>
    )
}

export default SearchBox
