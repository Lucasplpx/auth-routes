import React , { createContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const ContextAuth = ({ children }) => {
  const [logado, setLogado] = useState(false);
  const [load, setLoad] = useState(false);
  const [msg, setMsg] = useState("");

  const login = async ({ user, pass }) => {   

    if (user && pass) {
      try {
        setLoad(true);
        if(localStorage.getItem("token")){
          return setLogado(true);
        }
        const resp = await api.get(`/users/${user}`);  
        if(resp.status === 200) {
          localStorage.setItem("token", `ZS3EmOIjelb^${new Date().getTime()}@@OI#yb7&vLo`);
          localStorage.setItem("user", JSON.stringify(resp.data));
          setLogado(true)
        }
      } catch (error) {
        console.log('errors?', error)
        setMsg(`Usuario: ${user} não encontrado!`);
        setLogado(false); 
      } finally {
        setLoad(false)
      }
    }
  }

  return (
    <AuthContext.Provider value={{load, logado , login, msg }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;