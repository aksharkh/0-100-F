import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
    </Routes>
  )
}

export default AppRouter