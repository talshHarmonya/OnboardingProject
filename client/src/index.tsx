import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/layout/App';
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.scss';

ReactDOM.render(
  <Auth0Provider
    domain={"staging-harmonya.us.auth0.com"}
    clientId={"ycc8vUu8oxwxDcSS6RC5HPw5tyqXcFcX"}
    authorizationParams={{
      redirect_uri: window.location.origin
    }
  }>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </Auth0Provider>,
  document.getElementById('root') as HTMLElement
);