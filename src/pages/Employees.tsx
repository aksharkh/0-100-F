
import React, { useEffect, useState } from 'react'
import axios from '../services/api'

type EmployeeDto = {
    id: number;
    firstName: string;
    lastName: string;
    employeeCode: string;
    email: string;
    designation: string;
    joiningDate: string;

};



const Employees: React.FC = () => {

    const [employees, setEmployees] = useState<EmployeeDto[]>([]);
    const [page, setpage] = useState<number>(1);

    async function fetchEmployees() {
        const res = await axios.get(`/employees?page=${page}&size=20`);
        console.log(res);
        
        setEmployees(res.data.content);
        
    }

    useEffect(() => {
        fetchEmployees();

    }, [page]);


    const deleteEmployee = async (id: number) => {
        if(!confirm("Delete employee?")) return;

        await axios.delete(`/emloyees/${id}`);
        
    }
  return (
    <div className='p-6'>
        <h2 className='text-xl font-bold mb-4'>Employees</h2>
        <table>
            <thead className='bg-gray-200'>
                <tr>
                    <th className='p-2'>Code</th>
                    <th className='p-2'>Name</th>
                    <th className='p-2'>Email</th>
                    <th className='p-2'>Designation</th>
                    <th className='p-2'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((e) => (
                    <tr key={e.id}>
                        <td>{e.employeeCode}</td>
                        <td>{e.firstName} {e.lastName}</td>
                        <td>{e.email}</td>
                        <td>{e.designation}</td>
                        <td>
                            <button type='button' className='text-red-500 mr-2' onClick={() => deleteEmployee(e.id) }>Delete</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>

    </div>
  )
}

export default Employees