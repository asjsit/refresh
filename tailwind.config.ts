import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        onest: 'var(--font-onest)',
        SpriteGraffiti: 'var(--font-sprite-graffiti)',
        SpriteGraffitiShadow: 'var(--font-sprite-graffiti-shadow)',
      },
    },
  },
  plugins: [],
};
export default config;
