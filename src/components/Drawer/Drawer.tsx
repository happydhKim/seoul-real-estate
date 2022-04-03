import { memo } from 'react';
import { css } from '@emotion/react';

import type { FC, ReactNode, CSSProperties } from 'react';

type DrawerProps = {
  open: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

const Drawer: FC<DrawerProps> = (props) => {
  const { open, onClose, children } = props;

  const overlayStyles: CSSProperties = {
    display: open ? 'block' : 'none',
  };

  const transitionStyles: CSSProperties = {
    transform: open ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)',
    transitionDuration: '500ms',
  };

  return (
    <>
      <div
        style={overlayStyles}
        onClick={onClose}
        css={css`
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 2;
        `}
      />
      <nav
        style={transitionStyles}
        css={css`
          z-index: 100;
          top: 0;
          left: 0;
          width: 300px;
          height: 100vh;
          position: fixed;
          background: white;
        `}
      >
        {children}
      </nav>
    </>
  );
};

export default memo(Drawer);
