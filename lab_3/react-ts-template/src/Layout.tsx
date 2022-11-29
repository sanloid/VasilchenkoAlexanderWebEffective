import React from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
import Footer from './components/Footer';
import Header from './components/Header';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Layout;
