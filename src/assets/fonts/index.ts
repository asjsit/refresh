import cn from 'classnames';
import localFont from 'next/font/local';
import { Onest } from 'next/font/google';

const onest = Onest({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-onest',
});

const SpriteGraffiti = localFont({
  src: [
    {
      path: './SpriteGraffiti/SpriteGraffiti-Regular.otf',
    },
  ],
  variable: '--font-sprite-graffiti',
});

const SpriteGraffitiShadow = localFont({
  src: [
    {
      path: './SpriteGraffiti/SpriteGraffiti-Shadow.otf',
    },
  ],
  variable: '--font-sprite-graffiti-shadow',
});

export const fontsVariable = cn(
  onest.variable,
  SpriteGraffiti.variable,
  SpriteGraffitiShadow.variable,
);
