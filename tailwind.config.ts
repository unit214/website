import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-cyan': '#10AABF',
        'primary-red': '#F489A0',
        'primary-amber': '#F4EA78',
        'squer-dark-blue': '#2C3747',
      },
      fontSize: {
        main: ['42px', '55px'],
        'main-mobile': ['26px', '34px'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config
