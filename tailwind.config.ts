import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': {'max': '481px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '481px', 'max': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '768px', 'max': '992px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '992px', 'max': '1200px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1200px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      
    },
  },
  plugins: [],
}
export default config
