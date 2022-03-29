import { css } from '@emotion/react';
import { Header } from 'components';

import type { FC } from 'react';

const AppLayout: FC = ({ children }) => {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
      `}
    >
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
