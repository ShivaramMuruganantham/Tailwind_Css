/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes:{
        circle:{
          '0%'{ transform: 'translate(-150px,50px)' 'scale(0.4)' 'rotate(0deg)' 'z-[-1]' },
        '50%'{ transform: 'translate(150px,-50px) scale(0.4) rotate(180deg)' 'z-[-1]' },
        '50.01%'{ transform: 'translate(150px,-50px) scale(0.4) rotate(180deg)' 'z-[3]' },
        '100%'{ transform: 'translate(-150px,50px) scale(0.4) rotate(360deg)' 'z-[3]' },
        }
      }
      Animation:{
        circle: 'circle 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

