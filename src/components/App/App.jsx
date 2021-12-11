import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../Header/Header';
import Container from '../Container/Container';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants/router';
import Loading from '../Loading/Loading';
import { StyledApp, StyledMain } from './components';
import { useSelector } from 'react-redux';

const HomePage = lazy(() => import('@/pages/Home/Home'));
const SettingsPage = lazy(() => import('@/pages/Settings/Settings'));

const App = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header />
        <Suspense fallback={<Loading />}>
          <StyledMain>
            <Container>
              <Switch>
                <Route exact path={HOME_PAGE_ROUTE} component={HomePage} />
                <Route exact path={SETTINGS_PAGE_ROUTE} component={SettingsPage} />
                <Redirect to={HOME_PAGE_ROUTE} />
              </Switch>
            </Container>
          </StyledMain>
        </Suspense>
      </StyledApp>
    </ThemeProvider>
  )
};

export default App;
