export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  link?: string;
  image: string;
}

export interface HeroSlideType {
  id: number;
  image: string;
  caption: string;
}