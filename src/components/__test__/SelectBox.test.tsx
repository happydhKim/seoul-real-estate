import { screen, render } from '@testing-library/react';
import SelectBox from '../SelectBox';

describe('SelectBox', () => {
  function renderSelectBox() {
    return render(<SelectBox />);
  }

  it('SelectBox 및 arrow icon 이 렌더링 된다.', () => {
    renderSelectBox();
    const testIdArray = [
      'seletbox',
      'KeyboardArrowDownIcon',
    ];

    testIdArray.forEach((testId) => {
      const dom = screen.getByTestId(testId);

      expect(dom);
    });
  });
});
