import type { Config } from 'tailwindcss'

// Adding default tailwind colors
const colors = require('tailwindcss/colors')
// Removing deprecated color names
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  mode: 'jit',
}
export default config;