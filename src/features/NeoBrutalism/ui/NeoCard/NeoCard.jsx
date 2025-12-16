import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import '../../styles/neo-brutalism.css';

export const NeoCard = ({
  children,
  className,
  bgColor = 'var(--neo-bg)',
  interactive = true
}) => {
  return (
    <div
      className={twMerge(
        'neo-card p-6 w-full h-full flex flex-col justify-between',
        interactive ? 'cursor-pointer' : '',
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};
