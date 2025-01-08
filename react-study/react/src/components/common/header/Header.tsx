import React from 'react'
import "./Header.css"
import { menuInfo } from '../left/menuInfoType'
import HeaderMenu from './HeaderMenu'

export default function Header({ menuNumber, menuList }: { menuNumber: string, menuList: Array<menuInfo> }) {
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
