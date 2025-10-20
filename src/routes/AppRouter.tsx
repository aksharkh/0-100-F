import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import  Employees from '../pages/Employees'
import Dashboard from '../pages/Dashboard'
import AttendancePage from '../pages/AttendancePage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='*' element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path='/employees' element={<Employees />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/attendance' element={<AttendancePage />} />
    </Routes>
  )
}

export default AppRouter