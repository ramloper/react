import React, { useState } from 'react'
import { menuInfo } from '../left/menuInfoType';
import { Link } from 'react-router-dom';

export default function HeaderMenu({ menuInfo }: { menuInfo: menuInfo }) {
    // console.log(menuInfo);

    const [isHover, setIsHover] = useState(false);
    const handleMouseOver = () => {
        setIsHover(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };
    return (
        <li onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <Link to={`/`}>
                <span className='depth1'>{menuInfo.disp_name}</span>
            </Link>
        </li>
    )
}
