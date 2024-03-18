import '../CSS/Main.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const MainPage=() => {

    const [showPage, setShowPage] = useState(false);
  
    const handleClick = () => {
      setShowPage(!showPage);
    };

  return (
    
    <div className='app-container'>
    <div className="left">

       <div className="header">
        <img src = "/icon2.png" alt = "icon" className='icon'></img> 
        <span className="myPage-text">My Page</span>
      </div>

      <div className="main">
        <div className="rotated-text">Shin Jun-Ho's Portfolio</div>
      </div>
      
      <div className="footer">
        <div>@copyright  &quot;sin010820@naver.com &quot;</div>

      </div>
    </div>

    <div className="right">
      
    <div className="buttons-coll">

    <Link to="/Introduction">
    <button className="custom-btn btn-3"> <span>Introduction</span></button>
    </Link>
    <Link to="/Project">
      <button className="custom-btn btn-3"><span>Project</span></button>
    </Link>
    <Link to="/Contest">
      <button className="custom-btn btn-3"><span>Contest</span></button>
    </Link>
    <Link to="/Volunteer">
      <button className="custom-btn btn-3 last-btn"><span>Volunteer</span></button>
    </Link>
    </div>
  </div>
  </div>

    

  );
}

export default MainPage;