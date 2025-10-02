
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, actions }) => {
  return (
    <div className={`bg-white dark:bg-card border dark:border-border rounded-lg shadow-sm ${className}`}>
      {(title || actions) && (
        <div className="flex items-center justify-between p-4 border-b dark:border-border">
          {title && <h3 className="text-lg font-semibold text-foreground">{title}</h3>}
          {actions && <div>{actions}</div>}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
