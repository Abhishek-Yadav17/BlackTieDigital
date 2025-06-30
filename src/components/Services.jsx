import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Services.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const crsr = document.querySelector('.cursor');
    const blur = document.querySelector('.cursor-blur');

    const mouseMoveHandler = (e) => {
      gsap.to(crsr, {
        left: e.clientX - 30,
        top: e.clientY - 30,
        duration: 0.1,
        ease: 'power1.out',
      });
      gsap.to(blur, {
        left: e.clientX - 40,
        top: e.clientY - 40,
        duration: 0.1,
        ease: 'power1.out',
      });
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    const animateText = (selector, stagger) => {
      const el = document.querySelector(selector);
      if (!el) return;
      const text = el.textContent;
      el.innerHTML = '';
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = 0;
        el.appendChild(span);
      });

      gsap.fromTo(
        `${selector} span`,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger }
      );
    };

    animateText('.services h1', 0.01);
    animateText('.services-list h2', 0.01);

    gsap.fromTo(
      '.buttons button',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.2, delay: 1 }
    );

    gsap.fromTo(
      '.services-content',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.4 }
    );

    gsap.fromTo(
      '.para-wrapper .left-quote',
      { x: -70, y: -70, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 2, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.para-wrapper .right-quote',
      { x: 70, y: 70, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 2, ease: 'power3.out', delay: 0.3 }
    );

    const para = document.querySelector('.para-wrapper p');
    if (para) {
      const text = para.textContent;
      para.innerHTML = '';
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = 0;
        para.appendChild(span);
      });

      gsap.fromTo(
        '.para-wrapper p span',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.005 }
      );
    }

    const columns = document.querySelectorAll('.services-list .columns ul li');
    gsap.set(columns, { y: 30, opacity: 0 });
    gsap.to(columns, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-list .columns',
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'play none none none',
        scrub: 1
      },
    });

    gsap.set('.custom-box', { scale: 0.8, opacity: 0 });
    gsap.to('.custom-box', {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.custom-box',
        start: 'top 90%',
        toggleActions: 'play none none none',
        scrub: 1
      },
    });

    const footerItems = document.querySelectorAll('.services-footer ul li');
    gsap.set(footerItems, { y: 30, opacity: 0 });
    gsap.to(footerItems, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.services-footer',
        start: 'top 90%',
        toggleActions: 'play none none none',
        scrub: 1
      },
    });

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className='cursor'></div>
      <div className='cursor-blur'></div>

      <Navbar />

      <div className='services'>
        <h1>Our Services - Complete Digital & Offline Marketing Solutions</h1>
        <div className='para-wrapper'>
          <div className='quotes'>
            <i className='ri-double-quotes-l quote left-quote'></i>
          </div>
          <p>
            At Black Tie Digital India, we offer a full suite of online and offline marketing services designed to help your brand grow, connect, and convert. Whether you're a startup or an established business, we craft custom strategies that bring measurable results and long-term value.

            From digital campaigns and social media to branding, app development, and even offline media, we provide everything your business needs under one roof.
          </p>
          <div className='quotes'>
            <i className='ri-double-quotes-r quote right-quote'></i>
          </div>
        </div>
        <div className='services-list'>
          <h2>Explore Our Complete List of Services :</h2>
          <div className='columns'>
            <ul>
              <li>
                <i className='ri-search-eye-line'></i>
                <h4>SEO (Search Engine Optimization)</h4>
                <p>Rank higher. Get found. Drive qualified traffic.</p>
              </li>
              <li>
                <i className='ri-instagram-line'></i>
                <h4>Social Media Marketing</h4>
                <p>Engage, build loyalty, and convert across social platforms.</p>
              </li>
              <li>
                <i className='ri-google-line'></i>
                <h4>Google Ads & PPC</h4>
                <p>Targeted campaigns with measurable ROI.</p>
              </li>
              <li>
                <i className='ri-global-line'></i>
                <h4>Web Design & Development</h4>
                <p>Modern, mobile-friendly, converting websites.</p>
              </li>
              <li>
                <i className='ri-quill-pen-line'></i>
                <h4>Content Marketing</h4>
                <p>Blog posts, videos, infographics that build authority.</p>
              </li>
              <li>
                <i className='ri-map-pin-line'></i>
                <h4>Local SEO & Branding</h4>
                <p>Get discovered in your area and drive footfall.</p>
              </li>
            </ul>
            <ul>
              <li>
                <i className='ri-bar-chart-2-line'></i>
                <h4>Performance Marketing</h4>
                <p>Real-time optimization and detailed reporting.</p>
              </li>
              <li>
                <i className='ri-mic-line'></i>
                <h4>Podcast Production</h4>
                <p>Launch and grow your podcast audience.</p>
              </li>
              <li>
                <i className='ri-whatsapp-line'></i>
                <h4>WhatsApp Monetization</h4>
                <p>Turn chats into conversions with automation.</p>
              </li>
              <li>
                <i className='ri-camera-line'></i>
                <h4>Product Photography</h4>
                <p>High-quality visuals for all platforms.</p>
              </li>
              <li>
                <i className='ri-building-line'></i>
                <h4>Billboard & Hoardings</h4>
                <p>Offline advertising across cities.</p>
              </li>
              <li>
                <i className='ri-user-star-line'></i>
                <h4>Influencer Marketing</h4>
                <p>Leverage authentic voices for your brand.</p>
              </li>
            </ul>
            <ul>
              <li>
                <i className='ri-smartphone-line'></i>
                <h4>App Development</h4>
                <p>Custom mobile apps from idea to launch.</p>
              </li>
              <li>
                <i className='ri-settings-3-line'></i>
                <h4>Ad Management</h4>
                <p>Meta, Google, YouTube - fully managed.</p>
              </li>
              <li>
                <i className='ri-shield-check-line'></i>
                <h4>ORM</h4>
                <p>Build and protect your online reputation.</p>
              </li>
              <li>
                <i className='ri-mail-line'></i>
                <h4>Email Marketing</h4>
                <p>High-converting email campaigns and automation.</p>
              </li>
              <li>
                <i className='ri-video-add-line'></i>
                <h4>Video Marketing</h4>
                <p>Social reels and brand films that convert.</p>
              </li>
              <li>
                <i className='ri-palette-line'></i>
                <h4>Branding & Identity</h4>
                <p>Logos and visuals that make a mark.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='custom-box'>
          <h3>Need Something Custom?</h3>
          <p>
            Whether you're launching a product, running a citywide campaign, or scaling your online store, our team can create a solution that fits your vision and budget.
            As a leading digital marketing agency in India with teams in Pune and Indore, we are here to help your brand thrive - online and offline.
          </p>
        </div>
        <div className='services-footer'>
          <h3>Let us Grow Together</h3>
          <ul>
            <li>📍 Serving Clients Across India</li>
            <li>🎯 500+ Successful Campaigns Delivered</li>
            <li>🏆 Results You Can Measure, Partnerships You Can Trust</li>
          </ul>
          <p>Get in touch with <strong>Black Tie Digital India</strong> today - and let as start building something incredible.</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
