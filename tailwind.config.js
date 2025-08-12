/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
            hospitalBlue: '#1E3A8A',
            hospitalGreen: '#10B981',
            hospitalLight: '#E0F2FE',
          },
      },
    },
    plugins: [],
  };
  