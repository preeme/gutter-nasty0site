import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '12px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Sedgwick Ave',
      styles: ['400'],
    },
    {
      name: 'Merriweather',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Rock Salt',
      styles: ['400'],
    },
  ],
});

export default typography;
