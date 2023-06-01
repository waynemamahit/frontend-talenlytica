import { ReactElement, memo } from 'react';

export interface AspectListProps {
  count: number;
  render: (i: number) => ReactElement;
}
export function AspectList({ count, render }: AspectListProps) {
  const aspectItems = [];
  for (let i = 1; i <= count; i++) {
    aspectItems.push(<span key={i}>{render(i)}</span>);
  }
  return <>{aspectItems}</>;
}

export const MemoAspectList = memo(AspectList);
