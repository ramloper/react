import React from 'react'
import "./TextInput.css"
interface TextInput {
    name: string,
    id: string,
    title: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({ name, id, title, placeholder, value, onChange }: TextInput) {
    const inputType = name === 'password' ? "password" : "text"
    return (
        <div>
            <input type={inputType} className='TextInput'
                name={name}
                id={id}
                title={title}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </div>
    )
}
