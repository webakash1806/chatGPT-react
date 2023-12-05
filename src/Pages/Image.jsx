import React from 'react'
import LeftSection from '../Components/LeftSection/LeftSection'
import ImageRightSection from '../Components/RightSection/ImageRightSection'

const Image = () => {
    return (
        <div className='bg-[#272831] flex items-center h-[100vh] w-[100vw] overflow-hidden'>
            <LeftSection />
            <ImageRightSection />
        </div>
    )
}

export default Image
