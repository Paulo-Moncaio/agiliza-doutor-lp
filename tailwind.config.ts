import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        agiliza: {
          green: '#00D46F',
          'green-strong': '#2A7F56',
          cinza: '#E5E5E5',
          mostarda: '#D48D00',
          'azul-naval': '#1B1C34',
          roxo: '#472A54',
        },
      },
    },
  },
  plugins: [],
}
export default config
