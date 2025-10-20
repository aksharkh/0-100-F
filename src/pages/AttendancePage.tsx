import { Button, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Attendance } from '../types/Attendance'
import api from '../services/api';

const AttendancePage:React.FC = () => {

    const [attendance, setAttendance] = useState<Attendance[]>([]);


    const fetchAttendance = async () =>{
        try {
            const res = await api.get("/attendance/monthly");
            setAttendance(res.data);
        } catch (error:any) {
            message.error(error.response?.data?.message || "Failed to fetch attendance");
            
        }
    };

    const punchIn = async () => {
        try {
            await api.post("/attendance/punch-in");
            message.success("Punched in successfully");
            fetchAttendance();
        } catch (error:any) {
            console.log(error);
            message.error(error.response?.data?.message || "Punch In failed");
            
        }
    };

    const punchOut = async () => {
        try {
            await api.post("attendance/puch-out");
            message.success("Punched out successfully");
            fetchAttendance();
        } catch (error:any) {
            message.error(error.response?.data?.message || "Punch Out failed");
            
        }
    };

    useEffect(() => {
        fetchAttendance();
    },[]);


  return (
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-4'>Attendance</h1>
        <div className='flex gap-2 mb-4'>
            <Button type='primary' onClick={punchIn}>Punch In</Button>
            <Button type='default' onClick={punchOut}>Punch Out</Button>
        </div>
    </div>
  )
}

export default AttendancePage