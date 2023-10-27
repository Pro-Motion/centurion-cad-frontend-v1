/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
      'color-button-secondary-disabled': 'var(--color-button-secondary-disabled)'
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
      sans: ['"Roboto Condensed"', 'sans-serif']
    },
    fontSize: {
      mainTitle: '24px',
      title: '20px',
      mainText: '16px',
      descriptionText: '12px',
      timeText: '32px'
    },
    fontWeight: {
      mainText: '400',
      title: '500',
      timeText: '700'
    },
    lineHeight: {
      mainTitle: '1.16667',
      title: '1.2',
      mainText: '1.25',
      descriptionText: '1.33333'
    },
    letterSpacing: {
      statusText: '0.8px'
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
      '20px': '20px'
    },
    extend: {
      extend: {}
    }
  },
  plugins: []
}
