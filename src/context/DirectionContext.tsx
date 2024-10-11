import { createContext, ReactNode } from 'react';
import type { childrenDirectionType } from '@/components/Modal';

type DirectionProviderType<V extends childrenDirectionType = childrenDirectionType> = {
  childrenDirection: V
  children: ReactNode
  // cb: () => void
}

type contextType = {
  childrenDirection: childrenDirectionType
  // cb: () => void
}

export const ChildrenContext = createContext<childrenDirectionType | null>(null);

export const DirectionProvider = <V extends childrenDirectionType>({children, childrenDirection}: DirectionProviderType<V>) => {
  return (
    <ChildrenContext.Provider value={childrenDirection}>
      {children}
    </ChildrenContext.Provider>
  );
}