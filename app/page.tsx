'use client'; // Required for client-side hooks like useEffect

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';
import { FaWhatsapp, FaBeer, FaCoffee, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Geolocation } from '@capacitor/geolocation';
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
        <h1>
          <img src="/logos/stalogo.PNG" alt="Standard Logo" width="100" height="100" />
        </h1>        
          {/* Your mobile-specific form or content */}
        
        <CustomerCarousel/> 
        <CustomerCarousel1/>
              
      </main>
     <a
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
    textAlign: 'center',
    textDecoration: 'none',
  }}
> 
  Log In
</a>     
      <a
  href="https://wa.me/256751559938?text=Hello%2C%20I%27m%20interested%20in%20your%20store%20products"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: 'fixed',
    bottom: '160px',
    left: '12%',
    transform: 'translateX(-50%)',
    backgroundColor: 'white',
    color: 'green',
    padding: '1rem 1.5rem',
    border: '2px solid green',
    borderRadius: '1.75rem',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '0.75rem',
    width: '23%',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',     // ✅ stack vertically
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }}
>
  <img
    src="/logos/whatsapp.PNG"
    alt="WhatsApp Icon"
    style={{
      width: '15px',
      height: '15px',
      marginBottom: '1px',
      objectFit: 'contain',      // ✅ ensures proper fit
    }}
  />
  YamahaCenter Branch
</a>

    <a
      href="https://wa.me/256751559938?text=Hello%2C%20I%27m%20interested%20in%20your%20store%20products"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
          bottom: '160px',
          left: '37%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          color: 'green',
          padding: '1rem 1.5rem',
          border: '2px solid green',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '0.75rem',
          width: '23%',
          flexDirection: 'column', 
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
      }}
       >
  <img
    src="/logos/whatsapp.PNG"
    alt="WhatsApp Icon"
    style={{
      width: '15px',
      height: '15px',
      marginBottom: '1px',
      objectFit: 'contain',      // ✅ ensures proper fit
    }}
  />
  Aponye Branch
    </a>
    <a
      href="https://wa.me/256761415961?text=Hello%2C%20I%27m%20interested%20in%20your%20store%20products"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
          bottom: '160px',
          left: '62%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          color: 'green',
          padding: '1rem 1.5rem',
          border: '2px solid green',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '0.75rem',
          width: '23%',
          flexDirection: 'column', 
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
      }}
        >
  <img
    src="/logos/whatsapp.PNG"
    alt="WhatsApp Icon"
    style={{
      width: '15px',
      height: '15px',
      marginBottom: '1px',
      objectFit: 'contain',      // ✅ ensures proper fit
    }}
  />
  GardenCity Branch
    </a>
    <a
      href="https://wa.me/256757693543?text=Hello%2C%20I%27m%20interested%20in%20your%20store%20products"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
          bottom: '160px',
          left: '88%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          color: 'green',
          padding: '1rem 1.5rem',
          border: '2px solid green',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '0.75rem',
          width: '23%',
          flexDirection: 'column', 
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
      }}
       >
  <img
    src="/logos/whatsapp.PNG"
    alt="WhatsApp Icon"
    style={{
      width: '15px',
      height: '15px',
      marginBottom: '1px',
      objectFit: 'contain',      // ✅ ensures proper fit
    }}
  />
  Lweeza Branch
    </a>
    <button
      onClick={() => router.push('/login')}
        style={{
          position: 'fixed',
          bottom: '80px',
          left: '12%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f78e16',
          color: 'green',
          padding: '1rem 1.75rem',
          border: '2px solid green',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '0.75rem',
          width: '23%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
        }}
      >
        💰CashBack
      </button>
      <button
      onClick={() => router.push('/login')}
        style={{
          position: 'fixed',
          bottom: '80px',
          left: '37%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f78e16',
          color: 'green',
          padding: '1rem 1.5rem',
          border: '2px solid green',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '0.75rem',
          width: '23%',
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
          bottom: '80px',
          left: '62%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f78e16',
          color: 'green',
          padding: '1rem 1.5rem',
          border: '2px solid green',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '0.75rem',
          width: '23%',
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
          bottom: '80px',
          left: '88%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f78e16',
          color: 'green',
          padding: '1rem 1.75rem',
          border: '2px solid green',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '0.75rem',
          width: '23%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
        }}
      >
        👤SignUp
      </button>
      <a
      href="tel:0751559938"
        style={{
          position: 'fixed',
          top: '2px',
          left: '82%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          color: 'green',
          padding: '0.010rem 4.0rem',
          border: '2px solid maroon',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1rem',
          width: '30%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',       
        }}
      >
      AponyeBranch 0751559938
      </a>
      <a
      href="tel:0751712475"      
        style={{
          position: 'fixed',
          top: '51px',
          left: '46%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          color: 'green',
          padding: '0.010rem 4.0rem',
          border: '2px solid maroon',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1rem',
          width: '30%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',       
        }}
      >
        GardenCityBra 0751712475
      </a>
      <a
      href="tel:0757693543"
        style={{
          position: 'fixed',
          top: '51px',
          left: '82%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          color: 'maroon',
          padding: '0.010rem 4.0rem',
          border: '2px solid green',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1rem',
          width: '30%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',       
        }}
      >
        LweezaBranch 0757693543
      </a>
      <a
      href="tel:0751559938"
        style={{
          position: 'fixed',
          top: '2px',
          left: '46%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          color: 'maroon',
          padding: '0.010rem 4.0rem',
          border: '2px solid green',
          borderRadius: '1.75rem',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1rem',
          width: '30%',
          zIndex: 1000,
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',       
        }}
      >
        YamahaBranch 0751559938
      </a>
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
    🕒 Visit our new Lweeza Branch open 24 hrs!     .
        Enjoy Unlimited Shopping, Dining, and Stock Variety! 🕒 
        Black November Deals! Up to 95% Off on Selected Items! Aponye Branch 2nd Floor 🕒
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

  const isTouchDevice = () => {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
  return false;
};
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
function CustomerCarousel1() {
  const images = [
    
    '/promos2/1.PNG','/promos2/2.PNG',
    '/promos2/3.PNG','/promos2/4.PNG',
    '/promos2/5.PNG','/promos2/6.PNG',
    '/promos2/7.PNG','/promos2/8.PNG',
    '/promos2/9.PNG','/promos2/10.PNG',
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

  const [swipeOptions, setSwipeOptions] = useState<any>({
  onSwipedLeft: goToNext,
  onSwipedRight: goToPrev,
  trackMouse: true,
});

useEffect(() => {
  const isTouch =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || (navigator && navigator.maxTouchPoints > 0));

  if (isTouch) {
    setSwipeOptions((prev: any) => ({
      ...prev,
      preventDefaultTouchmoveEvent: true,
    }));
  }
}, []);

const swipeHandlers = useSwipeable(swipeOptions);

  return (
    <div
      {...swipeHandlers}
      style={{
        position: 'relative',
        width: '90%',
        maxWidth: '800px',
        height: '20px',
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
          zIndex: 3,
          width: '200px',
        //  borderRadius: '20px',
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
/*
import { LocalNotifications } from '@capacitor/local-notifications';

async function setupNotification() {
  const permission = await LocalNotifications.requestPermissions();

  if (permission.display === 'granted') {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "On sale",
          body: "Widgets are 10% off. Act fast!",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5) }, // 5 seconds later
        }
      ]
    });
  } else {
    console.error('Notification permission not granted');
  }
}

setupNotification();
*/
function MyComponent() {
  useEffect(() => {
    const getLocation = async () => {
      try {
        const position = await Geolocation.getCurrentPosition();
        const { latitude, longitude } = position.coords;
        console.log('Lat:', latitude, 'Lng:', longitude);
      } catch (error) {
        if (typeof navigator !== 'undefined' && navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => console.log('Navigator position:', pos),
            (err) => console.error('Navigator error:', err)
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      }
    };

    getLocation(); // call the async function inside useEffect
  }, []);

  return <div>Getting location...</div>;
}


