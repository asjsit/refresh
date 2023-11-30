import { SVGProps } from 'react';

export interface ChildProps {
  children: React.ReactNode;
}

export interface SvgProps extends SVGProps<SVGSVGElement> {}
