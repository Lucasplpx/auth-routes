import React from 'react';
import "./styles.css";
import Loading from '../../assets/img/load.svg';

const Load = () => {

  return (
    <div className="load">
      <img src={Loading} alt="loading"/>
    </div>
  )
}

export default Load;