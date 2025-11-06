import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Typography, Statistic, Progress, List, Badge } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  BranchesOutlined,
  LineChartOutlined,
  TeamOutlined,
  FileTextOutlined,
  SendOutlined,
  UserOutlined,
  MessageOutlined,
  MobileOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface DemoProps {
  currentDemo: string;
  setCurrentDemo: (demo: string) => void;
}

const Demo: React.FC<DemoProps> = ({ currentDemo, setCurrentDemo }) => {
  const { t } = useTranslation();
  const [isLive, setIsLive] = useState(true);
  const [messageCount, setMessageCount] = useState(2847);
  const [deliveryRate, setDeliveryRate] = useState(94.2);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageCount(prev => prev + Math.floor(Math.random() * 5));
      setDeliveryRate(prev => Math.min(100, prev + (Math.random() - 0.5) * 0.1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const demoTabs = [
    { key: 'orchestration', icon: <BranchesOutlined />, title: t('demo.orchestration.title'), subtitle: t('demo.orchestration.subtitle') },
    { key: 'analytics', icon: <LineChartOutlined />, title: t('demo.analytics.title'), subtitle: t('demo.analytics.subtitle') },
    { key: 'contacts', icon: <TeamOutlined />, title: t('demo.contacts.title'), subtitle: t('demo.contacts.subtitle') },
    { key: 'templates', icon: <FileTextOutlined />, title: t('demo.templates.title'), subtitle: t('demo.templates.subtitle') }
  ];

  const workflowData = [
    { id: 1, name: 'Welcome Series', status: 'active', messages: 1200, engagement: 78 },
    { id: 2, name: 'Abandoned Cart', status: 'paused', messages: 856, engagement: 45 },
    { id: 3, name: 'Product Launch', status: 'active', messages: 2340, engagement: 92 },
    { id: 4, name: 'Customer Support', status: 'active', messages: 567, engagement: 85 }
  ];

  const analyticsData = [
    { channel: 'WhatsApp', sent: 1240, delivered: 1180, opened: 890, clicked: 234 },
    { channel: 'SMS', sent: 856, delivered: 845, opened: 678, clicked: 145 },
    { channel: 'Email', sent: 751, delivered: 745, opened: 567, clicked: 89 }
  ];

  const contactSegments = [
    { name: 'VIP Customers', count: 234, color: '#10b981' },
    { name: 'Active Users', count: 1845, color: '#3b82f6' },
    { name: 'New Subscribers', count: 567, color: '#8b5cf6' },
    { name: 'Inactive Users', count: 123, color: '#f59e0b' }
  ];

  const templateData = [
    { name: 'Welcome Message', type: 'WhatsApp', performance: 94, status: 'active' },
    { name: 'Order Confirmation', type: 'SMS', performance: 87, status: 'active' },
    { name: 'Promotional Offer', type: 'Email', performance: 76, status: 'draft' },
    { name: 'Shipping Update', type: 'WhatsApp', performance: 91, status: 'active' }
  ];

  const renderOrchestrationDemo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <SendOutlined className="text-blue-600" />
            <Text className="font-medium">Live Messages</Text>
          </div>
          <div className="text-2xl font-bold text-blue-600">{messageCount}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <MobileOutlined className="text-green-600" />
            <Text className="font-medium">Delivery Rate</Text>
          </div>
          <div className="text-2xl font-bold text-green-600">{deliveryRate.toFixed(1)}%</div>
        </div>
      </div>
      
      <Card title="Active Workflows" className="border-0 shadow-sm">
        <List
          dataSource={workflowData}
          renderItem={(item) => (
            <List.Item>
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <Text className="font-medium">{item.name}</Text>
                  <Badge 
                    status={item.status === 'active' ? 'success' : 'default'} 
                    text={item.status}
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-500 mb-1">
                  <span>{item.messages} messages</span>
                  <span>{item.engagement}% engagement</span>
                </div>
                <Progress percent={item.engagement} size="small" showInfo={false} />
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );

  const renderAnalyticsDemo = () => (
    <div className="space-y-6">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">2,847</div>
            <div className="text-sm text-slate-600">Total Sent</div>
          </div>
        </Col>
        <Col span={8}>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">2,770</div>
            <div className="text-sm text-slate-600">Delivered</div>
          </div>
        </Col>
        <Col span={8}>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">2,135</div>
            <div className="text-sm text-slate-600">Opened</div>
          </div>
        </Col>
      </Row>

      <Card title="Channel Performance" className="border-0 shadow-sm">
        <div className="space-y-4">
          {analyticsData.map((channel, index) => (
            <div key={index} className="p-4 border border-slate-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <Text className="font-medium">{channel.channel}</Text>
                <div className="text-sm text-slate-500">
                  {((channel.clicked / channel.sent) * 100).toFixed(1)}% CTR
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 text-sm">
                <div>
                  <div className="text-slate-500">Sent</div>
                  <div className="font-semibold">{channel.sent}</div>
                </div>
                <div>
                  <div className="text-slate-500">Delivered</div>
                  <div className="font-semibold">{channel.delivered}</div>
                </div>
                <div>
                  <div className="text-slate-500">Opened</div>
                  <div className="font-semibold">{channel.opened}</div>
                </div>
                <div>
                  <div className="text-slate-500">Clicked</div>
                  <div className="font-semibold">{channel.clicked}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderContactsDemo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-indigo-50 rounded-lg">
          <div className="text-2xl font-bold text-indigo-600">2,769</div>
          <div className="text-sm text-slate-600">Total Contacts</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">1,845</div>
          <div className="text-sm text-slate-600">Active Users</div>
        </div>
      </div>

      <Card title="Contact Segments" className="border-0 shadow-sm">
        <div className="space-y-3">
          {contactSegments.map((segment, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: segment.color }}
                ></div>
                <Text className="font-medium">{segment.name}</Text>
              </div>
              <Text className="text-slate-600">{segment.count} contacts</Text>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderTemplatesDemo = () => (
    <div className="space-y-6">
      <div className="text-center p-4 bg-cyan-50 rounded-lg">
        <div className="text-2xl font-bold text-cyan-600">12</div>
        <div className="text-sm text-slate-600">Active Templates</div>
      </div>

      <Card title="Template Performance" className="border-0 shadow-sm">
        <List
          dataSource={templateData}
          renderItem={(template) => (
            <List.Item>
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <Text className="font-medium">{template.name}</Text>
                    <div className="text-sm text-slate-500">{template.type}</div>
                  </div>
                  <Badge 
                    status={template.status === 'active' ? 'success' : 'processing'} 
                    text={template.status}
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-500 mb-1">
                  <span>Performance</span>
                  <span>{template.performance}%</span>
                </div>
                <Progress percent={template.performance} size="small" showInfo={false} />
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );

  const renderCurrentDemo = () => {
    switch (currentDemo) {
      case 'orchestration': return renderOrchestrationDemo();
      case 'analytics': return renderAnalyticsDemo();
      case 'contacts': return renderContactsDemo();
      case 'templates': return renderTemplatesDemo();
      default: return renderOrchestrationDemo();
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title level={2} className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('demo.title')}
          </Title>
          <Text className="text-lg text-slate-600 max-w-2xl mx-auto block">
            {t('demo.subtitle')}
          </Text>
        </motion.div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card title="Demo Tabs" className="border-0 shadow-lg">
                <div className="space-y-2">
                  {demoTabs.map((tab) => (
                    <Button
                      key={tab.key}
                      type={currentDemo === tab.key ? 'primary' : 'default'}
                      className={`w-full justify-start text-left h-auto p-3 ${
                        currentDemo === tab.key ? 'bg-blue-600 border-0' : 'border-slate-200'
                      }`}
                      onClick={() => setCurrentDemo(tab.key)}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {tab.icon}
                          <Text className="font-medium text-white">
                            {tab.title}
                          </Text>
                        </div>
                        <Text className="text-xs text-slate-300">
                          {tab.subtitle}
                        </Text>
                      </div>
                    </Button>
                  ))}
                </div>

                <div className="mt-6 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <Text className="text-sm text-green-700 font-medium">Live Demo</Text>
                  </div>
                  <Text className="text-xs text-green-600">Real-time data simulation</Text>
                </div>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} lg={18}>
            <motion.div
              key={currentDemo}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-lg min-h-[500px]">
                {renderCurrentDemo()}
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Demo;