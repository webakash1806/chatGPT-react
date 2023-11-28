import React from 'react'
import HeaderList from './HeaderList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGear } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const headerList = [{ id: 1, name: "Home", icon: <FontAwesomeIcon icon={faHouse} />, link: "" },
    { id: 2, name: "Home", icon: "", link: "" },
    { id: 3, name: "Settings", icon: <FontAwesomeIcon icon={faGear} />, link: "" }]
    return (
        <div className='text-white flex flex-col items-center gap-[10px] w-full'>
            {headerList.map((res) =>
                <HeaderList key={res.id} name={res.name} icon={res.icon} link={res.link} />
            )}
        </div>
    )
}

export default Header