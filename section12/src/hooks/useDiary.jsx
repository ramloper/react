import { useContext, useState, useEffect } from "react"
import { DiaryStateContext, DiaryDispatchContext } from "../App"
import { useNavigate } from "react-router-dom"

const useDiary = (id) => {
    const data = useContext(DiaryStateContext)
    const [currentItem, setCurrentItem] = useState();

    useEffect(() => {
        const currentItem = data.find((item) => String(item.id) === String(id))
        if (!currentItem) {
            alert("this diary is unDefined")
            nav("/", { replace: true })
        }
        setCurrentItem(currentItem);
    }, [id])

    return currentItem;
}

export default useDiary;