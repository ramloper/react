import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Left.css"
import LiContent from './LiContent'
import { menuInfo } from './menuInfoType'
import { menuListStore, menuStore } from '../../../store/store'

export default function Left({ menuList }: { menuList: Array<menuInfo> }) {
    return (
        <header className='header'>
            <nav className='gnbWrap'>
                <h1 className='mb80'>
                    <Link to={`/`}>
                        <img src='logo_login.svg' />
                    </Link>
                </h1>
                <div className='leftArray'>
                    <ul className='gnbMenu'>
                        {menuList.length === 0
                            ? <div>없음</div>
                            :
                            menuList.map((menu) => <LiContent key={menu.menu_numb}
                                menuInfo={menu} />)
                        }
                    </ul>
                    <ul className='gnbMenu'>
                        <li>
                            <Link to={`/`} >
                                <img src='logout_icon.svg' />
                                <p className='menu'>로그아웃</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}
