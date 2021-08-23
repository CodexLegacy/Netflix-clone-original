import React, { useEffect, useState } from 'react'
import './NavBar.css'

const NavBar = () => {

  const [show, setShow] = useState(false);
useEffect(() => {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
      setShow(true)
    } else setShow(false)
  });
  return () => {
    window.removeEventListener('scroll');
  };
},[]);


  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="Netflix Logo" className="navbar__logo" />
      
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Users" className="navbar__avatar" />
    </div>
  )
}

export default NavBar
