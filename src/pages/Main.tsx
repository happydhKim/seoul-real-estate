import { Input, SelectBox } from 'components';
import type { FC } from 'react';

const Main: FC = () => {
  return (
    <>
      <Input />
      <Input />
      <SelectBox>
        <option id="o1">Opt 1</option>
        <option id="o2">Opt 2</option>
      </SelectBox>
      Main pagessss
    </>
  );
};

export default Main;
