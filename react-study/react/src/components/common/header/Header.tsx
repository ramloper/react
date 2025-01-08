import React from 'react'
import "./Header.css"
import { Link, useLocation, useParams } from 'react-router-dom'
import { menuInfo } from '../left/menuInfoType'
import HeaderMenu from './HeaderMenu'
import { menuListStore } from '../../../store/store'

export default function Header({ menuList }: { menuList: Array<menuInfo> }) {
    const menuNumber = useLocation().state.menuNumber;
    const equalsMenu = menuList.find((menu) => menuNumber === menu.menu_numb)
    if (!equalsMenu)
        return;
    const childMenuList = equalsMenu.chlid_menu_list

    return (
        <aside className='headerMenu'>
            <nav className='headerMenuArea'>
                <ul className='headerMenuMenu'>
                    {childMenuList.length === 0 ? <div>없음</div>
                        : childMenuList.map((menu) => <HeaderMenu key={menu.menu_numb}
                            menuInfo={menu} />)
                    }
                </ul>
            </nav>
        </aside>
    )
}
