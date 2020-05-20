import React, { useState } from 'react';
import "./styles.css";
import useAuthLogin from '../../hooks/useAuthLogin';
import Load from '../../components/Load';
import User from '../../assets/img/user.svg';

const initialStateAuth = { user: "", pass: "" };

const Login = () => {
  const [form, setForm] = useState(initialStateAuth);
  const [alert, setAlert] = useState(true);
  const [validacao, setValidacao] = useState("");
  const { msg, load, login } = useAuthLogin();

  const handleLogin = () => {
    if(!validateFields()){
      setAlert(true);
      login(form);  
      setForm(initialStateAuth);
    }
  }

  const handleForm = (evt) => {
    setAlert(false);
    setValidacao("");
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    })
  }
  
  const validateFields = () => {
    let msgErro = "";

    if(form.user === "") {
      msgErro += `Informe o usuário<br/>`;
    }

    if(form.pass === "") {
      msgErro += `Informe a senha`;
    }

    setValidacao(msgErro);
    return msgErro;
  }

  return (
    <div className="container">

      {load ? <Load/> : (

      <div className="form">
        <div>
          <img src={User} alt="user_login"/>
        </div>

        {msg && alert && <div className="error">{msg}</div>}

        {validacao !== "" && (<div className="validation" dangerouslySetInnerHTML={{__html: validacao}}></div>) }

        <div className="group-field">
          <label htmlFor="user">Usuário</label>
          <input onChange={handleForm} value={form.user} type="text" id="user" name="user" />
        </div>

        <div className="group-field">
          <label htmlFor="pass">Senha</label>
          <input onChange={handleForm} value={form.pass} type="password" id="pass" name="pass" />
        </div>
        <button className="button" onClick={() => { handleLogin()}}>Acessar</button>
      </div>
      )
      }
    </div>
  )
}

export default Login;