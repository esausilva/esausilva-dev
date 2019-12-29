import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '10px',
  bodyFontFamily: ['Montserrat', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
  bodyWeight: 300,
  headerFontFamily: ['Montserrat', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
  headerWeight: 500,
  baseLineHeight: 1.35,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['300', '500'],
    },
  ],
});

export default typography;
