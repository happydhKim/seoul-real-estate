import { render } from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  let history = createMemoryHistory();
  function renderHeader() {
    return render((
      <Router 
        location="/main"
        navigator={history}
      >
        <Header toggleDrawer={() => null}/>
      </Router>
    ));
  }

  it('Header가 렌더링 되고, "집값얼마" 라는 문구가 노출된다.', () => {
    const {container} = renderHeader();
    const texts = [
      '집값얼마',
    ];

    texts.forEach((text) => {
      expect(container).toHaveTextContent(text);
    });
  });
});
