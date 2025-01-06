import { useNavigate, useParams } from "react-router-dom";
import React from 'react'
import Header from "../components/Header"
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/getStringedDate";
export default function Diary() {
    const params = useParams();
    const nav = useNavigate();
    const currentItem = useDiary(params.id)
    if (!currentItem) {
        return <div>loading...</div>;
    }
    const { createdDate, emotionId, content } = currentItem
    const title = getStringedDate(createdDate)
    return (
        <div>
            <Header title={title}
                leftChild={<Button onClick={() => nav(-1)} text={"< To Previous"} />}
                rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={"edit"} />}
            />
            <Viewer emotionId={emotionId} content={content} />
        </div>
    )
}