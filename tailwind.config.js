/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
        cursive: ['var(--font-gochi-hand)', 'cursive'],
        dseg7: ['var(--font-dseg7)', 'monospace']
      },
    },
  },
  plugins: [],
};
