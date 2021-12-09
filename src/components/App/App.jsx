import React, { lazy, Suspense } from 'react';
import Header from '../Header/Header';
import Container from '../Container/Container';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants/router';
import Loading from '../Loading/Loading';

import { StyledApp } from './components';

const HomePage = lazy(() => import('@/pages/Home/Home'));
const SettingsPage = lazy(() => import('@/pages/Settings/Settings'));

const App = () => (
  <Suspense fallback={<Loading />}>
    <StyledApp>
      <Header />
      <main style={{ padding: '15px 0px' }}>
        <Container>
          <Switch>
            <Route exact path={HOME_PAGE_ROUTE} component={HomePage} />
            <Route exact path={SETTINGS_PAGE_ROUTE} component={SettingsPage} />
            <Redirect to={HOME_PAGE_ROUTE} />
          </Switch>
        </Container>
      </main>
    </StyledApp>
  </Suspense>

)

export default App;
