import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import { useState, useContext } from 'react'
import { DiaryStateContext } from "../App"

const getMonthlyData = (pivotDate, data) => {
    return data.filter((item) => item.createdDate.getMonth() === pivotDate.getMonth())
}

export default function Home() {
    const data = useContext(DiaryStateContext)

    const [pivotDate, setPivotDate] = useState(new Date());
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }
    const monthlyData = getMonthlyData(pivotDate, data)
    return (
        <div>
            <Header title={`${pivotDate.getFullYear()} . ${pivotDate.getMonth() + 1}`}
                leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
                rightChild={<Button onClick={onIncreaseMonth} text={">"} />} />
            <DiaryList data={monthlyData} />
        </div>
    )
}
