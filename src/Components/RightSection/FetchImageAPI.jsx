import React from 'react'
import { useState, useEffect, useRef } from 'react'
import SearchCont from './SearchCont'
import axios from 'axios'
import Main from './Main'
import ImageResponse from '../Response/ImageResponse'
import Loader from 'react-dots-loader'
import 'react-dots-loader/index.css'

const FetchImageAPI = () => {
    const [que, setQue] = useState()
    const [answer, setAnswer] = useState([])
    const msgEnd = useRef(null)

    // console.log(answer)

    const handleSend = async () => {

        setAnswer([...answer, { text: que, url: "Loading", isAI: true }, { text: <Loader color='white' size='5.5px' distance='7px' />, url: "Loading", isAI: false }])
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
            <div className='max-h-[77.5vh] pt-[1rem] overflow-y-scroll scrollbar-thumb-[#000000] scrollbar-track-grey-800 scrollbar-thin scrollbar'>
                {/* <Loader color='white' size='6px' distance='8px' /> */}
                {answer.length === 0 ? <Main middHead={"Are you here to generate Image"} /> : <>{
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
