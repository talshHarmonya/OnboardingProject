import React from 'react';
import { ProductsPage } from './productsPage/productsPage';
import { Route, Routes } from "react-router-dom"
import { AboutPage } from './aboutPage/aboutPage';
import "./App.scss"
import { Navigation } from './navigation/navigation';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../general/loginButton';

function App() {

  const { isLoading, isAuthenticated, error, user } = useAuth0();

  if (isLoading) {
    return null
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div className='app'>
        <Navigation username={user?.name}></Navigation>
        <main>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </main>
      </div>
    );
  } else {
    return <LoginButton></LoginButton>
  }
}

export default App;
