import React from "react";
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

// Data
import { links } from '../data';

// Icons
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

// Theme
import theme from "../theme";
import './Footer.css';


const iconSX = { // Annoying to get theme color into CSS so we're doing JS for this one.
    fontSize: 32,
    marginLeft: '-5px',
    marginRight: '17px',
    marginTop: '0.75rem',
    color: theme.palette.primary.white,
    "&:hover": {
      color: theme.palette.primary.whiter,
      filter: 'drop-shadow(-2px 4px 8px rgba(255, 255, 255, 0.10))',
    },
  };

const Container = styled('div')({
    width: '100vw',
    minHeight: '50vh',
    backgroundColor: theme.palette.backgroundNav,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '@media (max-width:700px)': {
        flexDirection: 'column',
    },
});

const Column1 = styled('div')({
    minWidth: '45vw',
    // minHeight: '50vh',
    backgroundColor: theme.palette.backgroundNav,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    // '@media (max-width:800px)': {
    //     backgroundColor: theme.palette.background2Nav, /*241818*/
    // },
});

const Column2 = styled('div')({
    minWidth: '45vw',
    // minHeight: '50vh',
    backgroundColor: "transparent",
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    '@media (max-width:800px)': {
        marginBottom: '40px',
    },
});

function Footer({ title, body1, body2, changeSection, Button }) {

    return (
        <div className="container">
            <div className="col1">
                <Typography variant="h3" style={{ color: theme.palette.primary.whiter, textAlign: (window.innerWidth < 500 ? 'center' : 'left'), textWrap: 'nowrap'}}>
                    LINKS
                </Typography>
                <a href="mailto:chosenmusiclessons@gmail.com" >
                    <Typography className='link' variant="subtitle2" style={{ color: theme.palette.primary.white, textAlign: (window.innerWidth < 500 ? 'center' : 'left'), textWrap: 'nowrap'}}>
                        Lesson Policy
                    </Typography>
                </a>
                <a href="mailto:chosenmusiclessons@gmail.com" >
                    <Typography className='link' variant="subtitle2" style={{ color: theme.palette.primary.white, textAlign: (window.innerWidth < 500 ? 'center' : 'left'), textWrap: 'nowrap'}}>
                        Refund Policy
                    </Typography>
                </a>
                <a href="https://sdgrove.org/" >
                    <Typography className='link' variant="subtitle2" style={{ color: theme.palette.primary.white, textAlign: (window.innerWidth < 500 ? 'center' : 'left'), textWrap: 'nowrap'}}>
                        My Church
                    </Typography>
                </a>
            </div>  
            <div className="col2">
                <Typography variant="h3" style={{ color: theme.palette.primary.whiter, textAlign: (window.innerWidth < 500 ? 'center' : 'left')}}>
                    SOCIALS
                </Typography>
                <a href={links.email} ><EmailIcon sx={iconSX} /></a>
                <a href={links.facebook} ><FacebookIcon sx={iconSX} /></a>
                <a href={links.instagram} ><InstagramIcon sx={iconSX} style={{ marginRight: 0 }}/></a>
            </div>
            <Typography variant="h2" style={{ width: '-webkit-fill-available', color: theme.palette.primary.white, textAlign: 'center', margin :'4rem 0 1rem 0', textWrap: 'nowrap'}}>
                CHOSEN MUSIC LESSONS
            </Typography>
            <Typography variant="subtitle3" style={{ width: '-webkit-fill-available', color: theme.palette.primary.white, textAlign: 'center', marginBottom: '1rem', textWrap: 'nowrap'}}>
                © 2023 Moses Cho Music. All rights reserved.
            </Typography>
        </div>
    );
}

export default Footer;
