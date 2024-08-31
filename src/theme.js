import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#D9D9D9',
      white: '#D9D9D9',
      whiter: '#F0EFEB',
      text: '#5C5852',
      overlay: '#18241A',
      accent: '#D04B00',
    },
    secondary: {
        main: '#DDFFED99',
    },
    experience: {
        box: '#CDDDFF0A'
    },
    backgroundNav: '#3C372F', // bg 0 - dark / navbar
    background: '#CDC8BC', // bg 1 - mid / about
    background2: '#D9D9D9', // bg 2 - light / services
  },
  typography: {
    logo: {
      color: '#F0EFEB',
      fontSize: '24px',
      '@media (max-width:640px)': {
          fontSize: '19px',
        },
    },
    navButtons: {
      color: '#F0EFEB',
      fontSize: '20px',
      '@media (max-width:640px)': {
          fontSize: '2.5rem',
        },
    },
    h1: { // Banner heading
      fontSize: '2.5rem',
      fontWeight: '500',
      textAlign: 'left',
      '@media (max-width:640px)': {
          fontSize: '1.5rem',
        },
    },
    h2: { // Section headings
      fontSize: '24px',
      fontFamily: 'Inter',
      color: '#5C5852',
      fontWeight: '500',
      '@media (max-width:640px)': {
          fontSize: '20px'
        },
    },
    h3: { // service headings
      fontSize: '20px',
      fontFamily: 'Inter',
      fontWeight: '500',
      '@media (max-width:640px)': {
          fontSize: '20px'
        },
    },
    subtitle1: { // banner body
      fontSize: '18px',
      lineHeight: '1.5rem',
      fontWeight: 500,
      color: '#5C5852',
      textAlign: 'left',
      '@media (max-width:640px)': {
        fontSize: '18px'
      },
    },
    subtitle2: { // section body
      fontSize: '18px',
      fontWeight: 500,
      // color: '#5C5852',
      textAlign: 'left',
      '@media (max-width:640px)': {
        fontSize: '18px'
      },
    },
    quotes1: {
      fontSize: '20px',
      fontFamily: 'Inter',
      fontStyle: 'italic',
      fontWeight: 400,
      '@media (max-width:640px)': {
          fontSize: '20px'
        },
    },
    quotes2: {
      fontSize: '20px',
      fontWeight: 500,
      opacity: 0.6,
      textAlign: 'left',
      '@media (max-width:640px)': {
        fontSize: '18px'
      },
    }
  },
  breakpoints: {
    values: { // 520-950  below is tablet
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 900,
      desktop: 950, // 1024
    //   desktop: 1200,
    },
  },
});

export default theme;