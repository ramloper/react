import React, { useState } from 'react'
import Button from './Button'
import "./DiaryList.css"
import DiaryItem from './DiaryItem'
import { useNavigate } from "react-router-dom"
export default function DiaryList({ data }) {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const onChangeSortType = (e) => {
        setSortType(e.target.value)
    }
    const getSortedData = () => {
        return data.toSorted((a, b) => {
            if (sortType === 'oldest') {
                return a.createdDate - b.createdDate
            } else {
                return b.createdDate - a.createdDate
            }
        })
    }
    return (
        <div className='DiaryList'>
            <div className='menu_bar'>
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된순</option>
                </select>
                <Button text={"Add new Diary"} type={"positive"}
                    onClick={() => nav(`/new`)} />
            </div>
            <div className='list_wrapper'>
                {getSortedData().map((item) => <DiaryItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}
