import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
const config: Config = {
 content: [
   './pages/**/*.{js,ts,jsx,tsx,mdx}',
   './components/**/*.{js,ts,jsx,tsx,mdx}',
   './app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
   extend: {
    fontFamily: {
      Letterpress: ['"OCR B Letterpress M W01 Regular"'],
      LouisRegular: ['"Louis Regular"']
      // Add more custom font families as needed
     },
     backgroundImage: {
       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
       'gradient-conic':
         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
     },
   },
 },
 plugins: [daisyui],
 daisyui: {
  themes: ["night", "forest", "synthwave", "cupcake"],
},
}
export default config