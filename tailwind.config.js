/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,ts,js}',
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/views/**/*.vue'
    // './src/components/**/*.{js,vue,ts}',
  ],
  theme: {
    screens: {},

    backgroundColor: {
      'dark-gradient-background': 'linear-gradient(284deg, #0E181E 0%, #222C32 122.25%))',
      'block-background': '#354249',
      'block-headline-backgroud': '#182228',
      'card-background': '#232E34',
      'border-grey': '#7F919B',
      'border-red': '#A74141',
      'border-olive': '#2C747E',
      'border-black': '#182228',
      // BUTTON COLOR
      'color-button-main': 'var(--color-button-main)',
      'color-button-main-hover': 'var(--color-button-main-hover)',
      'color-button-main-active': 'var(--color-button-main-active)',
      'color-button-main-disabled': 'var(--color-button-main-disabled)',
      'color-button-nav': 'var(--color-button-nav)',
      'color-button-nav-hover': 'var(--color-button-nav-hover)',
      'color-button-nav-disabled': 'var(--color-button-nav-disabled)',
      'color-button-secondary': 'var(--color-button-secondary)',
      'color-button-secondary-hover': 'var(--color-button-secondary-hover)',
      'color-button-secondary-active': 'var(--color-button-secondary-active)',
      'color-button-secondary-disabled': 'var(--color-button-secondary-disabled)',
      'color-button-icon': 'var(--color-button-icon)',
      'color-button-icon-hover': 'var(--color-button-icon-hover)',
      'color-button-icon-active': 'var(--color-button-icon-active)',
      'color-button-icon-disabled': 'var(--color-button-icon-disabled)'
    },
    colors: {
      'base-white-main': '#FFFFFF',
      'base-brown-accent': '#A6876D',
      'base-grey-sub': '#7F919B',
      'base-black-accent': '#182228',
      // STATUSES
      'status-green': '#4AA741',
      'status-yellow': '#DCCD43',
      'status-red': '#A74141'
    },
    // ICONS
    fill: {
      'icon-white-main': '#FFFFFF',
      'icon-grey-hover': '7F919B',
      'icon-olive-active': '#2C747E',
      'icon-disabled': '#BDC3C7'
    },
    // BORDER RADIUS
    borderRadius: {
      DEFAULT: '4px'
    },
    // FONT STYLES
    fontFamily: {
      sans: ['"Roboto Condensed"', 'sans-serif'],
      'logo-font': ['"Alegreya Sans SC"', 'sans-serif']
    },
    fontSize: {
      mainTitleFontSize: '24px',
      titleFontSize: '20px',
      mainTextFontSize: '16px',
      descriptionTextFontSize: '12px',
      timeTextFontSize: '32px'
    },
    fontWeight: {
      mainTextFontWeight: '400',
      titleFontWeight: '500',
      timeTextFontWeight: '700'
    },
    lineHeight: {
      mainTitleLineHeight: '1.16667',
      titleLineHeight: '1.2',
      mainTextLineHeight: '1.25',
      descriptionTextLineHeight: '1.33333'
    },
    letterSpacing: {
      statusTextLetterSpacing: '0.8px'
    },
    // PADDING STYLES
    padding: {
      'department-block': '40px',
      'title-block': '24px',
      'main-block': '20px',
      'info-block': '16px',
      input: '12px',
      '8px': '8px',
      '9px': '9px',
      '10px': '10px',
      '14px': '14px',
      '16px': '16px',
      '20px': '20px',
      '2px': '2px'
    },
    extend: {
      extend: {}
    }
  },
  plugins: []
}
