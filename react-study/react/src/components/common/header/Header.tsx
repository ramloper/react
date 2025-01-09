import React from 'react'
import "./Header.css"
import { menuInfo } from '../left/menuInfoType'
import HeaderMenu from './HeaderMenu'
import { useLocation } from 'react-router-dom'

export default function Header({ childMenuList }: { childMenuList: Array<menuInfo> }) {

    if (childMenuList.length === 0) {
        return DashBoardHeader()
    }


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



function DashBoardHeader() {
    return (
        <aside className='headerMenu'>
            <div className='clockWrap'>
                <div>현재시간</div>
                <div></div>
                <div></div>
                <div>입니다</div>
            </div>
        </aside>
    )
}