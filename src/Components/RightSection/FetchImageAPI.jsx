import React from 'react'
import { useState, useEffect, useRef } from 'react'
import SearchCont from './SearchCont'
import axios from 'axios'
import Main from './Main'
import ImageResponse from '../Response/ImageResponse'


const FetchImageAPI = () => {
    const [que, setQue] = useState()
    const [answer, setAnswer] = useState([])
    const msgEnd = useRef(null)

    // console.log(answer)

    const handleSend = async () => {

        setAnswer([...answer, { text: que, url: "Loading", isAI: true }, { text: "loading", url: "Loading", isAI: false }])
        setQue('')
        axios.post('http://localhost:3000/image', { imageQuery: que })
            .then(response => {
                const res = response.data
                // console.log(res.url)
                const revised_prompt = res.desc
                const imageURL = res.url
                console.log(imageURL)
                setAnswer([...answer, { text: que, isAI: true }, { text: revised_prompt, url: imageURL, isAI: false }])
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
            <div className='max-h-[85vh] overflow-y-scroll scrollbar-thumb-[#000000] scrollbar-track-grey-800 scrollbar-thin scrollbar'>
                {/* <Loader color='white' size='6px' distance='8px' /> */}
                {answer.length === 0 ? <Main middHead={"How can i help you today"} /> : <>{
                    answer.map((response, i) => {
                        return <ImageResponse key={i + 1} url={response.url} text={response.text} isAI={response.isAI} />
                    })
                }</>}
                <div ref={msgEnd} />
            </div>
            <SearchCont onKeyDown={handleEnter} value={que} onChange={(e) => setQue(e.target.value)} onClick={handleSend} />

        </div >
    )
}

export default FetchImageAPI
