import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.features': 'Features',
      'nav.pricing': 'Pricing',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.demo': 'Live Demo',
      
      // Hero Section
      'hero.title': 'Automate Your Business Communications at Scale',
      'hero.subtitle': 'MessageFlow Pro streamlines multi-channel messaging with AI-powered automation, helping businesses increase engagement by 40% while reducing response time by 75%.',
      'hero.cta.primary': 'Start Free Trial',
      'hero.cta.secondary': 'Watch Demo',
      'hero.trust': 'Trusted by 2,000+ businesses worldwide',
      
      // Features Section
      'features.title': 'Powerful Features for Modern Communication',
      'features.subtitle': 'Everything you need to deliver exceptional customer experiences across all channels',
      'feature.whatsapp.title': 'WhatsApp Business API',
      'feature.whatsapp.desc': 'Seamlessly integrate WhatsApp Business API with advanced message templates and automation workflows.',
      'feature.orchestration.title': 'Multi-Channel Orchestration',
      'feature.orchestration.desc': 'Manage conversations across WhatsApp, SMS, email, and chat from a unified dashboard.',
      'feature.workflow.title': 'Drag & Drop Workflow Builder',
      'feature.workflow.desc': 'Create complex automation flows with our intuitive visual workflow builder.',
      'feature.analytics.title': 'Real-time Analytics',
      'feature.analytics.desc': 'Track performance metrics and optimize your messaging strategy with detailed reports.',
      'feature.contacts.title': 'Smart Contact Management',
      'feature.contacts.desc': 'Segment and target your audience with advanced contact management and segmentation.',
      'feature.templates.title': 'Template Management',
      'feature.templates.desc': 'Create, manage, and optimize message templates for maximum engagement.',
      
      // Demo Section
      'demo.title': 'Interactive Dashboard Demo',
      'demo.subtitle': 'Experience MessageFlow Pro in action with our live interactive demo',
      'demo.orchestration.title': 'Message Orchestration',
      'demo.orchestration.subtitle': 'Visual workflow management',
      'demo.analytics.title': 'Analytics Dashboard',
      'demo.analytics.subtitle': 'Real-time performance metrics',
      'demo.contacts.title': 'Contact Management',
      'demo.contacts.subtitle': 'Advanced segmentation tools',
      'demo.templates.title': 'Template Builder',
      'demo.templates.subtitle': 'Create engaging templates',
      
      // Pricing
      'pricing.title': 'Simple, Transparent Pricing',
      'pricing.subtitle': 'Choose the plan that fits your business needs',
      'pricing.starter.name': 'Starter',
      'pricing.starter.price': '$29',
      'pricing.starter.period': '/month',

      'pricing.professional.name': 'Professional',
      'pricing.professional.price': '$99',
      'pricing.professional.period': '/month',

      'pricing.enterprise.name': 'Enterprise',
      'pricing.enterprise.price': 'Custom',
      'pricing.enterprise.period': '',

      'pricing.cta': 'Start Free Trial',
      
      // Testimonials
      'testimonials.title': 'What Our Customers Say',
      'testimonials.subtitle': 'Join thousands of businesses that trust MessageFlow Pro',
      
      // Footer
      'footer.description': 'MessageFlow Pro - Streamline your business communications with AI-powered automation.',
      'footer.product': 'Product',
      'footer.company': 'Company',
      'footer.support': 'Support',
      'footer.legal': 'Legal',
      'footer.copyright': '© 2024 MessageFlow Pro. All rights reserved.'
    }
  },
  es: {
    translation: {
      // Navigation
      'nav.home': 'Inicio',
      'nav.features': 'Características',
      'nav.pricing': 'Precios',
      'nav.about': 'Acerca de',
      'nav.contact': 'Contacto',
      'nav.demo': 'Demo en Vivo',
      
      // Hero Section
      'hero.title': 'Automatiza tus Comunicaciones Empresariales a Gran Escala',
      'hero.subtitle': 'MessageFlow Pro optimiza la mensajería multi-canal con automatización impulsada por IA, ayudando a las empresas a aumentar el engagement en 40% mientras reducen el tiempo de respuesta en 75%.',
      'hero.cta.primary': 'Comenzar Prueba Gratuita',
      'hero.cta.secondary': 'Ver Demo',
      'hero.trust': 'Confiado por más de 2,000 empresas en todo el mundo',
      
      // Features Section
      'features.title': 'Características Poderosas para la Comunicación Moderna',
      'features.subtitle': 'Todo lo que necesitas para ofrecer experiencias excepcionales de clientes en todos los canales',
      'feature.whatsapp.title': 'API de WhatsApp Business',
      'feature.whatsapp.desc': 'Integra perfectamente la API de WhatsApp Business con plantillas de mensaje avanzadas y flujos de trabajo de automatización.',
      'feature.orchestration.title': 'Orquestación Multi-Canal',
      'feature.orchestration.desc': 'Gestiona conversaciones en WhatsApp, SMS, email y chat desde un panel unificado.',
      'feature.workflow.title': 'Constructor de Flujos de Trabajo',
      'feature.workflow.desc': 'Crea flujos de automatización complejos con nuestro constructor visual intuitivo.',
      'feature.analytics.title': 'Análisis en Tiempo Real',
      'feature.analytics.desc': 'Rastrea métricas de rendimiento y optimiza tu estrategia de mensajería con informes detallados.',
      'feature.contacts.title': 'Gestión Inteligente de Contactos',
      'feature.contacts.desc': 'Segmenta y dirige tu audiencia con gestión avanzada de contactos y segmentación.',
      'feature.templates.title': 'Gestión de Plantillas',
      'feature.templates.desc': 'Crea, gestiona y optimiza plantillas de mensaje para máximo engagement.',
      
      // Demo Section
      'demo.title': 'Demo Interactivo del Panel',
      'demo.subtitle': 'Experimenta MessageFlow Pro en acción con nuestro demo interactivo en vivo',
      'demo.orchestration.title': 'Orquestación de Mensajes',
      'demo.orchestration.subtitle': 'Gestión visual de flujos de trabajo',
      'demo.analytics.title': 'Panel de Análisis',
      'demo.analytics.subtitle': 'Métricas de rendimiento en tiempo real',
      'demo.contacts.title': 'Gestión de Contactos',
      'demo.contacts.subtitle': 'Herramientas avanzadas de segmentación',
      'demo.templates.title': 'Constructor de Plantillas',
      'demo.templates.subtitle': 'Crea plantillas atractivas',
      
      // Pricing
      'pricing.title': 'Precios Simples y Transparentes',
      'pricing.subtitle': 'Elige el plan que se adapte a las necesidades de tu negocio',
      'pricing.starter.name': 'Inicial',
      'pricing.starter.price': '$29',
      'pricing.starter.period': '/mes',

      'pricing.professional.name': 'Profesional',
      'pricing.professional.price': '$99',
      'pricing.professional.period': '/mes',

      'pricing.enterprise.name': 'Empresarial',
      'pricing.enterprise.price': 'Personalizado',
      'pricing.enterprise.period': '',

      'pricing.cta': 'Comenzar Prueba Gratuita',
      
      // Testimonials
      'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
      'testimonials.subtitle': 'Únete a miles de empresas que confían en MessageFlow Pro',
      
      // Footer
      'footer.description': 'MessageFlow Pro - Optimiza tus comunicaciones empresariales con automatización impulsada por IA.',
      'footer.product': 'Producto',
      'footer.company': 'Empresa',
      'footer.support': 'Soporte',
      'footer.legal': 'Legal',
      'footer.copyright': '© 2024 MessageFlow Pro. Todos los derechos reservados.'
    }
  },
  zh: {
    translation: {
      // Navigation
      'nav.home': '首页',
      'nav.features': '功能特性',
      'nav.pricing': '价格',
      'nav.about': '关于我们',
      'nav.contact': '联系我们',
      'nav.demo': '在线演示',
      
      // Hero Section
      'hero.title': '大规模自动化您的企业通信',
      'hero.subtitle': 'MessageFlow Pro 通过AI驱动的自动化优化多渠道消息传递，帮助企业将参与度提高40%，同时将响应时间减少75%。',
      'hero.cta.primary': '开始免费试用',
      'hero.cta.secondary': '观看演示',
      'hero.trust': '全球2000+企业信赖',
      
      // Features Section
      'features.title': '现代通信的强大功能',
      'features.subtitle': '在所有渠道上提供卓越客户体验所需的一切',
      'feature.whatsapp.title': 'WhatsApp商业API',
      'feature.whatsapp.desc': '与高级消息模板和自动化工作流程无缝集成WhatsApp商业API。',
      'feature.orchestration.title': '多渠道编排',
      'feature.orchestration.desc': '从统一仪表板管理WhatsApp、SMS、电子邮件和聊天中的对话。',
      'feature.workflow.title': '拖拽工作流构建器',
      'feature.workflow.desc': '通过我们直观的可视化工作流构建器创建复杂的自动化流程。',
      'feature.analytics.title': '实时分析',
      'feature.analytics.desc': '跟踪性能指标，通过详细报告优化您的消息策略。',
      'feature.contacts.title': '智能联系人管理',
      'feature.contacts.desc': '通过高级联系人管理和细分来细分和定位您的受众。',
      'feature.templates.title': '模板管理',
      'feature.templates.desc': '创建、管理和优化消息模板以获得最大参与度。',
      
      // Demo Section
      'demo.title': '交互式仪表板演示',
      'demo.subtitle': '通过我们的现场交互式演示体验MessageFlow Pro的功能',
      'demo.orchestration.title': '消息编排',
      'demo.orchestration.subtitle': '可视化工作流管理',
      'demo.analytics.title': '分析仪表板',
      'demo.analytics.subtitle': '实时性能指标',
      'demo.contacts.title': '联系人管理',
      'demo.contacts.subtitle': '高级细分工具',
      'demo.templates.title': '模板构建器',
      'demo.templates.subtitle': '创建吸引人的模板',
      
      // Pricing
      'pricing.title': '简单透明的价格',
      'pricing.subtitle': '选择适合您业务需求的计划',
      'pricing.starter.name': '入门版',
      'pricing.starter.price': '$29',
      'pricing.starter.period': '/月',

      'pricing.professional.name': '专业版',
      'pricing.professional.price': '$99',
      'pricing.professional.period': '/月',

      'pricing.enterprise.name': '企业版',
      'pricing.enterprise.price': '定制',
      'pricing.enterprise.period': '',

      'pricing.cta': '开始免费试用',
      
      // Testimonials
      'testimonials.title': '客户评价',
      'testimonials.subtitle': '加入信赖MessageFlow Pro的数千家企业',
      
      // Footer
      'footer.description': 'MessageFlow Pro - 通过AI驱动的自动化简化您的企业通信。',
      'footer.product': '产品',
      'footer.company': '公司',
      'footer.support': '支持',
      'footer.legal': '法律',
      'footer.copyright': '© 2024 MessageFlow Pro. 保留所有权利。'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;