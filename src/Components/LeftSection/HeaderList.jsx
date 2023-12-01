import React from 'react'

const HeaderList = ({ name, icon, link }) => {
    return (
        <>
            <a href={link} className='w-full flex items-center justify-between bg-[#353434] p-[8px_5.2rem] rounded-md hover:bg-[#6366F1] duration-300 font-semibold'><span>{icon}</span>{name}</a>
        </>
    )
}

export default HeaderList
