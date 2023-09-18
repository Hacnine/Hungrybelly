/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      // fontFamily:{
      //   poppins:"'Poppins', sans-serif",
      //   roboto: "'Roboto', sans-serif"
      // }
    },

    backgroundImage: {
      'lg-banner-first': "url('/images/banner-first.svg')",
      'mobile-banner-first': "url('/images/banner-first-mobile.svg')",
      'md-banner': "url('/images/banner-first-md.svg')",
      'sm-banner': "url('/images/banner-first-sm.svg')",
      // 'md-banner-first': "url('/images/banner-first-md.svg')",
      // 'footer-texture': "url('/img/footer-texture.png')",
    },
    // screens:{
    //   xl:'1200px',
    //    md:'768px', sm:'576px',
    //    lg:'992px',
    // },
    container:{
      center:true,
      padding: '1rem'
    },
    // colors:{
    //   'primary': '#ff3009ff',
  
    //   'white': '#f3e8ff'
    // }
  },
  plugins: [ 
    require('@tailwindcss/forms'),
],
}

