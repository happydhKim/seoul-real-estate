import { memo } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from './Button';

import type { FC } from 'react';

type HeaderProps = {
  toggleDrawer: () => void;
};

const Header: FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <header
      css={css`
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
      `}
    >
      <div>
        <Button
          onClick={toggleDrawer}
          css={css`
            width: 100px;
          `}
        >
          Drawer
        </Button>
        <strong
          css={css`
            cursor: pointer;
            margin-left: 30px;
            padding: 16px 0;
            font-size: 20px;
          `}
        >
          집값얼마?
        </strong>
      </div>
      <nav
        css={css`
          margin-right: 30px;
        `}
      >
        <ul
          css={css`
            list-style-type: none;
            display: flex;
          `}
        >
          <List>
            <Link to="/">main</Link>
          </List>
        </ul>
      </nav>
    </header>
  );
};

const List = styled('li')`
  width: 80px;
  cursor: pointer;
  a:link {
    color: red;
    text-decoration: none;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: blue;
  }
`;

export default memo(Header);
