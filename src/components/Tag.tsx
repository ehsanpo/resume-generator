import React from 'react';

interface TagProps {
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className="px-3 py-1 rounded-full bg-gray-100">
      {children}
    </span>
  );
};