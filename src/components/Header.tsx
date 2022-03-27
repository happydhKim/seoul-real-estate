import { memo } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { FC } from 'react';

const Header: FC = () => {
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
      <strong
        css={css`
          cursor: pointer;
          margin-left: 30px;
          padding: 16px 0;
          font-size: 20px;
        `}
      >
        Bee Hooks Guide 🐝
      </strong>
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
          <List>
            <Link to="/fullscreen">fullscreen</Link>
          </List>
          <List>
            <Link to="/countup">countup</Link>
          </List>
          <List>
            <Link to="/pageleave">pageleave</Link>
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
