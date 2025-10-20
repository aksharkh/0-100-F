import { Menu } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router'
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar: React.FC = () => {

    const navigate = useNavigate();
  return (
    <div className='w-64 h-screen bg-gray-800 text-white flrx flex-col'>
        <div className='text-2xl font-bold p-4 border-b border-gray-700'>HR Dashboard</div>
        <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={["dashboard"]}
        className="flex-1"
        >
            <Menu.Item key="dashboard" icon={<LuLayoutDashboard />} onClick={() => navigate("/dashboard")}>
            Dashboard
            </Menu.Item>
            <Menu.Item key="employees" icon={<LuLayoutDashboard />} onClick={() => navigate("/employees")}>
            Employees
            </Menu.Item>
            <Menu.Item key="attendance" icon={<LuLayoutDashboard />} onClick={() => navigate("/attendance")}>
            Attendance
            </Menu.Item>

        </Menu>
    </div>
  )
}

export default Sidebar