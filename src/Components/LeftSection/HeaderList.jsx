import React from 'react'

const HeaderList = ({ name, icon, link }) => {
    return (
        <>
            <a href={link} className='w-[15rem] flex items-center justify-between bg-[#353434] p-[5px_4.5rem] rounded-md hover:bg-[#6366F1] duration-300'><span>{icon}</span>{name}</a>
        </>
    )
}

export default HeaderList
