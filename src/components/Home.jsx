// import React, { useState, useEffect } from 'react';

// const Home = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [currentSpanIndex, setCurrentSpanIndex] = useState(0);
//   const [typedText, setTypedText] = useState('');
//   const [showCursor, setShowCursor] = useState(true); // State to control cursor visibility
//   const spanText = ['Automotive AUTOSAR', 'Outsourcing', 'Recruitment'];
//   const motto = "Driving Innovation, Shaping the Future of Automotive Technology with ";

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const type = (text) => {
//       const delay = 100; // Typing speed in milliseconds
//       let i = 0;
//       const interval = setInterval(() => {
//         if (i <= text.length) {
//           setTypedText(text.slice(0, i));
//           i++;
//         } else {
//           clearInterval(interval);
//         }
//       }, delay);

//       // Clean up the interval on component unmount
//       return () => clearInterval(interval);
//     };

//     type(spanText[currentSpanIndex]);

//     // Move to the next span text after typing completes
//     const timeout = setTimeout(() => {
//       setCurrentSpanIndex((prevIndex) => (prevIndex + 1) % spanText.length);
//     }, (motto.length + spanText[currentSpanIndex].length + 1) * 30);

//     // Clean up the timeout on component unmount
//     return () => clearTimeout(timeout);
//   }, [currentSpanIndex]);

//   // Toggle cursor visibility every 500 milliseconds
//   useEffect(() => {
//     const cursorInterval = setInterval(() => {
//       setShowCursor((prev) => !prev);
//     }, 500);

//     return () => clearInterval(cursorInterval);
//   }, []);

//   return (
//     <main id='home'>
//       <header className={isSticky ? 'sticky' : ''}>
//         <div>
//           <img src="/we-auto-logo.png" alt="" width={230} height={120} />
//         </div>

//         <div id='header-elements'>
//           <a href="#home">HOME</a>
//           <a href="#about">ABOUT</a>
//           <a href="#services">SERVICES</a>
//           <a href="#contact-us">CONTACT</a>
//         </div>
//         <div>
//           <button>GET STARTED</button>
//         </div>
//       </header>
//       <section className='overlay'>
//         <h2 className='motto'>
//           {motto} 
//           <span style={{ color: 'white' }}>{typedText}</span>
//           {showCursor && <span style={{ color: 'white' }}>|</span>} {/* Cursor */}
//         </h2>
//       </section>
//       <section className='button-overlay'> 
//         <button>DISCOVER NOW</button>
//       </section>
//     </main>
//   );
// }

// export default Home;





import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [currentSpanIndex, setCurrentSpanIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true); // State to control cursor visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility
  const spanText = ['Automotive AUTOSAR', 'Outsourcing', 'Recruitment'];
  const motto = "Driving Innovation, Shaping the Future of Automotive Technology with ";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const type = (text) => {
      const delay = 100; // Typing speed in milliseconds
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setTypedText(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, delay);

      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    };

    type(spanText[currentSpanIndex]);

    // Move to the next span text after typing completes
    const timeout = setTimeout(() => {
      setCurrentSpanIndex((prevIndex) => (prevIndex + 1) % spanText.length);
    }, (motto.length + spanText[currentSpanIndex].length + 1) * 30);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [currentSpanIndex]);

  // Toggle cursor visibility every 500 milliseconds
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main id='home'>
      <header className={isSticky ? 'sticky' : ''}>
        <div>
          <img id='logo' src="/we-auto-logo.png" alt="" width={230} height={120} />
        </div>
        
        <div id='header-elements' className={isMenuOpen ? 'open' : ''}>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#contact-us">CONTACT</a>
        </div>
        
        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        </div>
        
        <div className='get-started'>
          <button onClick={() => window.location.href = '#contact-us'}>GET STARTED</button>
        </div>
      </header>
      
      <section className='overlay'>
        <h2 className='motto'>
          {motto} 
          <span style={{ color: 'white' }}>{typedText}</span>
          {showCursor && <span style={{ color: 'white' }}>|</span>} {/* Cursor */}
        </h2>
      </section>
      
      <section className='button-overlay'> 
        <button onClick={() => window.location.href = '#contact-us'}>DISCOVER NOW</button>
      </section>
    </main>
  );
}

export default Home;
