import { memo } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

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
      <div
        css={css`
          display: flex;
          margin-left: 5px;
          padding: 16px 0;
        `}
      >
        <DensitySmallIcon
          onClick={toggleDrawer}
          css={css`
            cursor: pointer;
            height: 20px;
          `}
        />
        <strong
          css={css`
            cursor: pointer;
            margin-left: 30px;
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
