import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/BlackTieEvents.scss';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlackTieEvents = () => {

    useEffect(() => {
    window.scrollTo(0, 0);

        const crsr = document.querySelector('.cursor');
        const blur = document.querySelector('.cursor-blur');

        document.addEventListener('mousemove', (e) => {
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
        });

        const animateText = (selector, stagger, scrollTrigger = false) => {
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

            const animConfigFrom = { y: 100, opacity: 0 };
            const animConfigTo = {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                stagger,
            };

            if (scrollTrigger) {
                animConfigTo.scrollTrigger = {
                    trigger: el,
                    start: 'top 90%',
                    end: 'top 70%',
                    scrub: 1,
                };
            }

            gsap.fromTo(`${selector} span`, animConfigFrom, animConfigTo);
        };

        animateText('.blacktie-events h1', 0.01, false);
        animateText('.para-wrapper h4', 0.01, false);

        animateText('.events h2', 0.01, true);

        document.querySelectorAll('.event-box').forEach((box) => {
            gsap.fromTo(
                box,
                { scale: 0.7, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 90%',
                        end: 'top 70%',
                        scrub: 1,
                    },
                }
            );

            const textElements = box.querySelectorAll('h4, p, h5, ul li');
            gsap.fromTo(
                textElements,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 90%',
                        end: 'top 70%',
                        scrub: 1,
                    },
                }
            );
        });

        document.querySelectorAll('.events h3').forEach((h3) => {
            const text = h3.textContent;
            h3.innerHTML = '';
            text.split('').forEach((char) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.display = 'inline-block';
                span.style.opacity = 0;
                h3.appendChild(span);
            });

            gsap.fromTo(
                `${'.events h3'} span`,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.01,
                    scrollTrigger: {
                        trigger: h3,
                        start: 'top 90%',
                        end: 'top 70%',
                        scrub: 1,
                    },
                }
            );
        });

        document.querySelectorAll('.small-event-box').forEach((box, index) => {
            const fromX = index % 2 === 0 ? -100 : 100;
            gsap.fromTo(
                box,
                { x: fromX, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 90%',
                        end: 'top 70%',
                        scrub: 1,
                    },
                }
            );
        });

        animateText('.features h2', 0.01, true);

        gsap.utils.toArray('.features-list li').forEach(li => {
            gsap.fromTo(
                li,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: li,
                        start: 'top 95%',
                        end: 'bottom 85%',
                        scrub: 1,
                    },
                }
            );
        });

        gsap.utils.toArray('.bte-footer h3, .bte-footer h4, .bte-footer ul li, .bte-footer p').forEach((el) => {
            gsap.fromTo(
                el,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        end: 'top 80%',
                        scrub: 1,
                    },
                }
            );
        });
    }, []);

    return (
        <>
            <div className='cursor'></div>
            <div className='cursor-blur'></div>

            <Navbar />

            <div className='blacktie-events'>
                <h1>Here Every Event Becomes a Statement
                </h1>
                <div className='para-wrapper'>
                    <div className='quotes'>
                        <i className='ri-double-quotes-l quote left-quote'></i>
                    </div>
                    <h4>
                        At Black Tie Events India, we do not just manage events - we design experiences. With over 7 years of expertise, we have mastered the art of planning and executing events that are creative, seamless, and truly unforgettable.
                        From intimate celebrations to large-scale gatherings, we manage every detail with professionalism, creativity, and budget-conscious planning.
                    </h4>

                    <div className='quotes'>
                        <i className='ri-double-quotes-r quote right-quote'></i>
                    </div>
                </div>
                <div className='events'>
                    <h2>Our Event Management Services</h2>
                    <div className='event-box'>
                        <div className='background-img wedding-bg'></div>
                        <div className='overlay'>
                            <h4>Weddings & Pre-Wedding Functions</h4>
                            <p>
                                From dreamy décor to seamless coordination, we bring your love story to life.
                                Whether it's a grand celebration or an intimate ceremony, we handle everything —
                                venue, decor, logistics, hospitality, entertainment, and more.
                            </p>
                            <div className='list-section'>
                                <h5>Types of wedding events we cover:</h5>
                                <ul>
                                    <li>Engagements</li>
                                    <li>Mehendi & Sangeet</li>
                                    <li>Haldi functions</li>
                                    <li>Destination weddings</li>
                                    <li>Reception parties</li>
                                    <li>Birthday Parties</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3>Kids, teens, adults, or milestone birthdays — we design parties that are personalized and full of fun. From themes and decor to invites, entertainment, and return gifts — we handle it all.
                    </h3>
                    <div className='event-box reverse'>
                        <div className='background-img corporate-bg'></div>
                        <div className='overlay'>
                            <h4>Corporate Events & Office Parties</h4>
                            <p>
                                Professional doesn't have to mean boring. Whether it's a team celebration, product launch,
                                annual meet, or festive office party, we help you create experiences that reflect your brand
                                and boost morale.
                            </p>
                            <div className='list-section'>
                                <h5>We organize:</h5>
                                <ul>
                                    <li>Annual days</li>
                                    <li>Conferences & seminars</li>
                                    <li>Team-building events</li>
                                    <li>Office parties & festive celebrations</li>
                                    <li>Brand activations & product launches</li>
                                    <li>Flea Markets, Pop-Ups & Exhibitions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3>We manage vibrant public events that bring brands and communities together. From vendor coordination to footfall planning, we ensure your event runs smoothly and successfully.
                    </h3>
                    <div className='small-events'>
                        <div className='small-event-box'>
                            <div className='background-img festive-bg'></div>
                            <div className='overlay'>
                                <h4>Festive & Themed Events</h4>
                                <p>
                                    From Diwali melas to Christmas carnivals and Halloween nights, we plan themed events that bring
                                    magic and excitement to your celebrations.
                                </p>
                            </div>
                        </div>
                        <div className='small-event-box'>
                            <div className='background-img private-bg'></div>
                            <div className='overlay'>
                                <h4>Private & Custom Events</h4>
                                <p>
                                    Got a unique idea or celebration in mind? We help you create tailor-made events that match your
                                    vision — no matter how big or small.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='features fade-up'>
                    <h2>Why Choose Black Tie Events India?</h2>
                    <ul className='features-list'>
                        <li>7+ Years of Event Management Experience</li>
                        <li>Budget-Friendly Solutions Without Compromising Quality</li>
                        <li>End-to-End Planning & Execution</li>
                        <li>Strong Vendor Network Across India</li>
                        <li>Custom Themes, Decor, and Concepts</li>
                        <li>On-Site Support & Coordination</li>
                        <li><strong>Attention to Detail with a Creative Touch</strong></li>
                    </ul>
                </div>
                <div className='bte-footer'>
                    <h3>
                        Whether you're planning a destination wedding, a corporate gala, or a local flea market, our team ensures every event is stress-free, stylish, and memorable.
                    </h3>
                    <h4>Let us Bring Your Event to Life</h4>
                    <ul>
                        <li><i className='ri-map-pin-line icon'></i> Based in Indore & Pune | Serving Pan India</li>
                        <li><i className='ri-tools-line icon'></i> From concept to clean-up - we manage everything</li>
                        <li><i className='ri-briefcase-line icon'></i> Trusted by brands, families, and creators alike</li>
                    </ul>
                    <p>
                        Plan your next event with Black Tie Events India - and make it extraordinary.{' '}
                        <a href='/getintouch' className='contact-link'>📩 Contact us today to get started</a>
                    </p>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default BlackTieEvents;
