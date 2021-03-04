import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
