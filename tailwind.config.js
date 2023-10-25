/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/views/**/*.vue'
    // './src/components/**/*.{js,vue,ts}',
  ],
  theme: {
    animations: {
      'effect-hover': '300ms cubic-bezier(.89,.91,0,.65)',
      'lamp-effect-hover': ''
    },
    backgroundColor: {
      'dark-gradient-background': 'linear-gradient(284deg, #0E181E 0%, #222C32 122.25%))',
      'block-background': '#354249',
      'block-headline-backgroud': '#182228',
      'card-background': '#232E34',
      'border-grey': '#7F919B',
      'border-red': '#A74141'
    },
    colors: {
      'base-white-main': '#FFFFFF',
      'base-brown-accent': '#A6876D',
      'base-grey-sub': '#7F919B',
      'base-black-accent': '#182228',
      // STATUSES
      'status-green': '#4AA741',
      'status-yellow': '#DCCD43',
      'status-red': '#A74141',
      // TEXTS
      'text-base-white-main': '#FFFFFF',
      'text-base-brown-accent': '#A6876D',
      'text-base-grey-sub': '#7F919B',
      'text-base-black-accent': '#182228',
      'text-status-green': '#4AA741',
      'text-status-yellow': '#DCCD43',
      'text-status-red': '#A74141',
      // GENERAL
      'dark-fill-bg_linear': 'linear-gradient(284deg, #0E181E 0%, #222C32 122.25%))',
      'dark-fill-bg_block': '#354249',
      'dark-fill-bg_block_headline': '#182228',
      'dark-fill-bg_card': '#232E34',
      // STOKE
      'dark-stoke-border_grey': '#7F919B',
      'dark-stoke-border_red': '#A74141',
      // BUTTONS - variant main-blue
      'btn-main-blue': {
        'btn-text': '#FFFFFF',
        // default
        'default-bg': '#2C747E',
        'default-border': '',
        // hover
        'hover-bg': '#18606A',
        'hover-border': '',
        // active
        'active-bg': '#182228',
        'active-border': '',
        // disabled
        'disabled-bg': '#A5B9BC',
        'disabled-border': ''
      },
      // BUTTONS - variant navigation dark
      'btn-nav-dark': {
        'btn-text': '#FFFFFF',
        // default
        'default-bg': '#182228',
        'default-border': '',
        // hover
        'hover-bg': '#091217',
        'hover-border': '',
        // active
        'active-bg': '#2C747E',
        'active-border': '',
        // disabled
        'disabled-bg': '#27353E',
        'disabled-border': ''
      },
      // BUTTONS - variant red
      'btn-main-red': {
        // default
        'default-bg': '',
        'default-text': '#FFFFFF',
        'default-border': '',
        // hover
        'hover-bg': '#932D2D',
        'hover-text': '#FFFFFF',
        'hover-border': '',
        // active
        'active-bg': '#182228',
        'active-text': '',
        'active-border': '',
        // disabled
        'disabled-bg': '#D1A9A6',
        'disabled-text': '',
        'disabled-border': ''
      },
      // BUTTONS - variant grey
      'btn-grey': {
        // default
        'default-bg': 'rgba(127, 145, 155, 0.60)',
        'default-text': '',
        'default-border': '',
        // hover
        'hover-bg': 'rgba(97, 115, 125, 0.60)',
        'hover-text': '',
        'hover-border': '',
        // active
        'active-bg': 'rgba(24, 34, 40, 0.60)',
        'active-text': '',
        'active-border': '',
        // disabled
        'disabled-bg': '#BDC3C7',
        'disabled-text': '',
        'disabled-border': ''
      }
    },
    // ICONS
    fill: {
      'icon-white-main': '#FFFFFF',
      'icon-grey-hover': '7F919B',
      'icon-olive-active': '#2C747E',
      'icon-disabled': '#BDC3C7'
    },
    // INPUT
    input: {
      // default
      'default-bg': '#2B383F',
      'default-border': '#182228',
      'default-placeholder': '#7F919B',
      // hover
      'hover-bg': '',
      'hover-border': '#354249',
      'hover-placeholder': '',
      // active
      'active-bg': '',
      'active-border': '#2C747E',
      'active-placeholder': '',
      // disabled
      'disabled-bg': '#354249',
      'disabled-border': '#2C747E',
      'disabled-placeholder': '#6B7D87',
      // error
      'error-bg': '#2B383F',
      'error-border': '#733B3B',
      'error-placeholder': ''
    },

    fontFamily: {},
    screens: {},
    extend: {}
  },
  plugins: []
}
