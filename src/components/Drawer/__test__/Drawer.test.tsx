import { fireEvent, render } from '@testing-library/react';
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

  it('링크를 클릭하면 해당 path로 이동이 된다.', async () => {
    const {getAllByText} = renderDrawer();

    const firstMenu = getAllByText('첫 번째 링크');
    const secondMenu = getAllByText('두 번째 링크');
    const thirdMenu = getAllByText('세 번째 링크');
    
    await fireEvent.click(firstMenu[0]);
    await expect(history.location.pathname).toBe('/first');

    await fireEvent.click(secondMenu[0]);
    await expect(history.location.pathname).toBe('/second');

    await fireEvent.click(thirdMenu[0]);
    await expect(history.location.pathname).toBe('/third');
  });
});
