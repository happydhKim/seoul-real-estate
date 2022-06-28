import { render } from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import Drawer from '../Drawer';

describe('Drawer', () => {
  let history = createMemoryHistory();
  
  function renderDrawer() {
    return render((
      <Router 
        location="/main"
        navigator={history}
      >
        <Drawer 
          open={true}
        />
      </Router>
    ));
  }

  it('Drawer가 렌더링 되고, 기본 텍스트 들이 렌더링 된다.', () => {
    const {container} = renderDrawer();
    const texts = [
      '첫 번째 링크',
      '두 번째 링크',
      '세 번째 링크',
    ];

    texts.forEach((text) => {
      expect(container).toHaveTextContent(text);
    });
  });
});
