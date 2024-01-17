import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      auretto: '#C68231',
      'auretto-red': '#85282F',
      'auretto-white': '#F9F2ED',
      'auretto-white2': '#f4e7dc',
      'auretto-dark-blue': '#27213A',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
      serif: ['Bitter', 'serif']
    },
  },
  plugins: [],
}
export default config
