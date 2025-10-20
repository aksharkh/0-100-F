export interface Attendance {
    id:number;
    employeeId: number;
    employeeCode: string;
    date: string;
    punchInTime?: string;
    puncchOuttime?: string;
    duartionMinutes?: number;
}