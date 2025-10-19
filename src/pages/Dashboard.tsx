import React, { useState } from 'react'


type AttendanceDto ={
    id: number;
    date: string;
    punchInTime?: string;
    punchOutTime?:string;
    durationMinutes?: number;
    employeeId: number;
    employeeCode:string;
}
const Dashboard: React.FC = () => {

    const [emploeeId, setEmployeeId] = useState<number>(() => Number(localStorage.getItem("employeeId") || 1));
    const today = new Date();
    const [year, setyear] = useState(today.getFullYear());
    const [mont, setMonth] = useState(today.getMonth()+1);
    const [attendance, setAttendance] = useState<AttendanceDto[]>([]);



  return (
    <div className='p-6'>
        <div className='flex justify-between items-center mb-4'>
            <h1 className='text-xl font-bold'> Dashboard</h1>
            <div>
                <select value={emploeeId} onChange={(e)=> setEmployeeId(Number(e.target.value))} className='mr-4 border p-1 rounded'>
                    <option value={1}>Employee 1</option>
                    <option value={2}>Employee 2</option>

                </select>

                <button >Prev</button>
                <button >Next</button>
            </div>
        </div>

    </div>
  )
}

export default Dashboard