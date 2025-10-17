import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import  Employees from '../pages/Employees'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path='/employees' element={<Employees />} />
    </Routes>
  )
}

export default AppRouter