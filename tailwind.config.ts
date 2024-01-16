import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'dunhill': 'dunhill-script',
        'miller': 'miller-text',
      },
      colors: {
        'sfprimary-new1': {
          '50': '#f4f4f2',
          '100': '#e3e3de',
          '200': '#cac8be',
          '300': '#aba899',
          '400': '#938e7c',
          '500': '#847f6e',
          '600': '#716b5d',
          '700': '#5c554c',
          '800': '#504a43',
          '900': '#46413d',
          '950': '#2d2926',
      },
      'sfprimary-new2': {
        '50': '#f9f9f9',
        '100': '#f3f4f4',
        '200': '#eaeaea',
        '300': '#d8d9da',
        '400': '#c1c3c4',
        '500': '#a7a9ab',
        '600': '#97999b',
        '700': '#7e8083',
        '800': '#6a6c6d',
        '900': '#58595a',
        '950': '#393b3c',
    },
    
      'sfsecondary-new1': {
        '50': '#fff1f1',
        '100': '#ffe4e4',
        '200': '#ffccce',
        '300': '#fea3a7',
        '400': '#fd6f78',
        '500': '#f73c4d',
        '600': '#e41a36',
        '700': '#c8102e',
        '800': '#a1102c',
        '900': '#8a112c',
        '950': '#4d0413',
    },
    'sfprimary-new3': {
      '50': '#f5f6f6',
      '100': '#e5e7e8',
      '200': '#cdd1d4',
      '300': '#abb1b5',
      '400': '#81888f',
      '500': '#666d74',
      '600': '#575d63',
      '700': '#4a4f54',
      '800': '#424548',
      '900': '#35373a',
      '950': '#242628',
  },
  'sfsecondary-new2': {
    '50': '#fef8ee',
    '100': '#fcefd8',
    '200': '#f7dbb1',
    '300': '#f2c07f',
    '400': '#eca154',
    '500': '#e68129',
    '600': '#d8681e',
    '700': '#b3501b',
    '800': '#8f401d',
    '900': '#73361b',
    '950': '#3e1a0c',
},
'sfprimary-new4': {
  '50': '#f7f7f7',
  '100': '#eceded',
  '200': '#dedfdf',
  '300': '#bbbcbc',
  '400': '#acaeae',
  '500': '#989999',
  '600': '#878989',
  '700': '#7a7b7b',
  '800': '#666767',
  '900': '#545454',
  '950': '#353636',
},
'sfsecondary-new3': {
'50': '#faf8f2',
'100': '#f3efe1',
'200': '#e6dcc2',
'300': '#d6c59b',
'400': '#c6aa76',
'500': '#b89257',
'600': '#ab7f4b',
'700': '#8e6740',
'800': '#735339',
'900': '#5e4530',
'950': '#322318',
},
      }
    },
    // colors: {
      
    // }
  },
  plugins: [],
}
export default config
