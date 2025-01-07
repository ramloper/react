import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Left.css"
import { authInfo } from '../../../types/loginInfoType'
import { getMenuList } from './leftUtil'
import { menuInfo } from "./menuInfoType";
import LiContent from './LiContent'

export default function Left() {
    const [data, setData] = useState<Array<menuInfo>>([]);
    //ADMN 슈펴관리자
    const mainAuth = localStorage.getItem("mainAuth")!
    const nav = useNavigate();
    if (!mainAuth) nav('/login')
    const menuAuthData: authInfo = JSON.parse(mainAuth)

    useEffect(() => {
        (async () => {
            const menuList = await getMenuList(menuAuthData)
            setData(menuList);
        })();
    }, [])

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
                        {data.length === 0
                            ? <div>없음</div>
                            :
                            data.map((menu) => <LiContent key={menu.menu_numb}
                                {...menu} />)
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
