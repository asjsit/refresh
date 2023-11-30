import type { ChildProps } from '@/types';
import type { HTMLAttributes } from 'react';

interface Props extends ChildProps {}

export type ContainerProps = HTMLAttributes<HTMLDivElement> & Props;
