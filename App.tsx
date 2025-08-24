import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n/I18nContext';
import NavBar from './components/header/NavBar';
import SiteFooter from './components/footer/SiteFooter';
import HomePage from './pages/HomePage';
import JobDetailPage from './pages/JobDetailPage';

export default function App(): React.ReactNode {
  return (
    <I18nProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow max-w-7xl mx-auto py-6 px-4 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/jobs/:jobId" element={<JobDetailPage />} />
            </Routes>
          </main>
          <SiteFooter />
        </div>
      </HashRouter>
    </I18nProvider>
  );
}