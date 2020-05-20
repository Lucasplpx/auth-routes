import React from 'react';
import { useHistory } from 'react-router-dom';
import { usuarioLogout } from '../../services/storage';

const Logout = () => {
  let history = useHistory();
  const handleLogout = () => {
    usuarioLogout();
    history.go("/");
  }

  return (
    <div>
      <button className="button" onClick={() => { handleLogout()}}>Sair</button>
    </div>
  )

}

export default Logout;