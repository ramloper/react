import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './page/Login'
import "./reset.css"
import axios from 'axios'
import Main from './page/Main'

axios.defaults.baseURL = 'https://dev1.urbanlt.co.kr/fitmoabiz'

function App() {
  const loginInfo = {
    memb_name: "",
    memb_numb: "",
    id: "",
    cent_numb: "",
    cent_info: ""
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
