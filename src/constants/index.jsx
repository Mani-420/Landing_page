import { AppWindowIcon } from 'lucide-react';
import { BotIcon } from 'lucide-react';
import { ServerCog } from 'lucide-react';
import { WorkflowIcon } from 'lucide-react';
import { ApertureIcon } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

import user1 from '../assets/profile_pictures/user1.jpg';
import user2 from '../assets/profile_pictures/user2.jpg';
import user3 from '../assets/profile_pictures/user3.jpg';
import user4 from '../assets/profile_pictures/user4.jpg';
import user5 from '../assets/profile_pictures/user5.jpg';
import user6 from '../assets/profile_pictures/user6.jpg';

export const navItems = [
  { label: 'Services', href: '#' },
  { label: 'Workflow', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Testimonials', href: '#' }
];

export const testimonials = [
  {
    user: 'John Doe',
    company: 'Nexora Systems',
    image: user1,
    text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.'
  },
  {
    user: 'Angelo Micheal',
    company: 'ByteBloom Solutions',
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life"
  },
  {
    user: 'David Johnson',
    company: 'FusionStack Labs',
    image: user3,
    text: 'Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.'
  },
  {
    user: 'Jane Smith',
    company: 'CodeNest Technologies',
    image: user4,
    text: 'Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!'
  },
  {
    user: 'Michael Wilson',
    company: 'AetherSoft Innovations',
    image: user5,
    text: 'I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.'
  },
  {
    user: 'Emily Davis',
    company: 'QuantumLeap Software',
    image: user6,
    text: 'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.'
  }
];

export const services = [
  {
    icon: <AppWindowIcon />,
    text: 'Custom Web Development',
    description:
      'Build scalable, full-stack applications tailored to client needs, from front-end to back-end.'
  },
  {
    icon: <BotIcon />,
    text: 'Business Process Automation',
    description:
      'Automate repetitive tasks, workflows, and processes to improve efficiency and reduce costs, saving time and resources.'
  },
  {
    icon: <ServerCog />,
    text: 'Website Maintenance and Support',
    description:
      'Ensure your websites stay updated, fast, and error-free with regular maintenance and support services.'
  },
  {
    icon: <WorkflowIcon />,
    text: 'API Development & Integration',
    description:
      'Create and integrate robust APIs to connect systems seamlessly, enabling smooth data exchange and functionality.'
  },
  {
    icon: <ApertureIcon />,
    text: 'AI & Machine Learning Solutions',
    description:
      'Build smart systems like predictive models, recommendation engines, and AI chatbots to enhance user experience and decision-making.'
  },
  {
    icon: <ShoppingBag />,
    text: 'E-commerce Development',
    description:
      'Develop secure, customized online stores with full payment and product management solutions.'
  }
];

export const checklistItems = [
  {
    title: 'Simplify Code Collaboration',
    description:
      'Manage, review, and merge code seamlessly across teams with powerful tools designed to boost collaboration.'
  },
  {
    title: 'Seamless Review and Improve Coding',
    description:
      'SoftTech ensures smooth and efficient code reviews, and error detection.'
  },
  {
    title: 'Leverage AI-Powered Assistance',
    description:
      'Our intelligent AI tools help you write, optimize, and debug code faster.'
  },
  {
    title: 'Sharing Your Projects Faster',
    description:
      'Share updates, new features, or complete projects with your team or clients in just minutes.'
  }
];

export const pricingOptions = [
  {
    title: 'Frontend Development',
    price: '$150',
    features: [
      'Advanced UI/UX Design',
      'Interactive Frontend Development',
      'Performance & Speed Boosting',
      'Regular Maintenance & Support'
    ]
  },
  {
    title: 'Backend Development',
    price: '$200',
    features: [
      'Database Design & Management',
      'Authentication & User Management',
      'Scalable Database Solutions',
      'Maintenance & Continuous Support'
    ]
  },
  {
    title: 'Full-Stack Development ',
    price: '$300',
    features: [
      'Frontend & Backend Development',
      'User Authentication Systems',
      'Advanced Security Measures',
      'Ongoing Support & Updates'
    ]
  }
];

export const resourcesLinks = [
  { href: '#', text: 'Getting Started' },
  { href: '#', text: 'Documentation' },
  { href: '#', text: 'Tutorials' },
  { href: '#', text: 'API Reference' },
  { href: '#', text: 'Community Forums' }
];

export const platformLinks = [
  { href: '#', text: 'Features' },
  { href: '#', text: 'Supported Devices' },
  { href: '#', text: 'System Requirements' },
  { href: '#', text: 'Downloads' },
  { href: '#', text: 'Release Notes' }
];

export const communityLinks = [
  { href: '#', text: 'Events' },
  { href: '#', text: 'Meetups' },
  { href: '#', text: 'Conferences' },
  { href: '#', text: 'Hackathons' },
  { href: '#', text: 'Jobs' }
];
