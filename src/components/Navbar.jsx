import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import '../styles/Navbar.scss';

const Navbar = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const nav = document.querySelector('nav')
    const navElems = document.querySelectorAll('.nav-part2 h4')

    gsap.fromTo(nav, {
      y: -100, opacity: 0
    }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.out'
    });

    gsap.fromTo(navElems, {
      y: 20, opacity: 0
    }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.out', stagger: 0.15
    });

  })

  return (
    <nav>
      <img src='/btd.jpeg' alt='logo' />
      <div className='nav-part2'>
        <h4 data-text='Home' onClick={() => navigate('/')}>Home</h4>
        <h4 data-text='About Us' onClick={() => navigate('/aboutus')}>About Us</h4>
        <h4 data-text='Services' onClick={() => navigate('/services')}>Services</h4>
        <h4 data-text='Black Tie Events' onClick={() => navigate('/black-tie-events')}>Black Tie Events</h4>
        <h4 data-text='Black Tie Invites' onClick={() => navigate('/black-tie-invites')}>Black Tie Invites</h4>
        <h4 data-text='Contact Us' onClick={() => navigate('/getintouch')}>Contact Us</h4>
        <h3><i className='ri-menu-3-line'></i></h3>
      </div>
    </nav>
  );
};

export default Navbar;
