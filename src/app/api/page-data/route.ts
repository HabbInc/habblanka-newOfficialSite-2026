import { NextResponse } from 'next/server'

const avatarList = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList = [
  {
    image: '/images/home/brand/brand-icon-1.svg',
    darkImg: '/images/home/brand/brand-darkicon-1.svg',
    title: 'Adobe',
  },
  {
    image: '/images/home/brand/brand-icon-2.svg',
    darkImg: '/images/home/brand/brand-darkicon-2.svg',
    title: 'Figma',
  },
  {
    image: '/images/home/brand/brand-icon-3.svg',
    darkImg: '/images/home/brand/brand-darkicon-3.svg',
    title: 'Shopify',
  },
  {
    image: '/images/home/brand/brand-icon-4.svg',
    darkImg: '/images/home/brand/brand-darkicon-4.svg',
    title: 'Dribble',
  },
  {
    image: '/images/home/brand/brand-icon-5.png',
    darkImg: '/images/home/brand/brand-darkicon-5.png',
    title: 'Webflow',
  },
]

const innovationList = [
  {
    image: '/images/home/innovation/brand.svg',
    title: 'Custom Web\nApplications',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'Mobile App\nDevelopment',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'UI/UX\nEngineering',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'Cloud &\nInfrastructure',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'AI\nSolutions',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const onlinePresenceList = [
  {
    image: '/images/home/onlinePresence/online_img_1.jpg',
    title: 'FlowBank',
    tag: ['FinTech Platform', 'Cloud Infrastructure'],
    link: '#',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Academy.co',
    tag: ['EdTech SaaS', 'Full-Stack Development'],
    link: '#',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'Genome',
    tag: ['Healthcare System', 'AI Integration'],
    link: '#',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'Hotto',
    tag: ['Mobile Commerce', 'Real-time Analytics'],
    link: '#',
  },
]

const creativeMindList = [
  {
    image: '/images/home/creative/senth.png',
    name: 'Senthalan Vyravanathan',
    position: 'Software Engineer',
    linkedinLink: 'http://linkedin.com/in/senthvyra',
  },
  {
    image: '/images/home/creative/thenu.png',
    name: 'Thenujan Amirthanathan',
    position: 'Managing Director',
    linkedinLink: 'http://linkedin.com/in/thenujan-amirthanathan-52034a1b3',
  },
  {
    image: '/images/home/creative/thulaxan.png',
    name: 'Thulaxan Uthayakumar',
    position: 'Full Stack Developer',
    linkedinLink: 'http://linkedin.com/in/thulaxan',
  },
  {
    image: '/images/home/creative/andrew.png',
    name: 'Andrew Asher',
    position: 'Managing Director - UK Branch',
    linkedinLink: 'http://linkedin.com/in/andrew-asher',
  },
  {
    image: '/images/home/creative/sanje.png',
    name: 'Sanjeev Vijayaratnam',
    position: 'Human Resources Manager',
    linkedinLink: 'http://linkedin.com/in/sanjeevvijay',
  },{
    image: '/images/home/creative/thanu.png',
    name: 'Thanushan Vijayaratnam',
    position: 'DevOps Engineer - UK Branch',
    linkedinLink: 'http://linkedin.com/in/thanushanvijayaratnam',
  },
  {
    image: '/images/home/creative/thuve.png',
    name: 'Thuverakan Tharumakulasooriyan',
    position: 'Software Engineer',
    linkedinLink: 'https://www.linkedin.com/in/thuverakan10/',
  },
  {
    image: '/images/home/creative/niru.png',
    name: 'Niruthan Paranthaman',
    position: 'AI Software Engineer',
    linkedinLink: 'https://www.linkedin.com/in/niruthan-paranthaman/',
  },
  
  {
    image: '/images/home/creative/mithu.png',
    name: 'Mithunan Jeyamohan',
    position: 'Full-Stack & AI/ML Developer',
    linkedinLink: 'https://www.linkedin.com/in/mithunan-jeyamohan-26566328a/',
  },
  
  
  
  {
    image: '/images/home/creative/thiba.png',
    name: 'Thibakar Srisomaskanthan',
    position: 'AI/ML Engineer',
    linkedinLink: 'https://www.linkedin.com/in/thibakar-sri/',
  },
  {
    image: '/images/home/creative/pira.png',
    name: 'Pirakash Ravindran',
    position: 'UI/UX Designer',
    linkedinLink: 'https://www.linkedin.com/in/pirakash-ravindran-882a04315/',
  },
  {
    image: '/images/home/creative/abi.png',
    name: 'Abinaya Rajasekara',
    position: 'Software Engineer - UK Branch',
    linkedinLink: 'https://www.linkedin.com/in/abinaya-rajasekara-4905372a8/',
  },
  {
    image: '/images/home/creative/aji.png',
    name: 'Ajiththana Kalaiyarasan',
    position: 'Business Analyst',
    linkedinLink: 'https://www.linkedin.com/in/ak-agiththana/',
  },
  {
    image: '/images/home/creative/thiru.png',
    name: 'Thiruverakan Thirumal',
    position: 'AI/ML Engineer - UK Branch',
    linkedinLink: 'https://www.linkedin.com/in/thiruverakan-t-1877b52a8/',
  },
  {
    image: '/images/home/creative/kaja.png',
    name: 'Arunthavarajah Kajaraj',
    position: 'AI/ML Engineer - UK Branch',
    linkedinLink: 'https://www.linkedin.com/in/arunthavarajah-kajaraj/',
  },
  
  {
    image: '/images/home/creative/raj.png',
    name: 'Raj Puvan',
    position: 'Mentor',
    linkedinLink: 'http://linkedin.com/in/rajpuvan',
  },
]

const WebResultTagList = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Reliability',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Innovation',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Scalability',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList = [
  {
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Foundation',
    plan_descp: 'For startups needing core development support. Focused execution, predictable delivery',
    plan_price: 'Custom',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Bi-weekly Sprint Deliveries',
      'Mid-Senior Engineers',
      'Technical Architecture Planning',
      'Quality Assurance & Testing',
      'Weekly Progress Reviews',
      'Cloud Deployment Support',
    ],
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Enterprise',
    plan_descp: 'Accelerated delivery for MVPs, SaaS platforms and scalable systems',
    plan_price: 'Custom',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'Continuous Development & Deployment',
      'Senior Engineers & Architects',
      'AI/ML Integration Capabilities',
      'Full-Stack Development Team',
      'Daily Stand-ups & Reviews',
      'DevOps & Security Optimization',
    ],
  },
]

const faqList = [
  {
    faq_que: 'What software development services does HABB offer?',
    faq_ans:
      'HABB provides end-to-end software development including custom web applications, mobile apps (iOS/Android), cloud infrastructure, AI-driven solutions, UI/UX engineering, and cybersecurity implementation. We build scalable, production-ready systems tailored to your business needs.',
  },
  {
    faq_que: 'How long does a typical software project take?',
    faq_ans:
      'Project timelines vary based on scope and complexity. An MVP typically takes 8-12 weeks, while enterprise-scale applications may require 4-6 months or more. We work in agile sprints to deliver incremental value and maintain flexibility throughout development.',
  },
  {
    faq_que: 'How is pricing structured at HABB?',
    faq_ans:
      'We offer flexible engagement models including fixed-price projects, dedicated team arrangements, and time-and-materials contracts. Pricing is tailored to project scope, team composition, and delivery timeline. Contact us for a detailed proposal based on your requirements.',
  },
  {
    faq_que: 'Do you provide ongoing support after project delivery?',
    faq_ans:
      'Yes, we provide comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. We offer flexible maintenance packages to ensure your software remains secure, stable, and scalable as your business grows.',
  },
  {
    faq_que: 'What technologies and platforms does HABB work with?',
    faq_ans:
      'We work with modern technology stacks including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure, GCP), mobile frameworks (React Native, Flutter), and AI/ML tools. Our engineers select the optimal stack based on your project requirements and long-term scalability needs.',
  },
  {
    faq_que: 'How do you ensure software quality and security?',
    faq_ans:
      'Quality is built into our process through code reviews, automated testing, continuous integration, and security audits. We follow industry best practices for secure development, implement data protection measures, and conduct thorough QA testing before every release.',
  },
]

const achievementsList = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Technical Excellence',
    title:
      'Recognized for delivering mission-critical software systems with exceptional reliability and performance.',
    year: '2024',
    url: '#',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Innovation Leadership',
    title: 'Awarded for pioneering AI-driven solutions and scalable cloud architectures',
    year: '2023',
    url: '#',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'Client Success',
    title:
      'Honored for outstanding technical delivery, client satisfaction, and long-term partnership excellence.',
    year: '2025',
    url: '#',
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
