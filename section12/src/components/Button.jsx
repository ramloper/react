import React from 'react'
import "./button.css"

export default function Button({ text, type, onClick }) {
    return (
        <button className={`Button Button_${type}`}
            onClick={onClick}>
            {text}
        </button>
    )
}
