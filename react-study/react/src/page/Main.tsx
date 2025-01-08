import React, { useEffect, useState } from 'react'

import "./Main.css"
import { menuInfo } from '../components/common/left/menuInfoType';
import { authInfo } from '../types/loginInfoType';
import { Outlet, useNavigate } from 'react-router-dom';

import Left from '../components/common/left/Left'
import Header from '../components/common/header/Header';
import { getMenuList } from '../util/menu';
import { useLoginRedirect } from '../hooks/useRedirect';



export default function Main() {
    const [menuList, setMenuList] = useState<Array<menuInfo>>([]);

    const mainAuth = localStorage.getItem("mainAuth")!
    const menuAuthData: authInfo = JSON.parse(mainAuth);

    useLoginRedirect(menuAuthData);
    useEffect(() => {
        (async () => {
            await getMenuList(menuAuthData, setMenuList);
        })();
    }, [])
    const [menuNumber, setMenuNumber] = useState("/");
    const onChangeMenuNumber = (menuNumber: string) => {
        setMenuNumber(menuNumber)
    }
    return (
        <div className='wrap'>
            <div>
                <Left menuList={menuList} onChangeMenuNumber={onChangeMenuNumber} />
                <Header menuNumber={menuNumber} menuList={menuList} />
            </div>
            <main className='mainWrap'>
                <Outlet />
            </main>
        </div>
    )
}