import cn from 'classnames';
import type { ContainerProps } from './types';

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div
      {...rest}
      className={cn(
        "max-w-[calc(87.25rem_+_1rem)] mx-auto overflow-hidden z-20 relative",
        className,
      )}
    >
      {children}
    </div>
  );
}
