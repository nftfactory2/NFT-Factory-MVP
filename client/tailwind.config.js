/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC72C',
        backgroundSideBar: '#130712',
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(135deg, #702D6C, #FFC72C)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        orbitron: ['var(--font-orbitron)'],
      },
    },
  },
  plugins: [],
};
