const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindUI = require('@tailwindcss/ui')

const sizing = {
  '1/10': '10%',
  '2/10': '20%',
  '3/10': '30%',
  '4/10': '40%',
  '5/10': '50%',
  '6/10': '60%',
  '7/10': '70%',
  '8/10': '80%',
  '9/10': '90%',
}

module.exports = {
  purge: {
    content: [
      './index.html',
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.svelte',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.vue',
      './src/**/*.md',
      './src/**/*.svx',
      './src/**/*.svexy',
    ],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) => {
        const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g)
        const matchedTokens = [];
        let match = regExp.exec(content)
        while (match) {
          if (match[0].startsWith('class:')) {
            matchedTokens.push(match[0].substring(6))
          } else {
            matchedTokens.push(match[0])
          }
          match = regExp.exec(content)
        }
        return matchedTokens
      },
    },
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    darkModeVariant: true,
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
  theme: {
    extend: {
      screens: {
        'xxl': {'min': '1480px'}
      },
      fontFamily: {
        'title': [
          'Oxygen',
          ...defaultTheme.fontFamily.sans,
        ],
        sans: [
          'Oxygen',
          ...defaultTheme.fontFamily.sans,
        ],
        roboto: [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          'Inconsolata',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      scale: {
        'invert': '-1',
      },
      spacing: {
        ...sizing,
      },
      borderRadius: {
        'xl': '1rem',
        'full': '10010px',
      },

      inset: {
        '-15': '-3.75rem',
        '2': '0.5rem',
        '1/2': '50%',
        '1/4': '20%',
        '2/5': '40%',
        ...sizing,
        'full': '100%',
      },
      zIndex: {
        '-10': '-10',
      },

      colors: {
        'leaders-yellow': {
          default: '#F9B717',
        },
        'leaders-sky': {
          default: '#008e92',
        },
        'leaders-blue': {
          default: '#275584',
        },
        'yes-blue': {
          50: '#F2F8FE',
          100: '#E6F1FC',
          200: '#C0DCF8',
          300: '#9AC7F4',
          400: '#4E9DEB',
          500: '#0273E3',
          600: '#0268CC',
          700: '#014588',
          800: '#013466',
          900: '#012344',
        },
        'yes-gray': {
          50: '#F7F7F7',
          100: '#EFEFEF',
          200: '#D7D7D7',
          300: '#BFBFBF',
          400: '#908F8F',
          500: '#605F5F',
          600: '#565656',
          700: '#3A3939',
          800: '#2B2B2B',
          900: '#1D1D1D',
        },
        'yes-orange': {
          50: '#FFF7F5',
          100: '#FFF0EC',
          200: '#FED8CF',
          300: '#FEC1B2',
          400: '#FD9379',
          500: '#FC643F',
          600: '#E35A39',
          700: '#973C26',
          800: '#712D1C',
          900: '#4C1E13',
        },

        'yefi-primary': {
          default: '#43CE98',
          100: '#ECFAF5',
          200: '#D0F3E5',
          300: '#B4EBD6',
          400: '#7BDDB7',
          500: '#43CE98',
          600: '#3CB989',
          700: '#287C5B',
          800: '#1E5D44',
          900: '#143E2E',
        },
        'yefi-secondary': {
          default: '#204341',
          100: '#90A1A0',
          200: '#829594',
          300: '#748A88',
          400: '#667E7C',
          500: '#587271',
          600: '#4A6665',
          700: '#3C5B59',
          800: '#2E4F4D',
          900: '#204341',
        },
        'yefi-blue': {
          default: '#5A6884',
          100: '#EFF0F3',
          200: '#D6D9E0',
          300: '#BDC3CE',
          400: '#8C95A9',
          500: '#5A6884',
          600: '#515E77',
          700: '#363E4F',
          800: '#292F3B',
          900: '#1B1F28',
        },
        'yefi-orange': {
          default: '#f7c381',
          100: '#FEF9F2',
          200: '#FDF0E0',
          300: '#FCE7CD',
          400: '#F9D5A7',
          500: '#F7C381',
          600: '#DEB074',
          700: '#94754D',
          800: '#6F583A',
          900: '#4A3B27',
        },

        'girle-primary': {
          default: '#275585',
          100: '#E9EEF3',
          200: '#C9D5E1',
          300: '#A9BBCE',
          400: '#6888AA',
          500: '#275585',
          600: '#234D78',
          700: '#173350',
          800: '#12263C',
          900: '#0C1A28',
        },
        'girle-secondary': {
          default: '#F9CA00',
          100: '#FEFAE6',
          200: '#FEF2BF',
          300: '#FDEA99',
          400: '#FBDA4D',
          500: '#F9CA00',
          600: '#E0B600',
          700: '#957900',
          800: '#705B00',
          900: '#4B3D00',
        }
      },
    },
  },
  variants: {
    cursor: ['responsive', 'disabled'],
    backgroundColor: ['dark', 'hover', 'disabled'],
    borderColor: ['dark', 'active', 'focus', 'disabled'],
    textColor: ['dark', 'hover', 'active', 'disabled'],
    opacity: ['dark', 'hover', 'active', 'focus', 'disabled'],
  },
  dark: 'class',
  plugins: [
    tailwindUI({}),
    function({ addVariant, e }) {
      const variants = [
        {
          name: 'focus-not-active',
          rule: 'focus:not(:active)',
        },
        {
          name: 'hover-not-focus',
          rule: 'hover:not(:focus)',
        },
        {
          name: 'not-first',
          css: 'not(:first-child)',
        },
        {
          name: 'not-last',
          css: 'not(:last-child)',
        },
      ]

      variants.forEach((variant) => {
        addVariant(variant.name, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `${variant.parent ? `${variant.parent} ` : ''}.${e(`${variant.name}${separator}${className}`)}${variant.rule ? `:${variant.rule}` : ''}`
          })
        })
      })
    },
  ]
}
