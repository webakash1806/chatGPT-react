import React from 'react'
// import Chat from './FetchChatAPI'
import FetchImageAPI from './FetchImageAPI'
import Footer from '../Footer'
import Head from '../Head'

const ImageRightSection = () => {
    return (
        <div className='flex flex-col items-center p-[16px_0] justify-between gap-2 h-[100vh] w-full text-white'>
            <Head headMain={"Image"} />
            <div className='flex flex-col h-[100vh] items-center justify-end'>
                <FetchImageAPI />
                <Footer />
            </div>
        </div>
    )
}


export default ImageRightSection
