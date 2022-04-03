import * as React from 'react';
import { css } from '@emotion/react';

type DrawerProps = {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = (props) => {
  const { open, onClose, children } = props;

  const overlayStyles: React.CSSProperties = {
    display: open ? 'block' : 'none',
  };

  const transitionStyles: React.CSSProperties = {
    transform: open ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)',
    transitionDuration: '500ms',
  };

  return (
    <div id={'drawer'} className="drawer" css={css``}>
      {open && (
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
      )}
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
    </div>
  );
};

export default Drawer;
