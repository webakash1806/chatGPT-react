import React from 'react'
import SearchBox from './SearchBox'
import Footer from '../Footer'
import Head from '../Head'

const RightSection = () => {
    return (
        <div className='flex flex-col items-center p-[16px_0] justify-between gap-2 h-[100vh] w-full text-white'>
            <Head />

            <div>
                <SearchBox />
                <Footer />
            </div>
        </div>
    )
}


export default RightSection
