import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      });
    }
  ],
  theme: {
    extend: {
      animation: {
        'rotate45': 'rotate45 1s ease-in-out infinite alternate'
      },
      keyframes: {
        rotate45: {
          'from': { transform: 'rotate(-2deg)' },
          'to': { transform: 'rotate(2deg)' }
        }
      },
      borderColor: {
        DEFAULT: 'var(--gray-400)'
      },
      spacing: {
        '0': '0', // 0px
        '1': '0.1429rem', // 2px
        '2': '0.2857rem', // 4px
        '3': '0.4286rem', // 6px
        '4': '0.5714rem', // 8px
        '5': '0.7143rem', // 10px
        '6': '0.8571rem', // 12px
        '7': '1rem', // 14px
        '8': '1.1429rem', // 16px
        '9': '1.2857rem', // 18px
        '10': '1.4286rem', // 20px
        '11': '1.5714rem', // 22px
        '12': '1.7143rem', // 24px
        '13': '1.8571rem', // 26px
        '14': '2rem', // 28px
        '15': '2.1429rem', // 30px
        '16': '2.2857rem', // 32px
        '17': '2.4286rem', // 34px
        '18': '2.5714rem', // 36px
        '19': '2.7143rem', // 38px
        '20': '2.8571rem', // 40px
        '21': '3rem', // 42px
        '22': '3.1429rem', // 44px
        '23': '3.2857rem', // 46px
        '24': '3.4286rem', // 48px
        '25': '3.5714rem', // 50px
        '26': '3.7143rem', // 52px
        '27': '3.8571rem', // 54px
        '28': '4rem', // 56px
        '32': '4.5714rem', // 64px
        '36': '5.1429rem', // 72px
        '40': '5.7143rem', // 80px
        '44': '6.2857rem', // 88px
        '48': '6.8571rem', // 96px
        '52': '7.4286rem', // 104px
        '56': '8rem', // 112px
        '60': '8.5714rem', // 120px
        '64': '9.1429rem', // 128px
        '72': '10.2857rem', // 144px
        '80': '11.4286rem', // 160px
        '96': '13.7143rem' // 192px
      },

      fontFamily: {
        dana: ['var(--font-dana)'],
        yekan: ['var(--font-yekan)'],
        gilroy: ['var(--font-gilroy)']
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
        '3xs': '1px',
        '2xs': '2px',
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '12px',
        '2xl': '14px',
        '3xl': '16px',
        '4xl': '18px',
        '5xl': '20px',
        '6xl': '24px'
      },
      lineHeight: {},
      fontSize: {
        ...defaultTheme.fontSize,
        '3xs': '0.7143rem', // 10px
        '2xs': '0.7857rem', // 11px
        'xs': '0.8571rem', // 12px
        'sm': '0.9286rem', // 13px
        'base': '1rem', // 14px
        'lg': '1.0714rem', // 15px
        'xl': '1.1429rem', // 16px
        '2xl': '1.2857rem', // 18px
        '3xl': '1.4286rem', // 20px
        '4xl': '1.5714rem', // 22px
        '5xl': '1.7143rem' // 24px
      },
      colors: {
        ...defaultTheme.colors,

        transparent: 'transparent',
        // all primary colors from UI
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)'
        },
        // all secondary colors from UI
        secondary: {
          50: 'var(--secondary-50)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)'
        },
        // all success colors from UI
        success: {
          50: 'var(--success-50)',
          100: 'var(--success-100)',
          200: 'var(--success-200)',
          300: 'var(--success-300)',
          400: 'var(--success-400)',
          500: 'var(--success-500)',
          600: 'var(--success-600)',
          700: 'var(--success-700)',
          800: 'var(--success-800)',
          900: 'var(--success-900)'
        },
        // all info colors from UI
        info: {
          50: 'var(--info-50)',
          100: 'var(--info-100)',
          200: 'var(--info-200)',
          300: 'var(--info-300)',
          400: 'var(--info-400)',
          500: 'var(--info-500)',
          600: 'var(--info-600)',
          700: 'var(--info-700)',
          800: 'var(--info-800)',
          900: 'var(--info-900)'
        },
        // all warning colors from UI
        warning: {
          50: 'var(--warning-50)',
          100: 'var(--warning-100)',
          200: 'var(--warning-200)',
          300: 'var(--warning-300)',
          400: 'var(--warning-400)',
          500: 'var(--warning-500)',
          600: 'var(--warning-600)',
          700: 'var(--warning-700)',
          800: 'var(--warning-800)',
          900: 'var(--warning-900)'
        },
        // all danger colors from UI
        danger: {
          50: 'var(--danger-50)',
          100: 'var(--danger-100)',
          200: 'var(--danger-200)',
          300: 'var(--danger-300)',
          400: 'var(--danger-400)',
          500: 'var(--danger-500)',
          600: 'var(--danger-600)',
          700: 'var(--danger-700)',
          800: 'var(--danger-800)',
          900: 'var(--danger-900)'
        },
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)'
        },
        brown: {
          50: 'var(--brown-50)',
          100: 'var(--brown-100)',
          200: 'var(--brown-200)',
          300: 'var(--brown-300)',
          400: 'var(--brown-400)',
          500: 'var(--brown-500)',
          600: 'var(--brown-600)',
          700: 'var(--brown-700)',
          800: 'var(--brown-800)',
          900: 'var(--brown-900)'
        },
        yellow: {
          50: 'var(--yellow-50)',
          100: 'var(--yellow-100)',
          200: 'var(--yellow-200)',
          300: 'var(--yellow-300)',
          400: 'var(--yellow-400)',
          500: 'var(--yellow-500)',
          600: 'var(--yellow-600)',
          700: 'var(--yellow-700)',
          800: 'var(--yellow-800)',
          900: 'var(--yellow-900)'
        },
        grayScale: {
          50: 'rgba(0, 0, 0, 0.05)',
          100: 'rgba(0, 0, 0, 0.1)',
          200: 'rgba(0, 0, 0, 0.2)',
          300: 'rgba(0, 0, 0, 0.3)',
          400: 'rgba(0, 0, 0, 0.4)',
          500: 'rgba(0, 0, 0, 0.5)',
          600: 'rgba(0, 0, 0, 0.6)',
          700: 'rgba(0, 0, 0, 0.7)',
          800: 'rgba(0, 0, 0, 0.8)',
          900: 'rgba(0, 0, 0, 0.9)'
        }
      }
    }
  }
};
export default config;
