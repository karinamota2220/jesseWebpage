// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        firacode: ['Fira Code', 'monospace'],
      },
      colors: {
        bg: '#F5F5F5',
        'bg-variant': '#2c2c6c',
        primary: '#A3D9A5', // Removed the extra space
        'primary-variant': 'rgba(216, 255, 77, 0.4)',
        light: '#88C9BF', // Removed the extra space
        white: '#2E2E2E',
      },
    },
  },
  plugins: [],
}
