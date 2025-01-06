import React from 'react'
import "./EmotionItem.css"
import { getEmotionImage } from '../util/get-emotion-image'

export default function EmotionItem({ emotionId, emotionName, isSelected, onClick }) {

    return (
        <div className={`EmotionItem ${isSelected ? `EmotionItemOn${emotionId}` : ""}`}
            onClick={onClick}>
            <img className='emotionImg' src={getEmotionImage(emotionId)} />
            <div className='emotionName'>{emotionName}</div>
        </div>
    )
}
