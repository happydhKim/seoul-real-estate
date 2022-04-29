import { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { Drawer, Header } from 'components';

import type { FC, ReactNode } from 'react';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prev) => !prev);
  }, []);

  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        height: auto;
      `}
    >
      <Header toggleDrawer={toggleDrawer} />
      <Drawer open={isDrawerOpen} onClose={toggleDrawer} />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
