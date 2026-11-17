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

        // Deep Eggplant & Lavender Luxury Dark Theme (Palette adapted for Dark Mode)
        midnight: {
          DEFAULT: '#191621', // Deep eggplant canvas background
          subtle: '#221E2C',  // Subtle deep surface
          card: '#292532',    // Deep #292532 card surface
          elevated: '#363142',// Elevated lavender-dark surface
          border: '#484157',  // Soft lavender-tinted dark border
        },
        champagne: {
          DEFAULT: '#9C8DC1', // Main #9C8DC1 Wisteria Lavender
          hover: '#B2A5D8',   // Lighter lavender hover
          soft: '#D3D0DD',    // Soft #D3D0DD Lavender Mist
          glow: 'rgba(156, 141, 193, 0.40)',
        },
        darktext: {
          primary: '#F4F4F6',   // Neutral #F4F4F6 Primary Text
          secondary: '#D3D0DD', // Soft #D3D0DD Secondary Text
          muted: '#9E9AA8',     // Muted Lavender-Gray Text
        },
        darksage: {
          DEFAULT: '#B58BC0', // Accent #B58BC0 Lilac Orchid
          soft: 'rgba(181, 139, 192, 0.25)',
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
        'champagne-glow': '0 10px 25px rgba(156, 141, 193, 0.40)',
      }
    },
  },
  plugins: [],
}
