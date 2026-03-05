'use client';

import { createContext, useContext, useState } from 'react';

const SnowflakeContext = createContext();

export function SnowflakeProvider({ children }) {
  const [isActive, setIsActive] = useState(false);

  const toggleSnowflakes = () => setIsActive(prev => !prev);

  return (
    <SnowflakeContext.Provider value={{ isActive, toggleSnowflakes }}>
      {children}
    </SnowflakeContext.Provider>
  );
}

export function useSnowflakes() {
  const context = useContext(SnowflakeContext);
  if (!context) {
    throw new Error('useSnowflakes must be used within SnowflakeProvider');
  }
  return context;
}
