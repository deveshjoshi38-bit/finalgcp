export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  category: string;
  items: string[];
  icon?: React.ReactNode;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year?: string;
  client?: string;
}

export interface Client {
  name: string;
  logoText: string; // Using text for logos to keep it clean/simple if SVGs aren't available, or placeholder URL
}

export interface StatItem {
  label: string;
  value: string;
}
