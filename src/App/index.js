import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard';

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar />
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppLayout>
    </AppProvider>
  );
}

export default App;
