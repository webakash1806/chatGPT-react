import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Main from './Main'
import Response from '../Response/Response'

const SearchBox = () => {
    const [que, setQue] = useState()
    const [answer, setAnswer] = useState([])
    const msgEnd = useRef(null)

    // console.log(answer)

    const handleSend = async () => {




        axios.post('https://space-ai-cilq.onrender.com/ask', { question: que })
            .then(response => {
                setAnswer([...answer, { text: que, isAI: true }, { text: '...', isAI: false }])
                setQue('')
                const res = response.data
                setAnswer([...answer, { text: que, isAI: true }, { text: res, isAI: false }])
                setQue('')
                console.log('Response from backend:', response.data);
            })
            .catch(error => {
                console.error('Error sending data to backend:', error);
            });
    }

    const handleEnter = async (e) => {
        if (e.key == 'Enter') await handleSend()
    }

    useEffect(() => {
        msgEnd.current.scrollIntoView()
    }, [answer])

    return (
        <div className='relative'>
            <div className=' max-h-[70vh] overflow-y-scroll scrollbar-thumb-[#000000] scrollbar-track-grey-800 scrollbar-thin scrollbar'>
                {answer.length === 0 ? <Main /> : <>{
                    answer.map((response, i) => {
                        return <Response key={i + 1} text={response.text} isAI={response.isAI} />
                    })
                }</>}
                <div ref={msgEnd} />
            </div>
            <textarea onKeyDown={handleEnter} value={que} onChange={(e) => setQue(e.target.value)}
                className='text-white bg-[#222229] mt-6 w-[95vw] sm:w-[90vw] md:min-w-[48rem] md:max-w-[48rem] lg:min-w-[46rem] lg:max-w-[46rem] rounded-lg resize-none border border-slate-600  shadow-sm shadow-[#6365f1e4] outline-none p-[5px_10px]'
                name="" id="" rows="2"
                placeholder='Search Something...'></textarea>
            <FontAwesomeIcon className='absolute text-white bg-[#6366F1] right-3 bottom-4 text-[17px] border border-[#6366F1] shadow-sm shadow-[#ffffff] p-2 rounded-md cursor-pointer' icon={faPaperPlane} onClick={handleSend} />
        </div>
    )
}

export default SearchBox
