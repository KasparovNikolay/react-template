import React from 'react';

import { createRoot } from 'react-dom/client';

import { App } from './App';

const rootNode =
    document.getElementById('App') || document.createElement('div');
const appRoot = createRoot(rootNode);
appRoot.render(<App />);
