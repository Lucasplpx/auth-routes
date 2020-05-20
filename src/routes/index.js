import React from 'react';

import useAuthLogin from '../hooks/useAuthLogin';
import { usuarioLogado } from '../services/storage';
import RoutesAuth from './routes.auth';
import RoutesApp from './routes.app';

const Routes = () => {

  const { logado }  = useAuthLogin();

  return (
    <React.Fragment>
      {logado || usuarioLogado() ? <RoutesApp /> : <RoutesAuth />  }
    </React.Fragment>
  );
  
}

export default Routes;