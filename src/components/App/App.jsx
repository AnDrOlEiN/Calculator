import React from 'react';
import Home from '../../pages/Home/Home';
import Header from '../Header/Header';
import styled from 'styled-components';
import Container from '../Container/Container';

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => (
  <StyledApp>
    <Header />
    <main style={{ padding: '20px 0px' }}>
      <Container>
        {/* <Switch>
          <Route
            exact
            path={HOME_PAGE_ROUTE}
            component={Home}
          />
        </Switch> */}
        <Home /> {/* переместить в роутер */}
        {/* <AppRouter /> */}
      </Container>
    </main>
  </StyledApp>

)

export default App;
