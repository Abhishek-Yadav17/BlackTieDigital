import React, { useEffect } from 'react';
import '../styles/Loader.scss';
import gsap from 'gsap';

const Loader = () => {
  useEffect(() => {
    let percent = 0;
    const dot = document.querySelector('.loader-dot');
    const circle = document.querySelector('.circle-wrapper');
    const percentText = document.querySelector('.percent');
    const container = document.querySelector('.loader-container');

    const interval = setInterval(() => {
      percent = Math.min(percent + 1, 100);
      percentText.textContent = `${percent}%`;

      const size = circle.getBoundingClientRect().width;
      const radius = size / 2;
      const rad = (percent / 100) * 2 * Math.PI;

      gsap.to(dot, {
        x: radius * Math.sin(rad),
        y: -radius * Math.cos(rad),
        duration: 0.1,
        ease: 'power1.out',
      });

      if (percent === 100) {
        clearInterval(interval);
        gsap.to(container, {
          y: '-100vh',
          opacity: 0,
          duration: 1.8,
          ease: 'power2.inOut',
        });
      }
    }, 20);
  }, []);

  return (
    <div className='loader'>
      <div className='loader-container'>
        <div className='circle-wrapper'>
          <img src='/btd.jpeg' alt='tie' className='tie-img' />
          <div className='loader-dot'></div>
        </div>
        <div className='bottom-line'></div>
        <div className='loading-text'>
          <i>Loading...</i>
          <span className='percent'>0%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
