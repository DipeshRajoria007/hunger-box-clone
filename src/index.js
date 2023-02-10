import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux'
import  store from "./Store/index"
// google client secret
// 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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <GoogleOAuthProvider clientId="863149326467-gtum0n180icfuaj78jb7re0m5gtqnutn.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);