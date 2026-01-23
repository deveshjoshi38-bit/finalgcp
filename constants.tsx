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
  phone: '+919899829363',
  email: 'girlchildproductions@gmail.com',
  location: 'New Delhi, India',
  socials: {
    instagram: 'https://www.instagram.com/girlchildproductions',
    linkedin: 'https://www.linkedin.com/in/charnamrit-sachdeva-3b216826/',
    whatsapp: 'https://wa.me/919899829363'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    category: 'Filmmaking & Production',
    items: ['Documentary Filmmaking', 'Digital Films', 'TVCs (Television Commercials)', 'Web Series', 'Short Films', 'Line Production', 'News/Video Stories'],
    icon: <Film className="w-6 h-6" />,
  },
  {
    category: 'Animation & Graphics',
    items: ['2D Animated Videos', '3D Animated Videos', 'Explanatory Videos', 'Motion Graphics'],
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
    items: ['Podcasts', 'Sound Design', 'Voiceovers', 'Jingles'],
    icon: <Mic className="w-6 h-6" />,
  },
  {
    category: 'Management & Strategy',
    items: ['Artist Management', 'Line Production', 'Digital Marketing', 'Public Relations'],
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
  // Journalism & Press Stories
  {
    id: '14',
    title: "Justice for Jyoti Singh: A Mother's Long Wait",
    category: 'Journalism & Press',
    image: 'https://www.telegraph.co.uk/content/dam/women/2020/03/20/TELEMMGLPICT000228214832_trans_NvBQzQNjv4BqSw1JcONncIvdV_EnjsnkAgzDvZHoxG5Pk01xSfGx6lA.jpeg?impolicy=OG-Standard',
    year: '2020',
    videoUrl: 'https://www.telegraph.co.uk/women/life/new-delhi-gang-rape-mother-better-daughter-died-have-wait-7/',
  },
  {
    id: '15',
    title: 'The Tragic Reality of Abandoned Daughters',
    category: 'Journalism & Press',
    image: 'https://i2-prod.mirror.co.uk/article10889844.ece/ALTERNATES/s1200/EMB-PAY-PROD-CAP_330670_01.jpg',
    year: '2017',
    videoUrl: 'https://www.mirror.co.uk/news/world-news/dumped-doorstep-thousands-baby-girls-10896056',
  },
  {
    id: '16',
    title: "Living with Progeria: A Child's Struggle",
    category: 'Journalism & Press',
    image: 'https://i2-prod.mirror.co.uk/article8522185.ece/ALTERNATES/s1200/PAY-Bayezid-Hossain.jpg',
    year: '2016',
    videoUrl: 'https://www.mirror.co.uk/news/world-news/inside-world-four-year-old-8522318',
  },
  {
    id: '17',
    title: 'Empowerment Through Sport: Child Brides on the Pitch',
    category: 'Journalism & Press',
    image: 'https://i2-prod.mirror.co.uk/article12201339.ece/ALTERNATES/s1200f/EMB-PAY-PROD-SUNDAY-CAP_330792_32.jpg',
    year: '2018',
    videoUrl: 'https://www.mirror.co.uk/news/world-news/child-brides-united-football-team-12205210',
  },
  {
    id: '18',
    title: "Teen Survivor of 'Honour' Attack: A Fight for Life",
    category: 'Journalism & Press',
    image: 'https://i.dailymail.co.uk/i/pix/2017/05/12/12/403BC9CE00000578-0-image-a-17_1494590389991.jpg',
    year: '2017',
    videoUrl: 'https://www.dailymail.co.uk/news/article-4499600/Girl-fights-life-father-brother-shot-her.html',
  },
  {
    id: '19',
    title: "Betrayed by Blood: A Widow's Vow for Justice",
    category: 'Journalism & Press',
    image: 'https://i.dailymail.co.uk/i/pix/2016/04/21/12/33662BCE00000578-0-image-a-3_1461239115384.jpg',
    year: '2016',
    videoUrl: 'https://www.dailymail.co.uk/news/article-3551521/Dad-murdered-husband-tried-kill-want-dead-Extraordinary-bravery-tragic-honour-killing-victim-wants-father-sentenced-death.html',
  },
  {
    id: '20',
    title: 'The Slumdog Seamstress & The Royal Dress',
    category: 'Journalism & Press',
    image: 'https://i.dailymail.co.uk/i/pix/2016/04/13/08/3320F21700000578-0-image-a-18_1460532808317.jpg',
    year: '2016',
    videoUrl: 'https://www.dailymail.co.uk/news/article-3536608/I-don-t-know-Kate-Slumdog-Seamstress-makes-3-day-stitching-Duchess-Cambridge-s-140-boho-frock-Mumbai-never-heard-her.html',
  },
  {
    id: '21',
    title: 'Mothers to the Wild: The Bishnoi Tradition',
    category: 'Journalism & Press',
    image: 'https://i.dailymail.co.uk/i/pix/2016/04/29/09/33A4963600000578-0-image-a-3_1461918586352.jpg',
    year: '2016',
    videoUrl: 'https://www.dailymail.co.uk/news/article-3564005/I-breastfeed-deer-like-one-family.html',
  },
  {
    id: '22',
    title: 'Delhi in a War Zone: The Pandemic Crisis',
    category: 'Journalism & Press',
    image: 'https://images.bauerhosting.com/legacy/media/6091/6a80/dcb2/f01c/925d/f2e4/GettyImages-1232684822.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80',
    year: '2021',
    videoUrl: 'https://graziadaily.co.uk/life/in-the-news/india-covid-latest-news/',
  },
  {
    id: '23',
    title: 'Voices for Change: Investigative Reporting in India',
    category: 'Journalism & Press',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRSPmcx7TvkrmTVfHTt58Cuekgww95NVzwvtb5YhFERu45CcOagCYlmzNk7FDx96r4K5oidEZGQJGoB_WKhnu1bijyuYPlDhpqzWUUKADRCYU3NBxbMarQeX6tqKo29rhbqQh1vIHAq60/s640/G1.JPG',
    year: '2023',
    videoUrl: 'https://www.faisalmagray.com/p/tearsheets.html?m=1',
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

export const FEATURED_JOURNALISM = [
  {
    title: "Justice for Jyoti Singh: A Mother's Long Wait",
    summary: "The story chronicles the long battle for justice by the parents of Jyoti Singh, whose brutal gang rape in New Delhi sparked global outrage.",
    imageUrl: "https://www.telegraph.co.uk/content/dam/women/2020/03/20/TELEMMGLPICT000228214832_trans_NvBQzQNjv4BqSw1JcONncIvdV_EnjsnkAgzDvZHoxG5Pk01xSfGx6lA.jpeg?impolicy=OG-Standard",
    link: "https://www.telegraph.co.uk/women/life/new-delhi-gang-rape-mother-better-daughter-died-have-wait-7/"
  },
  {
    title: "The Slumdog Seamstress & The Royal Dress",
    summary: "Babita Sabath, a Mumbai seamstress earning £3 a day, unknowingly crafted a dress worn by the Duchess of Cambridge, which became an instant global sensation.",
    imageUrl: "https://i.dailymail.co.uk/i/pix/2016/04/13/08/3320F21700000578-0-image-a-18_1460532808317.jpg",
    link: "https://www.dailymail.co.uk/news/article-3536608/I-don-t-know-Kate-Slumdog-Seamstress-makes-3-day-stitching-Duchess-Cambridge-s-140-boho-frock-Mumbai-never-heard-her.html"
  }
];