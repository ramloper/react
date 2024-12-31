import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === "INCREASE") {
        return state + action.data
    } else if (action.type === "DECREASE") {
        return state - action.data
    }
    console.log(state, action);
}

const Exam = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        dispatch({
            type: "INCREASE",
            data: 1
        })
    }

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1
        })
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    )
}

export default Exam;