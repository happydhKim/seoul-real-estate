import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

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
        list-style-type: none;
      `}
    >
      {list.map((item, i) => (
        <li key={i} onClick={() => handleClick(item.url)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default memo(DrawerItemList);
