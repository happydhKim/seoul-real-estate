import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import type { FC } from 'react';

type DrawerItem = {
  title: string;
  url: string;
};

type DrawerItemListProps = {
  list: DrawerItem[];
};

const DrawerItemList: FC<DrawerItemListProps> = (props) => {
  const navigate = useNavigate();

  const { list } = props;

  const handleClick = useCallback((url: string) => {
    navigate(url);
  }, []);

  return (
    <ul
      css={css`
        cursor: pointer;
        padding: 0;
        list-style-type: none;
      `}
    >
      {list.map((item, i) => (
        <li
          key={i}
          onClick={() => handleClick(item.url)}
          css={css`
            display: flex;
            height: 23px;
            line-height: 27px;
            padding: 10px;
          `}
        >
          <span>{item.title}</span>
          <ArrowForwardIosIcon
            css={css`
              margin-left: auto;
              margin-right: 5px;
            `}
          />
        </li>
      ))}
    </ul>
  );
};

export default memo(DrawerItemList);
