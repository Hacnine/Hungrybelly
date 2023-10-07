/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  
    backgroundImage: {
      'lg-banner-first': "url('/src/assets/images/banner-first.svg')",
      'mobile-banner-first': "url('/src/assets/images/banner-first-mobile.svg')",
      'md-banner': "url('/src/assets/images/banner-first-md.svg')",
      'sm-banner': "url('/src/assets/images/banner-first-sm.svg')",
   
    },

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

