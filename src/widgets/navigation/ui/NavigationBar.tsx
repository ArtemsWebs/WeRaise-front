import { PropsWithChildren } from 'react';

export const NavigationBar = ({ children }): PropsWithChildren<any> => {
  return <nav className={'flex items-center gap-3'}>{children}</nav>;
};
