import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { sendMsg } from '../../Hooks/response'
import Main from './Main'
import Response from '../Response/Response'

const SearchBox = () => {
    const [que, setQue] = useState()
    const [answer, setAnswer] = useState([])
    const handleSend = async () => {
        const res = await sendMsg(que)
        setAnswer([...answer, { text: que, isAI: true }, { text: res, isAI: false }])
        console.log(res)
        console.log(answer)
    }

    return (
        <div>
            {answer === '' ? <Main /> : <div>{
                answer.map((response, i) => {
                    return <Response key={i + 1} text={response.text} isAI={response.isAI} />
                })
            }</div>}
            <textarea onChange={(e) => setQue(e.target.value)}
                className='text-black'
                name="" id="" cols="50" rows="5"></textarea>
            <FontAwesomeIcon icon={faPaperPlane} onClick={handleSend} />
        </div>
    )
}

export default SearchBox
