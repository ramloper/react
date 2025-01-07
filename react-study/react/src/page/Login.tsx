import React from 'react'
import Form from '../components/login/Form'

export default function Login() {
  if (localStorage.getItem("accessToken")) {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("centList")
    localStorage.removeItem("mainAuth")
    localStorage.removeItem("subAuth")
  }
  return (
    <>
      <Form />
    </>
  )
}
