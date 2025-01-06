import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from "./page/Home"
import Diary from "./page/Diary"
import New from "./page/New"
import Edit from "./page/Edit"
import NotFound from './page/NotFound'
import { useReducer, useRef, useContext, useEffect } from 'react'
import { createContext } from 'react'


function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case 'create': {
      nextState = [action.data, ...state]
      break
    }
    case 'update': {
      nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item)
      break
    }
    case 'delete': {
      nextState = state.filter((item) => String(item.id) !== String(action.id))
      break
    }
    case 'init': {
      return action.data;
    }
    default: return nextState
  }
  localStorage.setItem("diary", JSON.stringify(nextState))
  return nextState
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef()
  useEffect(() => {
    let maxId = 0;
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      idRef.current = maxId + 1
      return;
    }
    const parsedData = JSON.parse(storedData)

    if (!Array.isArray(parsedData)) return;

    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id)
      }
    })
    idRef.current = maxId + 1
    console.log(idRef.current);

    dispatch({
      type: "init",
      data: parsedData
    })
  }, [])
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "create",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'update',
      data: { id, createdDate, emotionId, content }
    })
  }

  const onDelete = (id) => {
    dispatch({
      type: 'delete',
      id
    })
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate, onUpdate, onDelete
        }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
