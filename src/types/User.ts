export interface User{
    id: number;
    userName: string;
    email: string;
    role: "USER" | "ADMIN";
}