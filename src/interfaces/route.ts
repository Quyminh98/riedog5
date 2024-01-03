import type { ReactNode } from 'react';

export interface IChildRoute {
  path: string;
  element: JSX.Element;
  name: string;
  icon?: ReactNode;
}

export interface IRoute extends Pick<IChildRoute, 'name' | 'icon'> {
  path?: string;
  divide?: boolean;
  element?: JSX.Element;
  children?: IChildRoute[];
}
