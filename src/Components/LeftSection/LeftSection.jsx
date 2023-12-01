import React, { useState } from 'react'
import Header from './Header'
import History from './History'
import NewBtn from './NewBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


const LeftSection = () => {
    const [active, setActive] = useState(false)

    return (
        <>
            <FontAwesomeIcon
                onClick={() => setActive(true)}
                className='text-white absolute cursor-pointer left-[40px] md:hidden top-[10px] border border-slate-500 shadow-sm shadow-[#808080] w-4 h-4 p-2 rounded-md'
                icon={faBars} />
            <div className={`${active ? 'left-0 relative' : 'left-[-35rem] absolute'} md:static z-20 duration-300 top-0 border border-black bg-[#000000] w-[21rem] p-4 h-[100vh] flex flex-col justify-between items-center gap-4`}>
                <FontAwesomeIcon
                    onClick={() => setActive(false)}
                    className='text-white absolute md:hidden cursor-pointer right-[-40px] top-[17px] border w-5 h-5 p-2 rounded-md'
                    icon={faXmark} />
                <NewBtn />
                <History />
                <Header />
            </div>
        </>
    )
}

export default LeftSection
