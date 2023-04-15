import { Story } from '@storybook/react';
import clsx from 'clsx';

import classes from '../../../widgets/Sidebar/ui/Sidebar/Sidebar.module.scss';

export const SidebarDecorator = (collapsed: boolean) => (story: () => Story) =>
  (
    <div className={clsx(classes.Sidebar, { [classes.collapsed]: collapsed })}>
      {story()}
    </div>
  );
