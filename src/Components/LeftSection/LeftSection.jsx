import React, { useState } from 'react'
import Header from './Header'
import History from './History'
import NewBtn from './NewBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faXmark } from '@fortawesome/free-solid-svg-icons'


const LeftSection = () => {
    const [active, setActive] = useState(true)
    return (
        <>
            {/* <FontAwesomeIcon
                onClick={() => setActive(true)}
                className='text-white absolute right-[-40px] top-[17px] border w-5 h-5 p-2 rounded-md'
                icon={faHamburger} /> */}
            <div className='relative border  border-black bg-[#000000] w-[21rem] p-4 h-[100vh] flex flex-col justify-between items-center gap-4'>
                <FontAwesomeIcon
                    onClick={() => setActive(false)}
                    className='text-white absolute right-[-40px] top-[17px] border w-5 h-5 p-2 rounded-md'
                    icon={faXmark} />
                <NewBtn />
                <History />
                <Header />
            </div>
        </>
    )
}

export default LeftSection
