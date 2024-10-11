import { ChildrenContext } from '@/context/DirectionContext';
import { useContext } from 'react';

export const useDirectionContext = () => {
  const context = useContext(ChildrenContext);
  if (!context) {
    throw new Error('useDirectionContext must be used within a DirectionProvider');
  }
  return context;
};
