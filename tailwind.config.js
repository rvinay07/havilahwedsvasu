/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Lavender Mist Luxury Theme (WedBuild Theme Palette)
        rose: {
          DEFAULT: '#9C8DC1', // Primary Colour / Main (Wisteria Lavender)
          light: '#F3F0F8',
          soft: '#E4DFEE',
          dark: '#8877B0',
          deep: '#73629E',
        },
        olive: {
          DEFAULT: '#B58BC0', // Secondary Colour / Accent (Lilac Orchid)
          light: '#F8F1F9',
          soft: '#ECD9EE',
          dark: '#A375AF',
          deep: '#8F5D9C',
        },
        pear: {
          DEFAULT: '#D3D0DD', // Soft (Muted Lavender Mist)
          light: '#F3F2F6',
          pill: '#E5E3EC',
          dark: '#B8B4C6',
        },
        cream: {
          DEFAULT: '#F4F4F6', // Neutral (Page Background)
          soft: '#FAF9FB',
          warm: '#F4F4F6',    // Page Background
        },
        plum: {
          DEFAULT: '#292532', // Deep / Heading Colour / Button Text
          soft: '#474154',
          muted: '#686278',
          dark: '#1D1924',
          midnight: '#131018',
        },

        // Midnight Champagne Luxury Dark Theme
        midnight: {
          DEFAULT: '#101820', // Main background
          subtle: '#151F28',  // Secondary background
          card: '#1B2732',    // Card background
          elevated: '#24313B',// Elevated surfaces
          border: '#34424C',  // Border
        },
        champagne: {
          DEFAULT: '#D6B878', // Champagne gold
          hover: '#E6CC91',   // Gold hover
          soft: '#F5EAD4',
          glow: 'rgba(214, 184, 120, 0.35)',
        },
        darktext: {
          primary: '#F1EBDD',   // Primary text
          secondary: '#C1C5C4', // Secondary text
          muted: '#A0AAA9',     // Muted text
        },
        darksage: {
          DEFAULT: '#A6B3A1', // Sage accent
          soft: 'rgba(166, 179, 161, 0.2)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        champagne: ['Champagne', '"Cormorant Garamond"', 'Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'wedding': '0 10px 30px rgba(41, 37, 50, 0.08)',
        'wedding-lg': '0 20px 50px rgba(41, 37, 50, 0.12)',
        'rose-glow': '0 10px 25px rgba(156, 141, 193, 0.40)',
        'olive-glow': '0 10px 25px rgba(181, 139, 192, 0.40)',
        'champagne-glow': '0 10px 25px rgba(214, 184, 120, 0.35)',
      }
    },
  },
  plugins: [],
}
