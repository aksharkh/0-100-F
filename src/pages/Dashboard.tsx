import { Card, message } from 'antd';
import React, { useEffect, useState } from 'react'
import api from '../services/api';


interface Stats{
    totalEmployees:number;
    totalAttendanceToday:number;
}

const Dashboard: React.FC = () => {

    const [stats, setStats] = useState<Stats>({totalEmployees:0, totalAttendanceToday:0});

    const fetchStats = async () => {
        try {
            const res = await api.get("/dashboard/stats");
            setStats(res.data);
        } catch (error: any) {
            message.error(error.response?.data?.message || "Failed to fetch stats");
            
        }
    }

    useEffect(() => {
        fetchStats();
    },[]);

  return (
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-6'>Dashboard</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card title="Total Employees" className='shadow-md'>{stats.totalEmployees}</Card>
            <Card title="Attendance Today" className='shadow-md'>{stats.totalAttendanceToday}</Card>

        </div>
    </div>
  )
}

export default Dashboard