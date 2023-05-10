// import {} from './src/assets/background.jpg'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    screens: {
      xsm: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      trispace :['Trispace', 'sans-serif'],
      abril:['Abril Fatface','cursive'],
      poppins :['Poppins' , 'cursive'],
      comfortaa : ['Comfortaa' , 'sans-serif'],
      montserrat : ['Montserrat', 'sans-serif']
    },
  
    extend: {
      // backgroundImage: {
      //   'coffee': "url('./src/assets/background.jpg')",
      //   // 'footer-texture': "url('/img/footer-texture.png')",
      // },
      spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
        ,
        boxShadow:{
          'neon': '0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 40px #2196f3'
        }
    },
    
    
  },
  plugins: [
      require('tw-elements/dist/plugin'),
      require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}