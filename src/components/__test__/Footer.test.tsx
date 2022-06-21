import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  function renderFooter() {
    return render(<Footer />);
  }

  it('Footer가 렌더링 되고, "집값얼마? 2022" 라는 문구가 노출된다.', () => {
    const {container} = renderFooter();
    const texts = [
      '집값얼마? 2022',
    ];

    texts.forEach((text) => {
      expect(container).toHaveTextContent(text);
    });
  });
});
