import { Story } from '@storybook/react';
import clsx from 'clsx';

import classes from './Sidebar.module.scss';

export const SidebarDecorator = (collapsed: boolean) => (story: () => Story) =>
  (
    <div className={clsx(classes.Sidebar, { [classes.collapsed]: collapsed })}>
      {story()}
    </div>
  );
