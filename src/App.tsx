import normalize from 'emotion-normalize';
import { css, Global } from '@emotion/react';
import Routes from 'pages/Routes';
import 'styles/app.scss';

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          h1, h2, h3, h4, h5, h6 {
            font-size: 1em;
            font-weight: normal;
            margin: 0; /* or ‘0 0 1em’ if you’re so inclined */
          }
        `}
      />
      <Routes />
    </>
  );
};

export default App;
