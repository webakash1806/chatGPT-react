import React from 'react'
import Header from './Header'
import History from './History'
import NewBtn from './NewBtn'

const LeftSection = () => {
    return (
        <div className='border border-black bg-[#171917] w-[18rem] p-4 h-[100vh] flex flex-col justify-between items-center gap-4'>
            <NewBtn />
            <History />
            <Header />
        </div>
    )
}

export default LeftSection
