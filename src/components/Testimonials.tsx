import React from 'react';
import { Row, Col, Card, Avatar, Typography, Rate } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  StarOutlined, 
  UserOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      avatar: 'SC',
      rating: 5,
      content: 'MessageFlow Pro transformed our customer communication strategy. We increased engagement by 45% and reduced response time by 60%. The automation features are incredible and the analytics help us make data-driven decisions.',
      metrics: {
        metric1: '45% increase in engagement',
        metric2: '60% faster response time',
        metric3: '$50K saved in operational costs'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'E-commerce Plus',
      avatar: 'MR',
      rating: 5,
      content: 'The multi-channel orchestration is a game-changer. We can now manage WhatsApp, SMS, and email campaigns from one dashboard. Our conversion rates have improved by 30% since implementing MessageFlow Pro.',
      metrics: {
        metric1: '30% higher conversion rates',
        metric2: '50% reduction in manual work',
        metric3: '2.5x ROI in first 3 months'
      }
    },
    {
      name: 'Emma Thompson',
      role: 'Customer Success Manager',
      company: 'Global Services Inc',
      avatar: 'ET',
      rating: 5,
      content: 'The template management system is brilliant. We\'ve created over 100 templates and A/B test them regularly. The performance insights help us optimize our messaging for better results every time.',
      metrics: {
        metric1: '100+ optimized templates',
        metric2: '85% delivery rate',
        metric3: '3x improvement in CTR'
      }
    }
  ];

  const stats = [
    { number: '2,000+', label: 'Happy Customers' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '50M+', label: 'Messages Sent' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title level={2} className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('testimonials.title')}
          </Title>
          <Text className="text-lg text-slate-600 max-w-2xl mx-auto block">
            {t('testimonials.subtitle')}
          </Text>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Row gutter={[32, 32]} justify="center">
            {stats.map((stat, index) => (
              <Col xs={12} md={6} key={index} className="text-center">
                <div className="p-6">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row gutter={[24, 24]}>
            {testimonials.map((testimonial, index) => (
              <Col xs={24} md={8} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    bodyStyle={{ padding: '32px 24px' }}
                  >
                    <div className="mb-6">
                      <Rate
                        disabled
                        defaultValue={testimonial.rating}
                        className="text-yellow-400 mb-4"
                      />
                      <Text className="text-slate-700 leading-relaxed block">
                        "{testimonial.content}"
                      </Text>
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar 
                        size={48} 
                        className="bg-blue-600 text-white font-semibold"
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-600">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-blue-600 font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-sm font-medium text-slate-700 mb-2">
                        Key Results:
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircleOutlined className="text-green-500 text-xs" />
                          <span>{testimonial.metrics.metric1}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircleOutlined className="text-green-500 text-xs" />
                          <span>{testimonial.metrics.metric2}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircleOutlined className="text-green-500 text-xs" />
                          <span>{testimonial.metrics.metric3}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="border-0 bg-white shadow-sm">
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} lg={8}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-1">SOC 2</div>
                  <div className="text-sm text-slate-600">Type II Certified</div>
                </div>
              </Col>
              <Col xs={24} lg={8}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-1">GDPR</div>
                  <div className="text-sm text-slate-600">Compliant</div>
                </div>
              </Col>
              <Col xs={24} lg={8}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-1">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime SLA</div>
                </div>
              </Col>
            </Row>
          </Card>
        </motion.div>

        {/* Customer Success CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <Title level={3} className="text-white mb-4">
              Ready to Transform Your Customer Communication?
            </Title>
            <Text className="text-blue-100 text-lg block mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that have already increased their engagement and revenue with MessageFlow Pro.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;