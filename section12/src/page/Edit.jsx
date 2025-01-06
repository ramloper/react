import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import { useContext, useEffect } from 'react';
import useDiary from '../hooks/useDiary';

export default function Edit() {
    const params = useParams();
    const nav = useNavigate();

    const { onDelete, onUpdate } = useContext(DiaryDispatchContext)

    const currentItem = useDiary(params.id)

    const onClickDelete = () => {
        const confirmFlag = confirm("Delete the diary?")
        if (confirmFlag) {
            onDelete(params.id)
            nav('/', { replace: true })
        } else {
            return;
        }
    }

    const onSubmit = (input) => {
        const updateFlag = confirm("Update the diary?")
        if (!updateFlag) {
            return;
        }
        onUpdate(params.id, input.createdDate, input.emotionId, input.content)
        nav('/', { replace: true })
    }

    return (
        <div>
            <Header title={`Fix Diary`}
                leftChild={
                    <Button text={"< To Previous"} onClick={() => nav(-1)} />
                }
                rightChild={
                    <Button text={"delete"} type={"negative"} onClick={onClickDelete} />
                }
            />
            <Editor initData={currentItem} onSubmit={onSubmit} />
        </div>
    )
}
