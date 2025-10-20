import { Calendar } from 'antd';
import React from 'react'


interface AttendanceEvent {
    date: string;
    status: "Present" | "Absent" | "Leave";
}

const AttendanceCalendar: React.FC<{attendaceData: AttendanceEvent[] }> = ({attendaceData}) => {


    const dateCellRender = ()
  return (
    <div className='p-4 bg-white rounded-2xl shadow-md'>
        <h2 className='text-xl font-semibold mb-4 text-gray-800'>Attendance Calendar</h2>
        <Calendar
        fullscreen={true}
        
        />
    </div>
  )
}

export default AttendanceCalendar