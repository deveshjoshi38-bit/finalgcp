import { ServiceItem, WorkItem, Client, NavItem } from './types';
import { Film, Mic, Video, Layers, Users, Globe, Tv, MonitorPlay, Briefcase, Camera, Music, PenTool } from 'lucide-react';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
];

export const CONTACT_INFO = {
  phone: '+91 98999829363',
  email: 'girlchildproductions@gmail.com',
  location: 'New Delhi, India',
  socials: {
    instagram: 'https://www.instagram.com/girlchildproductions',
    linkedin: 'https://www.linkedin.com/in/charnamrit-sachdeva-3b216826/',
    whatsapp: 'https://wa.me/919899982936'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    category: 'Filmmaking & Production',
    items: ['Documentary Filmmaking', 'Digital Films', 'TVCs (Television Commercials)', 'Web Series', 'Short Films', 'Line Production'],
    icon: <Film className="w-6 h-6" />,
  },
  {
    category: 'Animation & Graphics',
    items: ['2D Animated Videos', '3D Animated Videos', 'Explanatory Videos', 'Motion Graphics', 'Visual Effects'],
    icon: <Layers className="w-6 h-6" />,
  },
  {
    category: 'Digital & Content',
    items: ['Content Curation', 'Website Content', 'Newsletters', 'Feature Content', 'Digital Marketing Content', 'Social Media Campaigns'],
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    category: 'Commercial & Brand',
    items: ['Product Shoots', 'Brand Films', 'Corporate Films', 'Launch Films'],
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    category: 'Audio & Media',
    items: ['Podcasts', 'Sound Design', 'Voiceovers'],
    icon: <Mic className="w-6 h-6" />,
  },
  {
    category: 'Management & Strategy',
    items: ['Artist Management', 'Line Production', 'Digital Marketing Strategy', 'Public Relations'],
    icon: <Users className="w-6 h-6" />,
  },
];

export const WORK_ITEMS: WorkItem[] = [
  // Drive Videos (Featured)
  {
    id: '12',
    title: 'Cargo Special Ops',
    category: 'Documentary',
    image: '/cargo.png',
    year: '2023',
    videoUrl: 'https://drive.google.com/file/d/1ghdRAoJItDQ0f1uc3ylmuXs-dMKxSYJD/view?usp=drive_link',
  },
  {
    id: '13',
    title: 'Sarvodaya Healthcare',
    category: 'Corporate Film',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop', // Placeholder: Medical
    year: '2023',
    videoUrl: 'https://drive.google.com/file/d/1GbtMr8pq9MKaw1BXU8urGXddkY33H31B/view?usp=drive_link',
  },
  // YouTube Videos
  {
    id: '1',
    title: 'Agewell Mom',
    category: 'Corporate Film',
    image: 'https://img.youtube.com/vi/J9AlfcFjRvM/maxresdefault.jpg',
    year: '2023',
    videoUrl: 'https://youtu.be/J9AlfcFjRvM',
  },
  {
    id: '2',
    title: 'Niva Bupa Health Insurance - India Karega Rise',
    category: 'TVC',
    image: 'https://img.youtube.com/vi/TOcW8x2NPko/maxresdefault.jpg',
    year: '2023',
    videoUrl: 'https://www.youtube.com/watch?v=TOcW8x2NPko',
  },
  {
    id: '3',
    title: 'NIIT Placement Pakki',
    category: 'TVC',
    image: 'https://img.youtube.com/vi/vLZ5BJGKrMo/maxresdefault.jpg',
    year: '2023',
    videoUrl: 'https://youtu.be/vLZ5BJGKrMo',
  },
  {
    id: '4',
    title: 'Agewell Doctor',
    category: 'Corporate Film',
    image: 'https://img.youtube.com/vi/gVFlojC25Z4/maxresdefault.jpg',
    year: '2023',
    videoUrl: 'https://youtu.be/gVFlojC25Z4',
  },
  {
    id: '5',
    title: 'Niva Bupa Smart Health+ Acute Care',
    category: 'TVC',
    image: 'https://img.youtube.com/vi/888lATirlKI/maxresdefault.jpg',
    year: '2023',
    videoUrl: 'https://youtu.be/888lATirlKI',
  },
  {
    id: '6',
    title: 'JK Paper Diwali',
    category: 'Corporate Film',
    image: 'https://img.youtube.com/vi/nhUgS4hyu6o/maxresdefault.jpg',
    year: '2023',
    videoUrl: 'https://youtu.be/nhUgS4hyu6o',
  },
  {
    id: '7',
    title: 'Agewell Family',
    category: 'Corporate Film',
    image: 'https://img.youtube.com/vi/Dy1AxnTGnQY/maxresdefault.jpg',
    year: '2023',
    videoUrl: 'https://youtu.be/Dy1AxnTGnQY',
  },
  {
    id: '8',
    title: 'Ajab Shaan - Salim Sulaiman',
    category: 'Music Video',
    image: 'https://img.youtube.com/vi/sLmde3GWLsI/maxresdefault.jpg',
    year: '2022',
    videoUrl: 'https://youtu.be/sLmde3GWLsI',
  },
  {
    id: '9',
    title: 'The Big Forkers’ Guide to Old Delhi’s Street Food',
    category: 'Documentary',
    image: 'https://img.youtube.com/vi/CuBsZuGxPQE/maxresdefault.jpg',
    year: '2023',
    videoUrl: 'https://www.youtube.com/watch?v=CuBsZuGxPQE',
  },
  {
    id: '10',
    title: 'Inside India’s Highest Earning Restaurant with Vir Sanghvi',
    category: 'Documentary',
    image: 'https://img.youtube.com/vi/E4cGPuph-0U/maxresdefault.jpg',
    year: '2023',
    videoUrl: 'https://www.youtube.com/watch?v=E4cGPuph-0U',
  },
  {
    id: '11',
    title: 'The Big Forkers’ Guide to Humayunpur’s Northeast Feast',
    category: 'Documentary',
    image: 'https://img.youtube.com/vi/XTUq3G5fyvE/maxresdefault.jpg',
    year: '2023',
    videoUrl: 'https://www.youtube.com/watch?v=XTUq3G5fyvE',
  },
];

export const CLIENT_LOGOS = [
  'Discovery', 'BBC', 'ITV', 'TLC', 'Channel 5', 'NDTV', 'NIIT',
  'Hero Cycles', 'Niva Bupa', 'Sarvodaya Hospital', 'Salim–Sulaiman',
  'JK Paper', 'Daily Mail', 'Telegraph', 'Marie Claire', 'Rekhta',
  'Screentripping Films', 'Glida', 'PBF', 'Captain Sales', 'Merchant Records',
  'The Big Forkers', 'Fabiosa', 'Fortum', 'Embee Software', 'Cover Asia Press',
  'Arte', 'Metro', 'Mirror', 'Grazia', 'NBC', 'Glue Creatives', 'Harfun',
  'Solugo', 'Suburb Magazine', 'Tycoon Global'
];

export const WHY_US_POINTS = [
  { title: 'One Stop Solution', desc: 'From concept to final cut, we handle everything so you don’t have to.' },
  { title: 'Budget Agnostic Excellence', desc: 'Premium quality regardless of the budget. We make it work.' },
  { title: 'Journalistic Integrity', desc: 'Stories rooted in truth, depth, and rigorous research.' },
  { title: 'Global Standards', desc: 'Content created in India, crafted for the world.' },
  { title: 'Creative Agility', desc: 'From rapid social content to feature-length documentaries.' },
  { title: 'End-to-End Production', desc: 'Pre-production, shooting, post-production, and distribution strategy.' },
];