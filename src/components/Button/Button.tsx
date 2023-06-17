import { FC, PropsWithChildren } from 'react';
import './Button.scss';
const Button: FC<PropsWithChildren> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
