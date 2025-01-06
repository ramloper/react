import React from 'react'
import "./Viewer.css"
import { getEmotionImage } from "../util/get-emotion-image"
import { emotionList } from '../util/constants'


export default function Viewer({ emotionId, content }) {

    const emotionItem = emotionList.find((item) =>
        String(item.emotionId) === String(emotionId)
    )

    return (
        <div className='Viewer'>
            <section className='imgSection'>
                <h4>Today's emotion</h4>
                <div className={`emotionImgWrapper emotionImgWrapper${emotionId}`}>
                    <img src={getEmotionImage(emotionId)} />
                    <div>{emotionItem.emotionName}</div>
                </div>
            </section>
            <section className='contentSection'>
                <h4>Today's diray</h4>
                <div className='contentWrapper'>
                    <p>{content}</p>
                </div>
            </section>
        </div>
    )
}
