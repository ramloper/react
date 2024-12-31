import { useState } from "react";
import useInput from "../hooks/useInput";


const HookExam = () => {
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();
    return (
        <>
            <input value={input} onChange={onChange} />
            <input value={input2} onChange={onChange2} />
            <div>hookexam</div>
        </>

    )
}

export default HookExam;