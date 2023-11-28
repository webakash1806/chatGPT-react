import React from 'react'
import Main from './Main'
import SearchBox from './SearchBox'
import Footer from '../Footer'
import Head from '../Head'

const RightSection = () => {
    return (
        <div className='flex flex-col text-white'>
            <Head />
            <Main />
            <SearchBox />
            <Footer />
        </div>
    )
}


export default RightSection
