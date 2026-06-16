import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  zh: {
    translation: {
      nav: {
        about: 'about',
        services: 'services',
        projects: 'projects',
        social: 'social',
        contact: 'contact'
      },
      hero: {
        greeting: 'Java Backend Developer',
        cta: '通过 QQ 邮箱联系',
        name: '刘翔 · Java 后端开发'
      },
      section: {
        about: 'About',
        services: 'Services',
        projects: 'Projects',
        social: 'Social',
        contact: 'Contact',
        credits: 'Credits'
      },
      services: {
        intro: '',
        inquire: '联系我 →',
        visit: '访问网站',
        outro: '期待 Java 后端开发相关机会 · 邮件直达 1335642863@qq.com',
        cta: '联系我'
      },
      project: {
        viewDetails: '查看详情',
        backToProjects: '← 返回项目列表',
        github: '查看源码',
        liveDemo: '在线 Demo',
        techStack: '技术栈',
        features: '核心特性',
        screenshotComingSoon: '截图待补充'
      },
      contact: {
        title: '联系我',
        desc: '如果我的经历与岗位要求匹配，欢迎通过邮箱、电话或微信联系我。我会认真准备每一次面试，也乐于进一步介绍项目经历、技术栈和学习方式。',
        button: '通过 QQ 邮箱联系',
        role: 'Java 后端开发工程师 · 湖南',
        dragHint: '试着拖动这张卡片'
      },
      credits: {
        title: '致谢',
        subtitle: 'Credits & Acknowledgments',
        intro: '这个网站基于开源前端生态构建，用于展示我的个人简历、求职信息和联系方式。',
        license: '所有列出的依赖都遵循各自的开源协议(多数为 MIT / Apache 2.0 / SIL OFL)。',
        backHome: '← 返回主页',
        specialThanksTitle: '特别感谢',
        specialThanksIntro: '感谢这些工具和开源项目帮助我更高效地完成个人主页建设。',
        categories: {
          foundations: '框架与构建',
          routing: '路由 与 国际化',
          animation: '动效与交互',
          webgl: '3D 与 WebGL',
          ui: '组件与样式',
          fonts: '字体'
        },
        thanks: {
          gpt: { name: 'GPT · OpenAI', role: 'AI assistant', note: '协助梳理页面结构、文案表达和前端实现。' },
          claude: { name: 'Claude · Anthropic', role: 'Claude Code', note: '协助完成部分组件和交互实现。' }
        }
      },
      dock: {
        lang: '切换语言',
        bg: '切换背景',
        top: '回到顶部'
      },
      footer: 'Java Backend Developer Resume'
    }
  },
  en: {
    translation: {
      nav: {
        about: 'about',
        services: 'services',
        projects: 'projects',
        social: 'social',
        contact: 'contact'
      },
      hero: {
        greeting: 'Java Backend Developer',
        cta: 'Contact via QQ Mail',
        name: 'Liu Xiang · Java Backend Developer'
      },
      section: {
        about: 'About',
        services: 'Services',
        projects: 'Projects',
        social: 'Social',
        contact: 'Contact',
        credits: 'Credits'
      },
      services: {
        intro: '',
        inquire: 'Contact me →',
        visit: 'Visit site',
        outro: 'Open to Java backend opportunities · 1335642863@qq.com',
        cta: 'Contact me'
      },
      project: {
        viewDetails: 'View Details',
        backToProjects: '← Back to all projects',
        github: 'View on GitHub',
        liveDemo: 'Live Demo',
        techStack: 'Tech Stack',
        features: 'Highlights',
        screenshotComingSoon: 'Screenshot coming soon'
      },
      contact: {
        title: 'Contact',
        desc: 'If my background matches your hiring needs, feel free to contact me by email, phone, or WeChat. I am ready to discuss my project experience, backend skills, and learning approach in more detail.',
        button: 'Contact via QQ Mail',
        role: 'Java Backend Developer Candidate · Hunan',
        dragHint: 'try dragging the card'
      },
      credits: {
        title: 'Credits',
        subtitle: 'Credits & Acknowledgments',
        intro: 'This resume site is built on the open-source frontend ecosystem to present my resume, job-search profile, and contact information.',
        license: 'All listed dependencies remain under their original open-source licenses (mostly MIT / Apache 2.0 / SIL OFL).',
        backHome: '← Back to home',
        specialThanksTitle: 'Special Thanks',
        specialThanksIntro: 'Thanks to these tools and open-source projects for helping me build this personal resume site more efficiently.',
        categories: {
          foundations: 'Foundations & Build',
          routing: 'Routing & i18n',
          animation: 'Animation & Interaction',
          webgl: '3D & WebGL',
          ui: 'Components & Styling',
          fonts: 'Typography'
        },
        thanks: {
          gpt: { name: 'GPT · OpenAI', role: 'AI assistant', note: 'Helped refine page structure, copywriting, and frontend implementation.' },
          claude: { name: 'Claude · Anthropic', role: 'Claude Code', note: 'Helped implement parts of the components and interactions.' }
        }
      },
      dock: {
        lang: 'Toggle language',
        bg: 'Switch background',
        top: 'Back to top'
      },
      footer: 'Java Backend Developer Resume'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['zh', 'en'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;

export const isLocale = (v: string): v is 'zh' | 'en' => v === 'zh' || v === 'en';
