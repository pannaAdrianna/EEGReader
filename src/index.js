// scroll bar
import React from 'react';
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from '@shopify/polaris';

import enTranslations from '@shopify/polaris/locales/en.json';


// ----------------------------------------------------------------------

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
