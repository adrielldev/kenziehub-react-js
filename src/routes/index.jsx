import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { useState,useEffect } from 'react'

const Rotas = () =>{

    const [auth,setAuth] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem('@Kenziehub:token')
        
         if(token){
            return setAuth(true);
        } 
    },[auth])



    return(
        <Routes>
            <Route exact path = '/' element={<Home auth={auth}/>}></Route>
            <Route exact path = '/login' element={<Login auth={auth} setAuth={setAuth}/>}></Route>
            <Route exact path = '/signup' element={<Signup auth={auth} setAuth={setAuth}/>}></Route>
            <Route exact path = '/dashboard' element={<Dashboard auth={auth} setAuth={setAuth}/>}></Route>

        </Routes>
    )
}

export default Rotas