import React from 'react';
import { Row, Col, Button, Typography, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  PlayCircleOutlined, 
  ArrowRightOutlined,
  CheckCircleOutlined,
  StarOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title level={1} className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                {t('hero.title')}
              </Title>
              
              <Text className="text-lg lg:text-xl text-slate-600 mb-8 block leading-relaxed">
                {t('hero.subtitle')}
              </Text>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  type="primary" 
                  size="large"
                  className="bg-blue-600 hover:bg-blue-700 border-0 text-lg px-8 py-6 h-auto font-semibold"
                  icon={<ArrowRightOutlined />}
                  onClick={scrollToDemo}
                >
                  {t('hero.cta.primary')}
                </Button>
                
                <Button 
                  size="large"
                  className="border-2 border-slate-300 text-slate-700 text-lg px-8 py-6 h-auto font-semibold"
                  icon={<PlayCircleOutlined />}
                  onClick={scrollToFeatures}
                >
                  {t('hero.cta.secondary')}
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <CheckCircleOutlined className="text-green-500" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircleOutlined className="text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircleOutlined className="text-green-500" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card 
                className="border-0 shadow-2xl bg-white"
                bodyStyle={{ padding: 0 }}
              >
                <div className="p-6">
                  {/* Mock Dashboard Preview */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Text strong className="text-slate-700">MessageFlow Dashboard</Text>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">2,847</div>
                        <div className="text-sm text-slate-600">Messages Sent</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">94.2%</div>
                        <div className="text-sm text-slate-600">Delivery Rate</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">1,234</div>
                        <div className="text-sm text-slate-600">Active Users</div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg">
                      <Text className="text-slate-700 font-medium">Recent Activity</Text>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <Text className="text-sm text-slate-600">WhatsApp broadcast sent to 500 contacts</Text>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <Text className="text-sm text-slate-600">New automation workflow created</Text>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <Text className="text-sm text-slate-600">Campaign report generated</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <StarOutlined className="text-yellow-400" />
              <StarOutlined className="text-yellow-400" />
              <StarOutlined className="text-yellow-400" />
              <StarOutlined className="text-yellow-400" />
              <StarOutlined className="text-yellow-400" />
              <span className="text-sm font-medium">4.9/5 from 2,000+ reviews</span>
            </div>
            <Text className="text-slate-500">{t('hero.trust')}</Text>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;