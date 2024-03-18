import React from 'react';
import '../CSS/Project.css';
import { Link } from 'react-router-dom';

function Project() {
  return (


    
    <div className="main-container">

    <div className='pr_header'>나의 프로젝트</div>
    
      <Link to="/Project1">
        <button className='card1'> </button>
      </Link>

      <Link to="/Project2">
        <button className='card2'> </button>
      </Link>

      <Link to="/Project3">
        <button className='card3'> </button>
      </Link>

    </div>

  );
}

export default Project;