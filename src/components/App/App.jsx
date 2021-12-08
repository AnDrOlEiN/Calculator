import React from 'react';
import Home from '../../pages/Home/Home';
import Header from '../Header/Header';
import Container from '../Container/Container';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants/router';
import Settings from '@/pages/Settings/Settings';

import { StyledApp } from './components';

const App = () => (
  <StyledApp>
    <Header />
    <main style={{ padding: '20px 0px' }}>
      <Container>
        <Switch>
          <Route exact path={HOME_PAGE_ROUTE} component={Home} />
          <Route path={SETTINGS_PAGE_ROUTE} component={Settings} />
          <Redirect to={HOME_PAGE_ROUTE} />
        </Switch>
      </Container>
    </main>
  </StyledApp>

)

export default App;
