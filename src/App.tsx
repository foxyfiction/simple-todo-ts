import React, { FunctionComponent } from 'react';
import { Dashboard } from './components/Dashboard';
import { MainLayout } from './ui/MainLayout';
import { MainMenu } from './ui/MainMenu';
import { StoreProvider } from './store';

export const App: FunctionComponent<{}> = () => (
  <StoreProvider>
    <MainLayout menu={<MainMenu />}>
      <Dashboard />
    </MainLayout>
  </StoreProvider>
);
