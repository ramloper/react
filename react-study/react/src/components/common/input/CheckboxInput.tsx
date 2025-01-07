import React from 'react'
import "./CheckboxInput.css"
interface CheckboxInput {
    name: string,
    id: string,
    title: string,
    value: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}


export default function CheckboxInput({ name, id, title, value, onChange }: CheckboxInput) {
    return (
        <div className='checkArea'>
            <span className='checkCon'>
                <input type='checkbox'
                    name={name}
                    id={id}
                    checked={value}
                    // onClick={onClick} />
                    onChange={onChange} />
                <label htmlFor={id} className='txt'>{title}</label>
            </span>
        </div>
    )
}
