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
                className='text-white absolute cursor-pointer left-[13px] lg:hidden top-[14px] border border-slate-500 shadow-sm shadow-[#808080] w-4 h-4 p-2 rounded-md'
                icon={faBars} />
            <div className={`${active ? 'left-0' : 'left-[-150rem]'} z-10 absolute top-0  w-[100vw] h-[100vh] bg-[#050517b9] blur-[2rem]`}></div>

            <div className={`${active ? 'left-0 relative' : 'left-[-35rem] absolute'} lg:static z-20 duration-300 top-0 border border-black bg-[#000000] w-[17.65rem] p-3 pb-6 h-[100vh] flex flex-col justify-between items-center gap-4`}>
                <FontAwesomeIcon
                    onClick={() => setActive(false)}
                    className='text-white absolute lg:hidden cursor-pointer right-[-37px] top-[16px] border w-4 h-4 p-2 rounded-md'
                    icon={faXmark} />
                <NewBtn />
                <History />
                <Header />
            </div>
        </>
    )
}

export default LeftSection
