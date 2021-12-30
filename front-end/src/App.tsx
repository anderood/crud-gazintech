import React from 'react';
import { BrowserRouter  } from 'react-router-dom';

import GlobalStyle from './styles/global';
import RoutesOut from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <RoutesOut />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
