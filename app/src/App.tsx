import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyle from './GlobalStyle';
import Homepage from './pages/Homepage';

const AppContainer = styled.div`
  position: relative;
  width: 920px;
  max-width: 100%;
  padding: 24px;
  transform: translateX(-50%);
  left: 50%;
`;

const App = () => {
  const queryClient = new QueryClient();

  return (
    <AppContainer>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </QueryClientProvider>
    </AppContainer>
  );
};

export default App;
