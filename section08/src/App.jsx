import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React",
    date: new Date().getTime(),
  }, {
    id: 1,
    isDone: false,
    content: "Spring",
    date: new Date().getTime(),
  }, {
    id: 2,
    isDone: false,
    content: "Next",
    date: new Date().getTime(),
  }
]

function reducer(state, action) {
  switch (action.type) {
    case 'create': return [action.data, ...state]
    case 'update':
      return state.map(
        (item) => item.id === action.targetId ?
          { ...item, isDone: !item.isDone } : item
      )
    case 'delete':
      return state.filter((item) => item.id !== action.targetId)
    default:
      return state;
  }
}
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();


function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)


  const onCreate = useCallback((content) => {
    dispatch({
      type: "create",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }, [])
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "update",
      targetId: targetId
    })
  }, [])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "delete",
      targetId: targetId
    })
  }, [])
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete }
  }, [])
  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div >
  )
}

export default App
