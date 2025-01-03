import React from 'react'
import { getEmotionImage } from "../util/get-emotion-image.js"
import Button from './Button'
import "./DiaryItem.css"
import { useContext } from 'react'

export default function DiaryItem() {
    const emotionId = 5;

    return (
        <div className='DiaryItem'>
            <div className={`imgSection imgSection_${emotionId}`}>
                <img src={getEmotionImage(5)} />
            </div>
            <div className='infoSection'>
                <div className='createdDate'>
                    {new Date().toLocaleDateString()}
                </div>
                <div className='content'>
                    diary content
                </div>
            </div>
            <div className='buttonSection'>
                <Button text={"edit"} />
            </div>
        </div>
    )
}
