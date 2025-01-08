import React, { useState } from 'react'
import { menuInfo } from './menuInfoType'
import { Link } from 'react-router-dom'

export default function LiContent({ menuInfo }: { menuInfo: menuInfo }) {
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
            {
                !isHover ? <img src={menuInfo.img_file_list[0].file_list[0].file_path} />
                    : <img src={menuInfo.img_file_list[0].file_list[1].file_path} />
            }
            <Link to={`${menuInfo.menu_prgm_name}`}
                className='menu'
                state={{ menuNumber: menuInfo.menu_numb }}
            >
                <p>{menuInfo.menu_name}</p>
            </Link>
        </li>
    )
}
