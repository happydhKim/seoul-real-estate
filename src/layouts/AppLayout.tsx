import { useState } from 'react';
import { css } from '@emotion/react';
import { Drawer, Header } from 'components';

import type { FC } from 'react';

const AppLayout: FC = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleLeft = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        height: auto;
      `}
    >
      <Header />
      <Drawer open={isDrawerOpen} onClose={toggleLeft} />
      <button onClick={toggleLeft}>Open Left</button>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
