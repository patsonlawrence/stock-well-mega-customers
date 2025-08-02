'use client'; // Required for client-side hooks like useEffect

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}

function MobileLayout() {
  const router = useRouter();
  return (
    <div
      style={{
        display: 'flex',
        left: '30%',
        flexDirection: 'column',
        minHeight: '100vh',
       // justifyContent: 'space-between',
        padding: '0.5rem',
        //fontFamily: 'sans-serif',
        alignItems: 'left',
       // textAlign: 'center',
        backgroundColor: 'white',
            }}
    >
      <main>
        <h1><img src="/logos/stalogo.PNG" alt="Standard Logo" width="100" height="100" />
</h1>        
          {/* Your mobile-specific form or content */}
        
        <CustomerCarousel/> 
              
      </main>
      <button
      onClick={() => router.push('/login')}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#097520ff',
          color: '#ffffff',
          padding: '0.75rem 1.5rem',
          border: 'none',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1rem',
          width: '75%',
          zIndex: 1000,
        }}
      >
        Log In
      </button>
      <a href="https://wa.me/256755958566?text=Hello%2C%20I%27m%20interested%20in%20your%20store%20products" target="_blank">
      <button
        style={{
          position: 'fixed',
          bottom: '100px',
          left: '12%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f78e16',
          color: '#0a0a0a',
          padding: '1rem 1.5rem',
          border: 'none',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '0.75rem',
          width: '20%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
        }}
      >
        💬FeedBack
      </button> 
      </a>  
      <button
      onClick={() => router.push('/login')}
        style={{
          position: 'fixed',
          bottom: '100px',
          left: '38%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f78e16',
          color: '#0a0a0a',
          padding: '1rem 1.5rem',
          border: 'none',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '0.75rem',
          width: '20%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
        }}
      >
        🏷️Offers
      </button>
      <button
      onClick={() => router.push('/login')}
        style={{
          position: 'fixed',
          bottom: '100px',
          left: '62%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f78e16',
          color: '#0a0a0a',
          padding: '1rem 1.5rem',
          border: 'none',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '0.75rem',
          width: '20%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
        }}
      >
        📍Branches
      </button>
      <button
      onClick={() => router.push('/signup')}
        style={{
          position: 'fixed',
          bottom: '100px',
          left: '85%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f78e16',
          color: '#0a0a0a',
          padding: '1rem 1.75rem',
          border: 'none',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '0.75rem',
          width: '20%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
        }}
      >
        👤SignUp
      </button>
      <button
      onClick={() => router.push('/signup')}
        style={{
          position: 'fixed',
          top: '26px',
          left: '65%',
          transform: 'translateX(-50%)',
          backgroundColor: '#035706',
          color: '#ffffff',
          padding: '0.010rem 6.5rem',
          border: 'none',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1rem',
          width: '70%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',       
        }}
      >
        AponyeBranch:0709095815
      </button>
      <button
      onClick={() => router.push('/login')}
        style={{
          position: 'fixed',
          top: '51px',
          left: '65%',
          transform: 'translateX(-50%)',
          backgroundColor: '#048a09',
          color: '#ffffff',
          padding: '0.010rem 6.5rem',
          border: 'none',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1rem',
          width: '70%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',       
        }}
      >
        GardenCityBra:07xxxxxxxx
      </button>
      <button
      onClick={() => router.push('/login')}
        style={{
          position: 'fixed',
          top: '76px',
          left: '65%',
          transform: 'translateX(-50%)',
          backgroundColor: '#09e311',
          color: '#ffffff',
          padding: '0.010rem 6.5rem',
          border: 'none',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1rem',
          width: '70%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',       
        }}
      >
        LwezaBranch:07xxxxxxxx
      </button>
      <button
      onClick={() => router.push('/login')}
        style={{
          position: 'fixed',
          top: '1px',
          left: '65%',
          transform: 'translateX(-50%)',
          backgroundColor: '#012e03',
          color: '#ffffff',
          padding: '0.010rem 6.5rem',
          border: 'none',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1rem',
          width: '70%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',       
        }}
      >
        YamahaBranch:0709095815
      </button>
    <div
  style={{
    position: 'fixed',
    top: '105px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ffc107',
    color: '#000',
    width: '100%',
    padding: '0.2rem 0.2rem',
    borderRadius: '2.75rem',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    zIndex: 999,
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    textAlign: 'center',
    overflow: 'hidden', // hides overflow
    whiteSpace: 'nowrap',
  }}
>
  <div
    style={{
      display: 'inline-block',
      paddingLeft: '100%',
      animation: 'scroll-left 12s linear infinite',
    }}
  >
    🕒 Visit our new Lweza Branch open 24 hrs!
    Enjoy Unlimited Shopping, Dining, and Stock Variety! 🕒
  </div>

  {/* CSS Keyframes inside <style> tag */}
  <style>
    {`
      @keyframes scroll-left {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `}
  </style>
</div>    
    </div>    
  );  
}
/*function ImageCarousel() {
  const images = ['/homepageslides/ecomerce.PNG', '/homepageslides/FoodandBeverage.PNG', 
    '/homepageslides/Healthcare.PNG', '/homepageslides/manufacturing.PNG', '/homepageslides/Retail.PNG',
     '/homepageslides/WarehouseandLogistics.PNG', '/homepageslides/wholesaleanddistr.PNG'];
  const [index, setIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10000 ms = 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((index + 1) % images.length);

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        style={{ maxWidth: '50%', height: 'auto', borderRadius: '10px', marginBottom: '0.5rem' }}
      />      
    </div>
  );
}*/
function CustomerCarousel() {
  const images = [
    '/promos/STANDARDLOGO.PNG',
    '/promos/contactus.PNG',
    '/promos/monti.PNG',
    '/promos/1.PNG','/promos/2.PNG',
    '/promos/3.PNG','/promos/4.PNG',
    '/promos/5.PNG','/promos/6.PNG',
  ];

  const [index, setIndex] = useState(0);
  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  const goToPrev = () => setIndex(prevIndex);
  const goToNext = () => setIndex(nextIndex);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 4 seconds
  useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, [isPaused, images.length]);

  const isTouchDevice = () =>
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const swipeOptions: any = {
  onSwipedLeft: goToNext,
  onSwipedRight: goToPrev,
  trackMouse: true,
};

if (isTouchDevice()) {
  swipeOptions.preventDefaultTouchmoveEvent = true;
}
const swipeHandlers = useSwipeable(swipeOptions);

  return (
    <div
      {...swipeHandlers}
      style={{
        position: 'relative',
        width: '90%',
        maxWidth: '800px',
        height: '300px',
        margin: '40px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        touchAction: 'pan-y',
      }}
    >
      {/* Previous Image */}
      <img
        src={images[prevIndex]}
        alt="Previous"
        onClick={goToPrev}
        style={{
          position: 'relative',
          left: '5%',
          width: '90px',
          opacity: 0.5,
          cursor: 'pointer',
          zIndex: 1,
          transform: 'translateY(-50px)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
        }}
      />

      {/* Current Image */}
      <img
        src={images[index]}
        alt="Current"
        onClick={goToNext}
        style={{
          zIndex: 2,
          width: '200px',
          borderRadius: '20px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          transform: 'translateY(-50px)',
        }}
      />

      {/* Next Image */}
      <img
        src={images[nextIndex]}
        alt="Next"
        onClick={goToNext}
        style={{
          position: 'relative',
          right: '1%',
          width: '75px',
          opacity: 0.5,
          transform: 'translateY(-50px)',
          cursor: 'pointer',
          zIndex: 1,
          boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
        }}
      />
    </div>
  );
}
function DesktopLayout() {
  const router = useRouter();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'space-between',
        padding: '2rem',
        fontFamily: 'sans-serif',
        alignItems: 'centre'
      }}
    >
      <main>
        <h1>© StockWell <span>☎ Contact us 256709095815</span></h1>
        {/* Your desktop-specific form or content */}
      </main>
      <button
      onClick={() => router.push('/login')}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#06722aff',
          color: '#ffffff',
          padding: '0.75rem 1.5rem',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1rem',
          width: '30%', // smaller width for desktop
          zIndex: 1000,
        }}
      >
        Log In
      </button>
    </div>
  );
}
