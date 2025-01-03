import "./TodoItem.css"
import { memo, useContext } from "react"
import { TodoDispatchContext } from "../App";
const TodoItem = ({ id, isDone, content, date }) => {
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);
    const onChangeCheckBox = () => {
        onUpdate(id)
    }

    const onClickDeleteButton = () => {
        onDelete(id)
    }
    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" readOnly />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}

export default memo(TodoItem);