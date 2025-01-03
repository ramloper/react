import { useParams } from "react-router-dom";
import React from 'react'

export default function Diary() {
    const params = useParams();
    return (
        <div>
            <div>Diary</div>
            <div>id : {params.id}</div>
        </div>
    )
}