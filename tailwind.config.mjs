/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        crema: '#F5F0E8',
        tierra: '#C4956A',
        marron: '#3D2B1F',
        'blanco-roto': '#FAF8F4',
        oliva: '#7A8C5E',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'badge-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'wa-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.6)' },
          '70%': { boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
      },
      animation: {
        'badge-float': 'badge-float 3s ease-in-out infinite',
        'wa-pulse': 'wa-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
