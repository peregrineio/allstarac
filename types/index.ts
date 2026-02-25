// Type definitions for Allstar AC website

export interface ServiceArea {
  name: string;
  slug: string;
  hasPage: boolean;
}

export interface Service {
  name: string;
  slug: string;
  href: string;
  icon: string;
  shortDescription: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}
