import { render } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  function renderButton() {
    return render(<Button>Test Button</Button>);
  }

  it('Button이 렌더링 되고, "Test Button" 라는 문구가 노출된다.', () => {
    const {container} = renderButton();
    const texts = [
      'Test Button',
    ];

    texts.forEach((text) => {
      expect(container).toHaveTextContent(text);
    });
  });
});
