import React, { useEffect } from 'react'
import { isMobile } from "react-device-detect";
import "./Form.css"
import { useState } from 'react'

import Button from '../common/button/Button'
import TextInput from '../common/input/TextInput'
import CheckboxInput from '../common/input/CheckboxInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { setSettion } from '../../util/loginAction';

interface LoginData {
    id: string,
    password: string,
    rememberMe: boolean
}


export default function Form() {
    const nav = useNavigate();
    let rememberMePS: boolean = false
    let idPS: string = ""
    if (localStorage.getItem("rememberMe")) {
        rememberMePS = true
        idPS = localStorage.getItem("rememberMe")!
    }
    const [loginData, setLoginData] = useState<LoginData>({ id: idPS, password: "", rememberMe: rememberMePS });
    const onChangeLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value
        if (name === 'rememberMe') {
            setLoginData({
                ...loginData,
                rememberMe: loginData.rememberMe ? false : true
            })
            return;
        }
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const [ip, setIp] = useState();
    useEffect(() => {
        axios.get('https://geolocation-db.com/json/')
            .then((res) => setIp(res.data.IPv4))
    }, [])
    const loginActionObject = {
        cntr_numb: "KBS0000000",
        login_id: loginData.id,
        login_pswd: loginData.password,
        ip: ip,
        login_type: "MNGR",
        login_path: "http://localhost:5143/login",
        tmnl_type: isMobile ? "MOBI" : "PC"
    }


    const loginAction = () => {
        if (loginData.id === "") {
            alert("id는 필수값입니다.")
            return;
        }
        if (loginData.password === "") {
            alert("비밀번호는 필수값입니다.")
            return;
        }
        axios({
            method: 'post',
            url: '/auth/api/v1/token/login',
            data: loginActionObject
        })
            .then((res) => {
                console.log(res);
                if (loginData.rememberMe) {
                    localStorage.setItem("rememberMe", loginData.id)
                }
                const accessToken = res.data.tokeninfo.access_token
                axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
                setSettion(res.data)
                nav("/")
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.mainerror.msg)
            })
    }
    return (
        <div className='wrap login'>
            <div className='loginWrap'>
                <h1 className='txtC'>
                    <img src='/logo_login.svg' />
                </h1>
                <h2 className='tit'>관리자 로그인</h2>
                <div>
                    <div className='formArea'>
                        <TextInput
                            name={`id`}
                            id={`id`}
                            placeholder={`아이디를 입력해주세요.`}
                            title='아이디 입력'
                            value={loginData.id}
                            onChange={onChangeLoginData} />
                    </div>
                </div>
                <div>
                    <div className='formArea'>
                        <TextInput
                            name={`password`}
                            id={`password`}
                            placeholder={`비밀번호를 입력해주세요.`}
                            title='아이디 입력'
                            value={loginData.password}
                            onChange={onChangeLoginData} />
                    </div>
                </div>
                <CheckboxInput
                    name='rememberMe'
                    id='rememberMe'
                    value={loginData.rememberMe}
                    onChange={onChangeLoginData}
                    title={`아이디저장`} />
                <Button text='로그인' onClick={loginAction} />
                <p className="txtInfo">관리자 전용아이디 생성 및 비밀번호를 잊어버린 경우 최고관리자에게 문의주세요.</p>
            </div>
        </div>
    )
}
