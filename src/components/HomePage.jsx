import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const HomePage = () => {
  const navigate = useNavigate();

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showLoader) return;

    const indiaText = document.querySelector(".page1 h1");
    const flag = document.querySelector(".flag");

    indiaText.addEventListener("mouseenter", () => {
      gsap.to(flag, { opacity: 1, duration: 0.3 });
    });
    indiaText.addEventListener("mouseleave", () => {
      gsap.to(flag, { opacity: 0, duration: 0.3 });
    });
    indiaText.addEventListener("mousemove", (e) => {
      gsap.to(flag, {
        left: `${e.clientX - 30}px`,
        top: `${e.clientY - 30}px`,
        duration: 0.1,
        ease: "power1.out",
      });
    });

    const crsr = document.querySelector(".cursor");
    const blur = document.querySelector(".cursor-blur");

    document.addEventListener("mousemove", (e) => {
      gsap.to(crsr, {
        left: e.clientX - 30,
        top: e.clientY - 30,
        duration: 0.1,
        ease: "power1.out",
      });
      gsap.to(blur, {
        left: e.clientX - 40,
        top: e.clientY - 40,
        duration: 0.1,
        ease: "power1.out",
      });
    });

    const animateLettersOnScroll = (selector, stagger = 0.05, scrollTriggerConfig = true) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        const text = el.textContent;
        el.innerHTML = "";
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.opacity = 0;
          el.appendChild(span);
        });

        const animConfig = {
          y: 100,
          opacity: 0,
        };
        const animToConfig = {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger,
        };

        if (scrollTriggerConfig) {
          animToConfig.scrollTrigger = {
            trigger: el,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          };
        }

        gsap.fromTo(el.querySelectorAll("span"), animConfig, animToConfig);
      });
    };

    animateLettersOnScroll(".page1 h1", 0.07, false);
    animateLettersOnScroll(".page1 h3", 0.02, false);
    animateLettersOnScroll(".page1 h2", 0.07, false);
    animateLettersOnScroll(".page1 h4", 0.02, false);

    animateLettersOnScroll(".page2 h1", 0.05);
    animateLettersOnScroll(".page2 h5", 0.02);

    animateLettersOnScroll(".page3-content p", 0.05)

    animateLettersOnScroll(".page4 .closing-content p, .closing-content strong", 0.05)

    animateLettersOnScroll(
      ".page3 h1, .page4 h1, .page5 h1, .page6 h1",
      0.05
    );

    gsap.fromTo(
      ".buttons button",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", stagger: 0.1, delay: 1.5 }
    );

    gsap.fromTo(
      ".scroll-down",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 30, duration: 1, ease: "power1.inOut", repeat: -1, yoyo: true }
    );

    const listItems = document.querySelectorAll(".page3-content ul li");
    listItems.forEach((li, index) => {
      const fromX = index % 2 === 0 ? 100 : -100;

      gsap.fromTo(
        li,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: li,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          },
          delay: index * 0.1,
        }
      );
    });

    const stepBoxes = document.querySelectorAll(".page4 .step-box");
    stepBoxes.forEach((box, index) => {
      const fromX = index % 2 === 0 ? -100 : 100;

      gsap.fromTo(
        box,
        { x: fromX, scale: 0.8, opacity: 0 },
        {
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          },
          delay: index * 0.1,
        }
      );
    });

    document.querySelectorAll(".elem p").forEach((p) => {
      const text = p.textContent;
      p.innerHTML = "";
      text.split(". ").forEach((sentence) => {
        const div = document.createElement("div");
        div.textContent = sentence.trim() + (sentence.endsWith(".") ? "" : ".");
        div.style.opacity = 0;
        div.style.transform = "translateY(30px)";
        p.appendChild(div);
      });

      gsap.to(p.querySelectorAll("div"), {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: p,
          start: "top 90%",
          end: "top 0%",
          scrub: 1,
        },
      });
    });

    gsap.utils.toArray('.page6 h4, .page6 h5').forEach((el) => {
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
            start: 'top 60%',
            end: 'top 100%',
            scrub: 1,
          },
        }
      );
    });
  }, [showLoader]);


  if (showLoader) return <Loader />;

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-blur"></div>

      <Navbar />

      <div className="main">
        <div className="page1">
          <video src="/homepage.mp4" autoPlay loop muted style={{ zIndex: 0 }}></video>
          <h1>Black Tie Digital</h1>
          <h2>India</h2>
          <div className="flag"></div>
          <h3>Reconceptualizing The Idea Of Digital Marketing !</h3>
          <h4>100% Guaranteed Results In 30 Days !!</h4>
          <div className="buttons">
            <button onClick={() => navigate('/services')}>Let's Talk Services<i className="ri-arrow-right-up-line"></i></button>
            <button onClick={() => navigate('/getintouch')}>Book Free Strategy Call <i className="ri-phone-fill"></i></button>
          </div>
          <div className="scroll-down"><i className="ri-arrow-down-line"></i></div>
        </div>
        <div className="page2">
          <h1>Why Choose Black Tie Digital - Your Growth Partner in Pune</h1>
          <h4>You do not need just another agency - you need a team that actually gets your business, your goals, and your challenges. At Black Tie Digital, we combine smart strategy with clean execution to help your brand grow online - the right way.</h4>
          <h4>We are here to help you go from <span>"we are trying digital marketing"</span> to <span>"wow, this is working."</span></h4>

          <div className="feature-container">
            <div className="elem">
              <img className="corner-img" src="/expertise.png" alt="corner" />
              <h2>We Build Around You</h2>
              <p>Every business is different. That is why we never use cookie-cutter strategies. We take the time to understand your goals and build a plan that actually fits.</p>
            </div>
            <div className="elem">
              <img className="corner-img" src="/attention-to-detail.png" alt="corner" />
              <h2>We focus on results, not vanity metrics</h2>
              <p>Anyone can get likes and clicks. We care about what really matters — leads, conversions, and long-term growth. We want to see your business succeed.</p>
            </div>
            <div className="elem">
              <img className="corner-img" src="/communication.png" alt="corner" />
              <h2>Creative work that performs</h2>
              <p>We create smart, compelling content that does not just look good — it gets results. Great design meets smart marketing.</p>
            </div>
            <div className="elem">
              <img className="corner-img" src="/customer-service.png" alt="corner" />
              <h2>We are in your corner</h2>
              <p>We are not here for a quick win. We believe in partnerships. That means transparency, honest communication, and a team that truly has your back.</p>
            </div>
            <div className="elem">
              <img className="corner-img" src="/customer-service.png" alt="corner" />
              <h2>Everything under one roof</h2>
              <p>Whether you need SEO, paid ads, content, branding, or a full digital strategy — we have got you covered.</p>
            </div>
          </div>

          <h5>If you are looking for a reliable, experienced digital marketing agency in Pune that treats your success like their own, you are in the right place.</h5>
        </div>
        <div className="page3">
          <h1>Why Do You Need A Digital Marketer?</h1>
          <div className="page3-content">
            <p>
              Let us be honest — growing a business today without a digital strategy is tough. Your audience is online, your competitors are online, and your brand needs to be there too.
              That is where a good digital marketer comes in.
            </p>
            <ul>
              <li><strong>Your audience is already searching:</strong> Whether it as on Google, Instagram, or YouTube, your potential customers are out there looking for what you offer. The question is — will they find you?</li>
              <li><strong>You will save time and avoid guesswork:</strong> Running a business is already a full-time job. We take the digital side off your plate — with strategies that are proven to work.</li>
              <li><strong>We help you grow — without wasting money:</strong> It is easy to waste money on ads or content that doesn at deliver. We help you invest in marketing that actually works — and back it up with data.</li>
              <li><strong>You get fresh ideas and expert execution:</strong> Trends change fast. Our team stays on top of what is new so your brand never falls behind.</li>
              <li><strong>It is not just about being online — it as about being visible:</strong> And that as exactly what we help you do — with targeted strategies that bring the right people to your business.</li>
            </ul>
            <p className="closing">
              In short, if you are serious about growth, partnering with a top digital marketing company in Pune is not just helpful — it as essential.
            </p>
          </div>
        </div>
        <div className="page4">
          <h1>How It Works — Growing Your Business Online Made Simple</h1>

          <div className="step-grid">
            <div className="step-box">
              <h2>Step 1: We Get to Know You</h2>
              <p>
                A simple, friendly conversation to understand your business, your goals, and what you need help with.
              </p>
              <img src="/step1.jpg" alt='step1' />
            </div>

            <div className="step-box">
              <h2>Step 2: We Build Your Custom Strategy</h2>
              <p>
                A tailored, step-by-step plan designed around your goals and your budget.
              </p>
              <img src="/step2.jpg" alt='step2' />
            </div>

            <div className="step-box">
              <h2>Step 3: We Launch the Work</h2>
              <p>
                From SEO to ads — we execute while you focus on running your business.
              </p>
              <img src="/step3.jpg" alt='step3' />
            </div>

            <div className="step-box">
              <h2>Step 4: We Keep Improving</h2>
              <p>
                We track performance and continuously refine your campaigns for better results.
              </p>
              <img src="/birthday.jpg" alt='step4' />
            </div>
          </div>

          <div className="closing-content">
            <p>
              Working with us is like having your own in-house digital marketing team — minus the overhead.
              If you are ready to grow your business online with a partner who genuinely cares about results, let us talk.
            </p>
            <strong>
              Black Tie Digital — the digital marketing agency in Pune that feels like an extension of your team.
              <br />
              Let us grow your brand with strategy, clarity, and a little bit of style.
            </strong>
          </div>
        </div>
        <div className='page5'>
          <h1>Our Clients</h1>
          <div className='moving-div'>
            <div className='marquee'>
              <div className='elem'><img src='/csb.png' alt='csb' /></div>
              <div className='elem'><img src='/dubaifashion.png' alt='dubai' /></div>
              <div className='elem'><img src='/fooddiaries.jpeg' alt='food' /></div>
              <div className='elem'><img src='/gpj.webp' alt='gpj' /></div>
              <div className='elem'><img src='/hatimee.webp' alt='hatimee' /></div>
              <div className='elem'><img src='/mangalyam.png' alt='mangal' /></div>
              <div className='elem'><img src='/pramila.jpeg' alt='pramila' /></div>
              <div className='elem'><img src='/rivaz.png' alt='rivaz' /></div>
              <div className='elem'><img src='/butterfly.png' alt='butterfly' /></div>
              <div className='elem'><img src='/tata.png' alt='butterfly' /></div>
              <div className='elem'><img src='/apple.png' alt='butterfly' /></div>
              <div className='elem'><img src='/liugong.png' alt='butterfly' /></div>
              <div className='elem'><img src='/icici.png' alt='butterfly' /></div>

              <div className='elem'><img src='/csb.png' alt='csb' /></div>
              <div className='elem'><img src='/dubaifashion.png' alt='dubai' /></div>
              <div className='elem'><img src='/fooddiaries.jpeg' alt='food' /></div>
              <div className='elem'><img src='/gpj.webp' alt='gpj' /></div>
              <div className='elem'><img src='/hatimee.webp' alt='hatimee' /></div>
              <div className='elem'><img src='/mangalyam.png' alt='mangal' /></div>
              <div className='elem'><img src='/pramila.jpeg' alt='pramila' /></div>
              <div className='elem'><img src='/rivaz.png' alt='rivaz' /></div>
              <div className='elem'><img src='/butterfly.png' alt='butterfly' /></div>
              <div className='elem'><img src='/tata.png' alt='butterfly' /></div>
              <div className='elem'><img src='/apple.png' alt='butterfly' /></div>
              <div className='elem'><img src='/liugong.png' alt='butterfly' /></div>
              <div className='elem'><img src='/icici.png' alt='butterfly' /></div>
            </div>
          </div>
        </div>
        <div className="page6">
          <h1>Testimonials</h1>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={4}
            slidesPerView={3.2}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="testimonial-swiper"
          >
            <SwiperSlide>
              <div className="card">
                <img src="/btd.jpeg" alt="client" />
                <h2>Saurabh Gour</h2>
                <p>"Great experience with Black Tie Digital India. They provided excellent SEO services that improved our search rankings significantly."</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img src="/btd.jpeg" alt="client" />
                <h2>Harsh Kaushal</h2>
                <p>"Awesome experience very nice team to work for social media marketing."</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img src="/btd.jpeg" alt="client" />
                <h2>Swami Krapa</h2>
                <p>"Black Tie Digital India prioritizes employee well-being, creating a motivating and friendly workplace. It's a pleasure to be part of such a dynamic team."</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img src="/btd.jpeg" alt="client" />
                <h2>Frheta Foodtruck</h2>
                <p>"We saw a noticeable improvement in our online engagement thanks to Black Tie Digital India. Their expertise in social media marketing is superb."</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img src="/liulongimg.jpg" alt="client" />
                <h2>Liugong</h2>
                <p>"Black Tie Digital India provides top-notch digital marketing services with a highly professional team. They delivered excellent results for our business, significantly improving our online presence. Highly recommend them for all your marketing needs!."</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img src="/btd.jpeg" alt="client" />
                <h2>Mihir Kanojiya</h2>
                <p>"Working here is a good experience."</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img src="/btd.jpeg" alt="client" />
                <h2>Atharv Fitness</h2>
                <p>"Black Tie Digital Team is having a good expertise in social media."</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img src="/btd.jpeg" alt="client" />
                <h2>Active Finword</h2>
                <p>"Best social media marketing service providers."</p>
              </div>
            </SwiperSlide>

          </Swiper>

          <h4>Thank you for visiting — it's our privilege to be part of your digital success.
          </h4>
          <h5><i class="ri-phone-fill"></i>Let's bring your vision to life. Call now to book your service</h5>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
