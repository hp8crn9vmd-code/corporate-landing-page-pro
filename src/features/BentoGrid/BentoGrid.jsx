import React from 'react';
import { motion } from 'framer-motion';

/**
* BentoGrid Container
* Uses CSS Grid with auto-fit columns for intrinsic responsiveness.
*/
export const BentoGrid = ({ children, gap = '1.5rem', className }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: gap,
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  return (
    <div style={gridStyle} className={className}>
      {children}
    </div>
  );
};

/**
* BentoItem Wrapper
* Allows individual items to span columns or rows based on their importance.
*/
export const BentoItem = ({
  children,
  colSpan = 1,
  rowSpan = 1,
  className
}) => {
  const itemStyle = {
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5}}
      style={itemStyle}
      className={`min-h-[200px] ${className}`}
    >
      {children}
    </motion.div>
  );
};
