import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './page/Login'
import "./reset.css"
import axios from 'axios'
import Main from './page/Main'

axios.defaults.baseURL = 'https://dev1.urbanlt.co.kr/fitmoabiz'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='dashboard' element={<div>대쉬보드</div>} />
          <Route path='memb/memberList.do' element={<div>회원관리</div>} />
          <Route path='crsinfo/crsRegiSearch.do' element={<div>수강관리</div>} />
        </Route>

        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
