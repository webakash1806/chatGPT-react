import React, { useEffect, useRef, useState } from 'react'
import SearchCont from './SearchCont'
import axios from 'axios'
import Main from './Main'
import Response from '../Response/Response'
import Loader from 'react-dots-loader'
import 'react-dots-loader/index.css'

const SearchBox = () => {
    const [que, setQue] = useState()
    const [answer, setAnswer] = useState([])
    const msgEnd = useRef(null)

    // console.log(answer)

    const handleSend = async () => {

        <Loader />
        setAnswer([...answer, { text: que, isAI: true }, { text: <Loader color='white' size='5.5px' distance='7px' />, isAI: false }])
        setQue('')
        axios.post('https://space-ai-cilq.onrender.com/ask', { question: que })
            .then(response => {

                const res = response.data
                setAnswer([...answer, { text: que, isAI: true }, { text: res, isAI: false }])
                setQue('')
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
                {/* <Loader color='white' size='6px' distance='8px' /> */}
                {answer.length === 0 ? <Main middHead={"How can i help you today"} /> : <>{
                    answer.map((response, i) => {
                        return <Response key={i + 1} text={response.text} isAI={response.isAI} />
                    })
                }</>}
                <div ref={msgEnd} />
            </div>

            <SearchCont onKeyDown={handleEnter} value={que} onChange={(e) => setQue(e.target.value)} onClick={handleSend} />

        </div>
    )
}

export default SearchBox
