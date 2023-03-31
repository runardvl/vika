module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(210, 69%, 60%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../images/bd-logo-dark-mode.png')",
        'logo-light-mode': "url('../images/bd-logo-light-mode.png')",
        'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}
