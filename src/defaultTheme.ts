import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  // Colors
  bodyColor: '#f2f2f2',
  primaryColor: '#FFDE00',
  bodyTextColor: '#222',
  accentColor: '#3B4CCA',
  accentTextLightColor: '#fff',
  accentTextDarkColor: '#3B4CCA',
  dangerTextColor: '#FF0000',

  // Typography
  fontFamily: 'Roboto sans-serif',
  bodyText: '16px',
  bodyLineHeight: 1.75,
  h1FontSize: '3.052rem',
  h2FontSize: '2.441rem',
  h3FontSize: '1.953rem',
  h4FontSize: '1.563rem',
  h5FontSize: '1.25rem',

  // breakpoints
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export default defaultTheme;
