import React from 'react'
import Button from './Button'
import "./DiaryList.css"
import DiaryItem from './DiaryItem'
export default function DiaryList({ data }) {
    return (
        <div className='DiaryList'>
            <div className='menu_bar'>
                <select>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된순</option>
                </select>
                <Button text={"Add new Diary"} type={"positive"} />
            </div>
            <div className='list_wrapper'>
                <DiaryItem />
            </div>
        </div>
    )
}
