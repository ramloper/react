import React from 'react'
import { getEmotionImage } from "../util/get-emotion-image.js"
import Button from './Button'
import "./DiaryItem.css"
import { useNavigate } from "react-router-dom"


export default function DiaryItem({ id, emotionId, createdDate, content }) {
    const nav = useNavigate();
    return (
        <div className='DiaryItem'>
            <div
                className={`imgSection imgSection_${emotionId}`}
                onClick={() => nav(`/diary/${id}`)}>
                <img src={getEmotionImage(emotionId)} />
            </div>
            <div className='infoSection'
                onClick={() => nav(`/diary/${id}`)}>
                <div className='createdDate'>
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className='content'>
                    {content}
                </div>
            </div>
            <div className='buttonSection'>
                <Button text={"edit"}
                    onClick={() => nav(`/edit/${id}`)} />
            </div>
        </div>
    )
}
