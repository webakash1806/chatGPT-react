import React from 'react'
import FetchChatAPI from './FetchChatAPI'
import Footer from '../Footer'
import Head from '../Head'

const RightSection = () => {
    return (
        <div className='flex flex-col items-center pb-1 justify-between gap-2 h-[100vh] w-full text-white'>
            <Head headMain={"Chat"} />
            <div className='flex flex-col h-full items-center justify-end'>
                <FetchChatAPI />
                <Footer />
            </div>
        </div>
    )
}


export default RightSection
