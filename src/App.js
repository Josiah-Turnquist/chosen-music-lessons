import { styled } from '@mui/system';
import './App.css';
import React, { useState, useEffect } from 'react';

// Data
import { Backdrop, Profile } from './data';

// Components
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

// MUI
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

// Theme
import theme from "./theme";
// import IconButton from '@mui/material/IconButton';

const transitionSX = {
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
  transitionDuration: '.15s',
}

function App({ theme }) {

  const [section, setSection] = useState('Tech'); 

  // Sections
  const changeSection = (s) => {
      console.log(section, s);
      setSection(s);
    }

  // Device Type
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  const mobile = 450;
  const tablet = 850;
  // const desktop = 1200;

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);


return (
  <div id="home-page" className='bannercontainer' > 
    <NavigationBar changeSection={changeSection}/>
    <div className="banner" >
      <Typography className="fade-in surface" variant="h1" style={{ color: theme.palette.primary.main, maxWidth: (width < mobile ? '80vw' : '60vw'), margin: (width < tablet ? '10vh 0 0 10vw' : '0 10vw') }}>
        Welcome to Chosen Music Lessons.
      </Typography>
      <Typography className="fade-in surface" variant="subtitle1" style={{ color: theme.palette.primary.main, maxWidth: (width < tablet ? '80vw' : '50vw'), margin: (width < mobile ? '2em 10vw 2em 10vw' : '2em 40vw 2em 10vw'), paddingRight: (width < mobile ? '0' : '10vw')}}>
        Experienced music educator offering personalized instruction in piano, guitar, and music theory.
      </Typography>
      <a href="mailto:chosenmusiclessons@gmail.com">
        <Button variant="contained" style={{ textTransform: 'none', fontSize: (width < mobile ? '18px' : '18px'), backgroundColor: theme.palette.primary.accent, color: 'white', maxWidth: (width < mobile ? '80vw' : '60vw'), margin: (width < tablet ? '0vh 0 0 10vw' : '0 10vw')  }} >Schedule Consultation</Button>
      </a>
    </div>

    <div id="about-me" className='about' style={{ backgroundColor: theme.palette.background}}>
      {width < tablet && <Typography variant="h2" style={{ color: theme.palette.primary.text, textAlign:  'left', margin: '1px 40px 1em 0px'}}>
        About Me
      </Typography>}

      <img src={Profile} alt="Moses Cho" className='profile'/>

      {width > tablet && <Typography variant="h2" style={{ color: theme.palette.primary.text, textAlign:  'left', margin: '1px 40px 20px 70px'}}>
        About Me
      </Typography>}

      <Typography variant="subtitle1" style={{ color: theme.palette.primary.text, textAlign: 'left', margin: (width < tablet ? '1rem 0px' : '1rem 70px'), maxWidth: (width < tablet ? '350px' : '400px')}}>
        Initially joining the church band out of necessity at 12 years old, it has now become a regular part of my life with over 15 years of experience in diverse settings.
      </Typography>

      <Typography variant="subtitle1" style={{ color: theme.palette.primary.text, textAlign: 'left', margin: (width < tablet ? '1rem 0px' : '1rem 70px'), maxWidth: (width < tablet ? '350px' : '400px')}}>
        Check out my other business in woodworking!
      </Typography>

      <a href="https://www.etsy.com/shop/ChosenCraftCo">
        <Button variant="contained" style={{ textTransform: 'none', fontSize: '18px', backgroundColor: theme.palette.backgroundNav, color: 'white', maxWidth: (width < mobile ? '80vw' : '60vw'), margin: (width < tablet ? '1rem 0 0 0px' : '1rem 0 0 70px') }} >Go to ChosenCraftCo</Button>
      </a>
    </div>

    <div id="services" className='services' style={{ backgroundColor: theme.palette.background2}}>
      <Typography variant="h2" style={{ width: '-webkit-fill-available', color: theme.palette.primary.text, textAlign:  'left', margin: '0em 0 2em'}}>
          Services
      </Typography>
      <div className='servicecard'>
        <Typography variant="h3" style={{ color: theme.palette.primary.text, textAlign:  'left', margin: '1em'}}>
          Piano
        </Typography>
        <Typography variant="subtitle2" style={{ color: theme.palette.primary.text, textAlign: 'left', margin: '1em', maxWidth: '89vw'}}>
          From basic music theory to leading worship
        </Typography>
      </div>
      <div className='servicecard'>
        <Typography variant="h3" style={{ color: theme.palette.primary.text, textAlign:  'left', margin: '1em'}}>
          Guitar
        </Typography>
        <Typography variant="subtitle2" style={{ color: theme.palette.primary.text, textAlign: 'left', margin: '1em', maxWidth: '89vw'}}>
          From basic music theory to leading worship
        </Typography>
      </div>
      <div className='servicecard'>
        <Typography variant="h3" style={{ color: theme.palette.primary.text, textAlign:  'left', margin: '1em'}}>
          Drums
        </Typography>
        <Typography variant="subtitle2" style={{ color: theme.palette.primary.text, textAlign: 'left', margin: '1em', maxWidth: '89vw'}}>
          From basic music theory to leading worship
        </Typography>
      </div>
    </div>

    <div id="contact" className='testimonials' style={{ backgroundColor: theme.palette.background}}>
      <Typography variant="h2" style={{ width: '-webkit-fill-available', color: theme.palette.primary.text, textAlign:  'left', margin: '0em 0 2em'}}>
        Testimonials
      </Typography>
      <div className='testimonialcard'>
        <Typography variant="quotes1" style={{ color: theme.palette.primary.text, textAlign: 'left', margin: '1em'}}>
          "As a complete beginner, I was nervous about starting piano. Moses made learning fun and approachable!"
        </Typography>
        <Typography variant="quotes2" style={{ color: theme.palette.primary.text, textAlign: 'left', margin: '1em', maxWidth: '89vw'}}>
          - Landon R.
        </Typography>
      </div>
      <div className='testimonialcard'>
        <Typography variant="quotes1" style={{ color: theme.palette.primary.text, textAlign: 'left', margin: '1em'}}>
          "Moses helped me go from a total beginner to playing in band on Sunday mornings. Dream come true."
        </Typography>
        <Typography variant="quotes2" style={{ color: theme.palette.primary.text, textAlign: 'left', margin: '1em', maxWidth: '89vw'}}>
          - Caleb A.
        </Typography>
      </div>
    </div>

    <Footer />
  </div>
);
}

export default App;
