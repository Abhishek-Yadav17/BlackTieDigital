import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/GetInTouch.scss';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            const crsr = document.querySelector('.cursor');
            const blur = document.querySelector('.cursor-blur');

            const onMouseMove = (e) => {
                gsap.to(crsr, { left: e.clientX - 30, top: e.clientY - 30, duration: 0.1 });
                gsap.to(blur, { left: e.clientX - 40, top: e.clientY - 40, duration: 0.1 });
            };
            document.addEventListener('mousemove', onMouseMove);

            const animateText = (selector, stagger, scrollTriggerConfig = null) => {
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

                const animConfig = {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    stagger,
                };

                if (scrollTriggerConfig) {
                    animConfig.scrollTrigger = scrollTriggerConfig;
                }

                gsap.fromTo(
                    `${selector} span`,
                    { y: 100, opacity: 0 },
                    animConfig
                );
            };

            animateText('.get-in-touch h1', 0.01);
            animateText('.get-in-touch p', 0.01);

            animateText('.contact h2', 0.02, {
                trigger: '.contact h2',
                start: 'top 80%',
                end: 'bottom 70%',
                scrub: 1,
            });

            animateText('.fill-form h2', 0.01, {
                trigger: '.fill-form h2',
                start: 'top 90%',
                end: 'bottom 80%',
                scrub: 1,
            });

            animateText('.fill-form h3', 0.008, {
                trigger: '.fill-form h3',
                start: 'top 90%',
                end: 'bottom 80%',
                scrub: 1,
            });

            gsap.fromTo(
                '.fill-form .buttons button',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: '.fill-form .buttons',
                        start: 'top 90%',
                        end: 'bottom 80%',
                        scrub: 1,
                    }
                }
            );

            gsap.fromTo(
                '.contact-form',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.contact-form',
                        start: 'top 95%',
                        end: 'bottom 85%',
                        scrub: 1,
                    }
                }
            );

            gsap.fromTo(
                '.contact-box-wrapper .contact-box:nth-child(1)',
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.contact-box-wrapper',
                        start: 'top 100%',
                        scrub: 1,
                    }
                }
            );

            gsap.fromTo(
                '.contact-box-wrapper .contact-box:nth-child(2)',
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.contact-box-wrapper',
                        start: 'top 80%',
                        scrub: 1,
                    }
                }
            );

            gsap.fromTo(
                '.timings',
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: '.timings',
                        start: 'top 100%',
                        scrub: 1,
                    }
                }
            );

            animateText('.contact-footer h2', 0.01, {
                trigger: '.contact-footer h2',
                start: 'top 90%',
                end: 'bottom 80%',
                scrub: 1,
            });

            animateText('.contact-footer h4', 0.005, {
                trigger: '.contact-footer h4',
                start: 'top 90%',
                end: 'bottom 80%',
                scrub: 1,
            });

            animateText('.contact-footer h3', 0.005, {
                trigger: '.contact-footer h3',
                start: 'top 90%',
                end: 'bottom 80%',
                scrub: 1,
            });

            return () => {
                document.removeEventListener('mousemove', onMouseMove);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        });

        return () => ctx.revert();
    }, []);

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            email: e.target[2].value,
            phone: e.target[3].value,
            message: e.target[4].value,
        };

        const res = await fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (res.ok) alert('Message sent!');
        else alert('Failed to send.');
    };


    return (
        <>
            <div className='cursor'></div>
            <div className='cursor-blur'></div>

            <Navbar />

            <div className='get-in-touch'>
                <h1>Get in Touch - Let us Create Something Remarkable</h1>
                <p>At Black Tie Digital India, we are all about turning ideas into impact. Whether you are looking for expert digital marketing, unforgettable events, customized invitations, or thoughtful gifting - we are ready to bring your vision to life.</p>
                <div className='contact'>
                    <h2>Let us start a conversation.</h2>
                    <div className='contact-box-wrapper'>
                        <div className='contact-box'>
                            <h4><i className='ri-map-pin-line'></i> Pune Office</h4>
                            <p>Black Tie Digital India</p>
                            <p>509, 5th Floor, Global Business Hub</p>
                            <p>Kharadi, Pune - Maharashtra</p>
                            <p><strong>+91 88900 99108</strong></p>
                        </div>

                        <div className='contact-box'>
                            <h4><i className='ri-map-pin-line'></i> Indore Office</h4>
                            <p>Black Tie Digital India</p>
                            <p>3rd Floor, Prestige AIC</p>
                            <p>School No. 74, Vijay Nagar</p>
                            <p>Indore - Madhya Pradesh</p>
                            <p><strong>+91 91319 59986</strong></p>
                        </div>
                    </div>
                    <div className='timings'>
                        <h4>Working Hours</h4>
                        <p>Monday to Saturday</p>
                        <p>10:00 AM - 7:00 PM</p>
                        <p><em>(Sunday consultations available by appointment)</em></p>
                    </div>

                </div>
                <div className='fill-form'>
                    <h2>Prefer to Reach Us Online?</h2>
                    <h3>Fill out the form below and we will get back to you within 24 hours.</h3>
                    <div className='buttons'>
                        <button>
                            <div className='in-button'>
                                <i className='ri-mail-fill'></i>
                                <h4>E-mail</h4>
                            </div>
                            <h4>itsblacktiedigital@gmail.com</h4>
                        </button>
                        <button>
                            <div className='in-button'>
                                <i className='ri-phone-fill'></i>
                                <h4>Phone</h4>
                            </div>
                            <h4>+91 88900 99108</h4>
                        </button>
                    </div>

                    <div className='contact-form'>
                        <form onSubmit={sendEmail}>
                            <div className='name-fields'>
                                <input type='text' placeholder='First Name' />
                                <input type='text' placeholder='Last Name' />
                            </div>
                            <input type='email' placeholder='Email' />
                            <input type='tel' placeholder='Phone Number' />
                            <textarea placeholder='Your Message'></textarea>
                            <button type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
                <div className='contact-footer'>
                    <h2>Let us Collaborate</h2>
                    <h4>From growing your business online to planning your next big event - Black Tie Digital India is your trusted partner for smart, stylish, and effective solutions.</h4>
                    <h3>Connect today. Let us make it happen.</h3>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default GetInTouch;
