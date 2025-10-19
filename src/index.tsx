import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ToDolist } from './pages/ToDolist';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <ToDolist />
  </React.StrictMode>
);