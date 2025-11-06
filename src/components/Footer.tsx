import React from 'react';
import { Layout, Row, Col, Typography, Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { 
  MessageOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const AppFooter: React.FC = () => {
  const { t } = useTranslation();

  const productLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Demo', href: '#demo' },
    { name: 'API Documentation', href: '#' },
    { name: 'Integrations', href: '#' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#contact' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Training', href: '#' },
    { name: 'Status Page', href: '#' },
    { name: 'Contact Support', href: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Data Processing', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Compliance', href: '#' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <Row gutter={[32, 32]} className="py-12">
          {/* Company Info */}
          <Col xs={24} lg={8}>
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <MessageOutlined className="text-2xl text-blue-400" />
                <Title level={3} className="text-white m-0">
                  MessageFlow Pro
                </Title>
              </div>
              <Text className="text-slate-400 block mb-6">
                {t('footer.description')}
              </Text>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400">
                  <MailOutlined className="text-blue-400" />
                  <a 
                    href="mailto:contact@messageflowpro.com" 
                    className="hover:text-blue-400 transition-colors"
                  >
                    contact@messageflowpro.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <PhoneOutlined className="text-blue-400" />
                  <a 
                    href="tel:+15551234567" 
                    className="hover:text-blue-400 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <EnvironmentOutlined className="text-blue-400" />
                  <a 
                    href="https://maps.google.com/?q=San+Francisco,+CA" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    San Francisco, CA
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Product Links */}
          <Col xs={24} lg={4}>
            <Title level={5} className="text-white mb-4">
              {t('footer.product')}
            </Title>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Company Links */}
          <Col xs={24} lg={4}>
            <Title level={5} className="text-white mb-4">
              {t('footer.company')}
            </Title>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Support Links */}
          <Col xs={24} lg={4}>
            <Title level={5} className="text-white mb-4">
              {t('footer.support')}
            </Title>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Legal Links */}
          <Col xs={24} lg={4}>
            <Title level={5} className="text-white mb-4">
              {t('footer.legal')}
            </Title>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Divider className="border-slate-700 my-8" />

        {/* Newsletter Signup */}
        <Row gutter={[32, 32]} className="pb-8">
          <Col xs={24} lg={12}>
            <Title level={5} className="text-white mb-2">
              Stay Updated
            </Title>
            <Text className="text-slate-400 block mb-4">
              Get the latest updates on new features, integrations, and industry insights.
            </Text>
          </Col>
          <Col xs={24} lg={12}>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-700">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} lg={12}>
              <Text className="text-slate-400">
                {t('footer.copyright')}
              </Text>
            </Col>
            <Col xs={24} lg={12}>
              <div className="flex flex-wrap gap-6 text-slate-400">
                <Link className="hover:text-blue-400 transition-colors">
                  <i className="fab fa-twitter text-lg"></i>
                </Link>
                <Link className="hover:text-blue-400 transition-colors">
                  <i className="fab fa-linkedin text-lg"></i>
                </Link>
                <Link className="hover:text-blue-400 transition-colors">
                  <i className="fab fa-facebook text-lg"></i>
                </Link>
                <Link className="hover:text-blue-400 transition-colors">
                  <i className="fab fa-github text-lg"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </div>

        {/* Additional Trust Indicators */}
        <div className="py-6 border-t border-slate-800">
          <Row gutter={[32, 32]} justify="center" align="middle">
            <Col xs={12} md={4} className="text-center">
              <div className="text-slate-500 text-sm">GDPR Compliant</div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <div className="text-slate-500 text-sm">SOC 2 Certified</div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <div className="text-slate-500 text-sm">ISO 27001</div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <div className="text-slate-500 text-sm">99.9% Uptime</div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <div className="text-slate-500 text-sm">24/7 Support</div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <div className="text-slate-500 text-sm">Bank-Level Security</div>
            </Col>
          </Row>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;