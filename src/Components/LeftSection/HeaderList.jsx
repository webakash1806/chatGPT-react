import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderList = ({ name, icon, link }) => {
    return (
        <>
            <NavLink to={link} className='w-full flex items-center justify-between bg-[#353434] p-[8px_5.2rem] rounded-md hover:bg-[#6366F1] duration-300 font-semibold'><span>{icon}</span>{name}</NavLink>
        </>
    )
}

export default HeaderList
