import React, { useContext } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Editor from '../components/Editor'
import { useNavigate } from 'react-router-dom'
import { DiaryDispatchContext } from '../App'
import usePageTitle from '../hooks/usePageTitle'


export default function New() {
    const { onCreate } = useContext(DiaryDispatchContext)
    const nav = useNavigate();
    const onSubmit = (input) => {
        onCreate(input.createdDate, input.emotionId, input.content)
        nav('/', { replace: true })
    }
    usePageTitle('new')
    return (
        <div>
            <Header title={`Add new Diary`}
                leftChild={<Button text={"< To Previous"}
                    onClick={() => nav(-1)} />} />
            <Editor onSubmit={onSubmit} />
        </div>
    )
}