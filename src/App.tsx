import React, { FC, StrictMode } from 'react';

import { router } from '@utils/router';
import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from './ErrorBoundary';
import 'regenerator-runtime/runtime.js';
import './styles.scss';

export const App: FC = () => {
  return (
    <StrictMode>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </StrictMode>
  );
};
