import React from 'react';
import "./styles.css";
import Logout from '../../components/Logout';
import Positivo from '../../assets/img/positivo.svg';

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="container-dashboard">
        <h1>Dashboard</h1>
        <div style={{ width: 120}}><Logout /></div>
      </div>
      <div className="container-positivo">
        <img src={Positivo} alt="positivo"/>
      </div>
    </React.Fragment>
  )
}

export default Dashboard;