import React from 'react'
import "./Button.css"
import { KeyboardEvent } from 'react';

interface MyButtonProps {
    text: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Button({ text, onClick }: MyButtonProps) {
    return (
        <>
            <button className='btn' onClick={onClick} >{text}</button>
        </>
    )
}
