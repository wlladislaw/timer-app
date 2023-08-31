import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { State } from '../redux/reducers/reducer';
import { useSelector } from 'react-redux';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
  const timerActive = useSelector((state: State) => state.timerId);
  const text = timerActive ? 'Stop timer' : 'Start timer';

  return <button {...props}>{children || text}</button>;
};
