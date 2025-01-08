import React from 'react'
import "./TextInput.css"
interface TextInput {
    name: string,
    id: string,
    title: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: Function | undefined
}

export default function TextInput({ name, id, title, placeholder, value, onChange, onSubmit }: TextInput) {
    const inputType = name === 'password' ? "password" : "text"
    const onKeyDownEvent = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && onSubmit) {
            onSubmit()
        }
    }
    return (
        <div>
            <input type={inputType} className='TextInput'
                name={name}
                id={id}
                title={title}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={(e) => onKeyDownEvent(e)} />
        </div>
    )
}
