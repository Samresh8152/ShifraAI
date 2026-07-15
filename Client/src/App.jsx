import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import axios from 'axios';
import ProtectedRoute from './Components/ProtectedRoute';
import Navbar from './Components/Navbar';
import Builder from './pages/Builder';
import Billing from './pages/Billing';
export const ServerURL = "http://localhost:8001"

function App() {
  const [user,setUser] = React.useState(null);
  const [loading,setLoading] = React.useState(false);

  useEffect(()=>{
    const fetchme = async()=>{
      try{
        const res = await axios.get(ServerURL+"/api/user/current-user",{withCredentials:true});
        setUser(res.data);
        console.log(res.data);
        setLoading(false);
      }catch(err){
        console.log(err);
        setLoading(false);
      }
    }
    fetchme();
  },[])

  return (
      <>
        <Routes>
          
          <Route path="/login" element={<Login setUser={setUser}  />} />
          <Route path="/*" element={<ProtectedRoute user={user} loading={loading}>
            <Navbar setUser={setUser} user = {user} />
            <Routes>
        <Route path="/" element={<Home user={user}  />} />
        <Route path="/builder" element={<Builder user={user} setUser={setUser} />} />3
        <Route path="/billing" element={<Billing user={user} />} />
        <Route path="*" element={<Navigate to="/" replace /> } />

            </Routes>
              
          </ProtectedRoute>}/>
        </Routes>
      </>
  )
}

export default App