import { useContext } from 'react';

import AuthContext from '../contexts/auth';

const useAuthLogin = () => {
  const contexto = useContext(AuthContext);
  return contexto;
}

export default useAuthLogin;


