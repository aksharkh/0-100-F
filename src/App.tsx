import { useState } from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";

const App: React.FC =() => {

  const token = localStorage.getItem("token");

  return (
    <AuthProvider>
      <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-100 min-h-screen">

        <AppRouter/>
        </div>
      </div>
        
      </BrowserRouter>
    </AuthProvider>
    

  );
}

export default App;
