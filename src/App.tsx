import React, { useState } from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import { useTranslation } from 'react-i18next';
import './i18n';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentDemo, setCurrentDemo] = useState('orchestration');

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2563eb',
          colorText: '#1e293b',
          colorTextSecondary: '#64748b',
          borderRadius: 8,
          fontFamily: 'Inter, system-ui, sans-serif',
        },
        components: {
          Button: {
            borderRadius: 8,
          },
          Card: {
            borderRadius: 12,
          }
        }
      }}
    >
      <AntdApp>
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Hero />
            <Features />
            <Demo currentDemo={currentDemo} setCurrentDemo={setCurrentDemo} />
            <Pricing />
            <Testimonials />
          </main>
          <Footer />
        </div>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;