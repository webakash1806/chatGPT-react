import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
    return (
        <div>
            <textarea
                className='text-black'
                name="" id="" cols="50" rows="5"></textarea>
            <FontAwesomeIcon icon={faPaperPlane} />
        </div>
    )
}

export default SearchBox
