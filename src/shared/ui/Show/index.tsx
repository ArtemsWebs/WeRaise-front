import { PropsWithChildren } from 'react';

export type ShowProps = PropsWithChildren<{
  when: boolean;
}>;

export const Show = ({ when, children }: ShowProps) => {
  if (when) {
    return <>{children}</>;
  }
  return null;
};

Show.displayName = 'Show';
