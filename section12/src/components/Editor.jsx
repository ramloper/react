import React, { useState, useEffect } from 'react'
import "./Editor.css"
import EmotionItem from './EmotionItem'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';
import { getStringedDate } from '../util/getStringedDate';
export default function Editor({ initData, onSubmit }) {
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: ""
    });
    const onChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (name === 'createdDate') {
            value = new Date(value)
        }
        setInput({
            ...input,
            [name]: value
        })

    }

    const onClickSubmitButton = () => {
        onSubmit(input)
    }

    const nav = useNavigate();
    useEffect(() => {
        if (initData) {
            setInput({
                ...initData,
                createdDate: new Date(Number(initData.createdDate))
            })
        }
    }, [initData])
    return (
        <div className='Editor'>
            <section className='dateSection'>
                <h4>Today's date</h4>
                <input type='date'
                    name='createdDate'
                    onChange={onChangeInput}
                    value={getStringedDate(input.createdDate)} />
            </section>
            <section className='emotionSection'>
                <h4>Today's emotion</h4>
                <div className='emotionListWrapper'>
                    {emotionList.map((item) =>
                    (<EmotionItem
                        onClick={() => onChangeInput({
                            target: {
                                name: "emotionId",
                                value: item.emotionId
                            }
                        })}
                        key={item.emotionId} {...item} isSelected={item.emotionId === input.emotionId} />)
                    )}
                </div>
            </section>
            <section className='contentSection'>
                <h4>Todya's diary</h4>
                <textarea
                    name='content'
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder='How was your days?'></textarea>
            </section>
            <section className='buttonSection'>
                <Button text={"cancel"}
                    onClick={() => nav(-1)} />
                <Button text={"End"} type={"positive"}
                    onClick={onClickSubmitButton} />
            </section>
        </div>
    )
}
