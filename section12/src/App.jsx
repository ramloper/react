import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from "./page/Home"
import Diary from "./page/Diary"
import New from "./page/New"
import Edit from "./page/Edit"
import NotFound from './page/NotFound'
import { useReducer, useRef, useContext } from 'react'
import { createContext } from 'react'

const mockData = [
  {
    id: 1,
    createdDate: new Date("2025-01-03"),
    emotionId: 1,
    content: "Number 1 diary"
  }, {
    id: 2,
    createdDate: new Date("2025-01-02"),
    emotionId: 2,
    content: "Number 2 diary"
  }, {
    id: 3,
    createdDate: new Date("2024-12-29"),
    emotionId: 3,
    content: "Number 3 diary"
  }
]

function reducer(state, action) {
  switch (action.type) {
    case 'create': return [action.data, ...state]
    case 'update': state.map((item) => String(item.id) === String(action.data.id) ? action.data : item)
    case 'delete': return state.filter((item) => String(item.id) !== String(action.id))
    default: return state
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)
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
