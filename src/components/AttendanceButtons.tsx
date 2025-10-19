import React from 'react'
import axiosInstance from '../services/api';

const AttendanceButtons: React.FC<{employeeId:number, onUpdate?:()=>void}> = ({employeeId, onUpdate}) => {


    const punchIn = async () => {
        try {
            const res = await axiosInstance.post(`/attendance/punch-in/${employeeId}`);
            alert("Punched in at "+ res.data.punchInTime);
            onUpdate?.();
            
        } catch (error:any) {
            alert("Error: "+ (error?.response?.data?.message || error.message));
            
        }
    };
    const punchOut = async () => {
        try {
            const res = await axiosInstance.post(`/attendance/punch-out/${employeeId}`);
            alert("Punched out at "+ res.data.punchInTime + ", Duration: " + res.data.durationMinutes+ " mins");
            onUpdate?.();
            
        } catch (error:any) {
            alert("Error: "+ (error?.response?.data?.message || error.message));
            
        }
    };

  return (
    <div className='space-x-3'>
        <button type='button' onClick={punchIn} className='bg-green-500 text-white px-4 py-2 rounded-xl'>Punch In</button> 
        <button  onClick={punchOut} className='bg-red-500 text-white px-4 py-2 rounded-xl'>Punch Out</button> 

    </div>
  )
}

export default AttendanceButtons