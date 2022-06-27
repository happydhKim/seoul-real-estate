import { screen, render } from '@testing-library/react';
import TextArea from '../TextArea';

describe('TextArea', () => {
  function renderTextArea() {
    return render(
      <TextArea 
      />
    );
  }

  it('TextArea이 렌더링 된다.', () => {
    renderTextArea();
    const testIdArray = [
      'textarea',
    ];

    testIdArray.forEach((testId) => {
      const dom = screen.getByTestId(testId);

      expect(dom);
    });
  });
});
